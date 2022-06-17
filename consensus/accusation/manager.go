package accusation

import (
	"bytes"
	"fmt"
	"runtime"
	"sync"

	"github.com/MadBase/MadNet/consensus/db"
	"github.com/MadBase/MadNet/consensus/lstate"
	"github.com/MadBase/MadNet/consensus/objs"
	"github.com/dgraph-io/badger/v2"
	"github.com/sirupsen/logrus"
)

// a function that returns an Accusation interface object when found, and a bool indicating if an accusation has been found (true) or not (false)
type detectorLogic = func(rs *objs.RoundState) (*Accusation, bool)

// rsCacheStruct caches a validator's roundState height, round and hash to avoid checking for accusations unless anything changes
type rsCacheStruct struct {
	height uint32
	round  uint32
	rsHash []byte
}

func (r *rsCacheStruct) DidChange(rs *objs.RoundState) (bool, error) {
	rsHash, err := rs.Hash()
	if err != nil {
		return false, err
	}

	return r.height != rs.RCert.RClaims.Height ||
			r.round != rs.RCert.RClaims.Round ||
			!bytes.Equal(r.rsHash, rsHash),
		nil
}

// Manager polls validators' roundStates and checks for possible accusation conditions
type Manager struct {
	sync.Mutex
	processingPipeline []detectorLogic
	database           *db.Database
	sstore             *lstate.Store
	logger             *logrus.Logger
	rsCache            map[string]*rsCacheStruct

	// queue where new roundStates are pushed to be checked for malicious behavior by workers
	workQ chan *lstate.RoundStates
	// queue where identified accusations are pushed by workers to be further processed
	accusationQ chan *Accusation
	closeChan   chan struct{}
}

// NewManager creates a new *Manager
func NewManager(database *db.Database, logger *logrus.Logger) *Manager {
	detectorLogics := make([]detectorLogic, 0)
	detectorLogics = append(detectorLogics, detectMultipleProposal)
	detectorLogics = append(detectorLogics, detectDoubleSpend)

	workQ := make(chan *lstate.RoundStates, 1)
	accusationQ := make(chan *Accusation, 1)
	closeChan := make(chan struct{})

	m := &Manager{}
	err := m.Init(database, logger, detectorLogics, workQ, accusationQ, closeChan)
	if err != nil {
		panic(fmt.Errorf("failed to initialize Accusation.Manager: %v", err))
	}

	return m
}

func (m *Manager) Init(
	database *db.Database,
	logger *logrus.Logger,
	detectorLogics []detectorLogic,
	workQ chan *lstate.RoundStates,
	accusationQ chan *Accusation,
	closeChan chan struct{}) error {

	sstore := &lstate.Store{}
	sstore.Init(database)

	m.processingPipeline = detectorLogics
	m.database = database
	m.logger = logger
	m.sstore = sstore
	m.rsCache = make(map[string]*rsCacheStruct)
	m.workQ = workQ
	m.accusationQ = accusationQ
	m.closeChan = closeChan

	return nil
}

func (m *Manager) StartWorkers() {
	cpuCores := runtime.NumCPU()
	for i := 0; i < cpuCores; i++ {
		go m.runWorker()
	}
}

func (m *Manager) StopWorkers() {
	m.closeChan <- struct{}{}
}

func (m *Manager) runWorker() {
	for {
		select {
		case <-m.closeChan:
			return
		case lrs := <-m.workQ:
			err := m.processLRS(lrs)
			if err != nil {
				m.logger.Errorf("failed to process LRS: %v", err)
			}
		}
	}
}

func (m *Manager) Poll() error {
	var lrs *lstate.RoundStates
	err := m.database.View(func(txn *badger.Txn) error {
		rss, err := m.sstore.LoadLocalState(txn)
		if err != nil {
			return err
		}
		lrs = rss
		return nil
	})
	if err != nil {
		return err
	}

	if lrs.Height() < 2 {
		return nil
	}

	// send this lstate.RoundStates to be processed by workers
	m.workQ <- lrs

	// get accusations from workers and send them to the Scheduler/TaskManager to be processed further
	select {
	case <-m.closeChan:
		m.logger.Debug("AccusationManager is now closing because of <-m.closeChan")
		return nil
	case acc := <-m.accusationQ:
		// an accusation has been formed and now needs to be send to the smart contracts
		m.logger.Debugf("Got an accusation from a worker: %v", acc)

		m.database.Update(func(txn *badger.Txn) error {
			// todo: save accusation into DB
			// todo: send this accusation to Scheduler
			// todo: could this cause a deadlock bc Task manager will also read/write to DB?
			// todo: make sure it returns OK if everything goes well

			return nil
		})
		if err != nil {
			// if this is a retryable error, then retry the accusation later on
			//   save accusation into memory to retry later

			// otherwise return the error which will stop the Synchronizer loop,
			// causing the node to exit
			return err
		}
	default:
		//m.logger.Debug("AccusationManager did not find an accusation")
	}

	return nil
}

func (m *Manager) processLRS(lrs *lstate.RoundStates) error {
	// keep track of new validators to clear the cache from old validators
	currentValidators := make(map[string]bool)

	for _, v := range lrs.ValidatorSet.Validators {
		rs := lrs.GetRoundState(v.VAddr)
		if rs == nil {
			m.logger.Errorf("AccusationManager: could not get roundState for validator 0x%x", v.VAddr)
			continue
		}

		valAddress := fmt.Sprintf("0x%x", v.VAddr)
		updated := false
		currentValidators[valAddress] = true

		m.Lock()
		rsCacheEntry, isCached := m.rsCache[valAddress]
		m.Unlock()

		if isCached {
			// validator exists in cache, let's check if there are changes in its roundState
			var err error
			updated, err = rsCacheEntry.DidChange(rs)
			if err != nil {
				return err
			}
		} else {
			updated = true
			rsCacheEntry = &rsCacheStruct{
				// data will be populated down below
			}
		}

		if updated {

			// m.logger.WithFields(logrus.Fields{
			// 	"lrs.height":              lrs.Height(),
			// 	"lrs.round":               lrs.Round(),
			// 	"rs.RCert.RClaims.Height": rs.RCert.RClaims.Height,
			// 	"rs.RCert.RClaims.Round":  rs.RCert.RClaims.Round,
			// 	"vAddr":                   valAddress,
			// }).Debug("AccusationManager: processing roundState")

			m.processRoundState(rs)

			// update rsCache
			rsCacheEntry.height = rs.RCert.RClaims.Height
			rsCacheEntry.round = rs.RCert.RClaims.Round
			rsHash, err := rs.Hash()
			if err != nil {
				return err
			}
			rsCacheEntry.rsHash = rsHash
			m.Lock()
			m.rsCache[valAddress] = rsCacheEntry
			m.Unlock()
		}
	}

	// remove validators from cache that are not in the current validatorSet,
	// ensuring the cache is not growing indefinitely with old validators
	m.Lock()
	toDelete := make([]string, 0)
	// iterate over the cache and keep track of validators not in the current validatorSet
	for vAddr := range m.rsCache {
		if _, ok := currentValidators[vAddr]; !ok {
			toDelete = append(toDelete, vAddr)
		}
	}

	// delete old validators from cache
	for _, vAddr := range toDelete {
		delete(m.rsCache, vAddr)
	}
	m.Unlock()

	return nil
}

// processRoundState checks if there is an accusation for a certain roundState and if so,
// creates an accusation task and executes it, not blocking the Synchonizer loop and consensus.
func (m *Manager) processRoundState(rs *objs.RoundState) {
	for _, detector := range m.processingPipeline {
		accusation, found := detector(rs)
		if found {
			m.logger.Warnf("Accusation found: %#v", accusation)
			// todo: spawn an Accusation task and schedule it on the task scheduler
			// todo: don't block while waiting for a response from the accusation task
			// todo: store this accusation in DB, and send this accusation to the Scheduler system
			// todo: make sure it's restart/crash resillient
			m.accusationQ <- accusation
		}
	}
}
