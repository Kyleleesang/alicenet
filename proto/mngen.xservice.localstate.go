// Code generated. DO NOT EDIT.

package proto

import (
	"context"
	"errors"
	"sync"
)


// LocalStateGetDataHandler is an interface class that only contains
// the method HandleLocalStateGetData
// The class that implements this method MUST handle the RPC call for
// the method GetData of the RPC service LocalState
type LocalStateGetDataHandler interface {
	HandleLocalStateGetData(context.Context, *GetDataRequest) (*GetDataResponse, error)
}

// LocalStateGetValueForOwnerHandler is an interface class that only contains
// the method HandleLocalStateGetValueForOwner
// The class that implements this method MUST handle the RPC call for
// the method GetValueForOwner of the RPC service LocalState
type LocalStateGetValueForOwnerHandler interface {
	HandleLocalStateGetValueForOwner(context.Context, *GetValueRequest) (*GetValueResponse, error)
}

// LocalStateIterateNameSpaceHandler is an interface class that only contains
// the method HandleLocalStateIterateNameSpace
// The class that implements this method MUST handle the RPC call for
// the method IterateNameSpace of the RPC service LocalState
type LocalStateIterateNameSpaceHandler interface {
	HandleLocalStateIterateNameSpace(context.Context, *IterateNameSpaceRequest) (*IterateNameSpaceResponse, error)
}

// LocalStateGetMinedTransactionHandler is an interface class that only contains
// the method HandleLocalStateGetMinedTransaction
// The class that implements this method MUST handle the RPC call for
// the method GetMinedTransaction of the RPC service LocalState
type LocalStateGetMinedTransactionHandler interface {
	HandleLocalStateGetMinedTransaction(context.Context, *MinedTransactionRequest) (*MinedTransactionResponse, error)
}

// LocalStateGetBlockHeaderHandler is an interface class that only contains
// the method HandleLocalStateGetBlockHeader
// The class that implements this method MUST handle the RPC call for
// the method GetBlockHeader of the RPC service LocalState
type LocalStateGetBlockHeaderHandler interface {
	HandleLocalStateGetBlockHeader(context.Context, *BlockHeaderRequest) (*BlockHeaderResponse, error)
}

// LocalStateGetUTXOHandler is an interface class that only contains
// the method HandleLocalStateGetUTXO
// The class that implements this method MUST handle the RPC call for
// the method GetUTXO of the RPC service LocalState
type LocalStateGetUTXOHandler interface {
	HandleLocalStateGetUTXO(context.Context, *UTXORequest) (*UTXOResponse, error)
}

// LocalStateGetPendingTransactionHandler is an interface class that only contains
// the method HandleLocalStateGetPendingTransaction
// The class that implements this method MUST handle the RPC call for
// the method GetPendingTransaction of the RPC service LocalState
type LocalStateGetPendingTransactionHandler interface {
	HandleLocalStateGetPendingTransaction(context.Context, *PendingTransactionRequest) (*PendingTransactionResponse, error)
}

// LocalStateGetRoundStateForValidatorHandler is an interface class that only contains
// the method HandleLocalStateGetRoundStateForValidator
// The class that implements this method MUST handle the RPC call for
// the method GetRoundStateForValidator of the RPC service LocalState
type LocalStateGetRoundStateForValidatorHandler interface {
	HandleLocalStateGetRoundStateForValidator(context.Context, *RoundStateForValidatorRequest) (*RoundStateForValidatorResponse, error)
}

// LocalStateGetValidatorSetHandler is an interface class that only contains
// the method HandleLocalStateGetValidatorSet
// The class that implements this method MUST handle the RPC call for
// the method GetValidatorSet of the RPC service LocalState
type LocalStateGetValidatorSetHandler interface {
	HandleLocalStateGetValidatorSet(context.Context, *ValidatorSetRequest) (*ValidatorSetResponse, error)
}

// LocalStateGetBlockNumberHandler is an interface class that only contains
// the method HandleLocalStateGetBlockNumber
// The class that implements this method MUST handle the RPC call for
// the method GetBlockNumber of the RPC service LocalState
type LocalStateGetBlockNumberHandler interface {
	HandleLocalStateGetBlockNumber(context.Context, *BlockNumberRequest) (*BlockNumberResponse, error)
}

// LocalStateGetChainIDHandler is an interface class that only contains
// the method HandleLocalStateGetChainID
// The class that implements this method MUST handle the RPC call for
// the method GetChainID of the RPC service LocalState
type LocalStateGetChainIDHandler interface {
	HandleLocalStateGetChainID(context.Context, *ChainIDRequest) (*ChainIDResponse, error)
}

// LocalStateSendTransactionHandler is an interface class that only contains
// the method HandleLocalStateSendTransaction
// The class that implements this method MUST handle the RPC call for
// the method SendTransaction of the RPC service LocalState
type LocalStateSendTransactionHandler interface {
	HandleLocalStateSendTransaction(context.Context, *TransactionData) (*TransactionDetails, error)
}

// LocalStateGetEpochNumberHandler is an interface class that only contains
// the method HandleLocalStateGetEpochNumber
// The class that implements this method MUST handle the RPC call for
// the method GetEpochNumber of the RPC service LocalState
type LocalStateGetEpochNumberHandler interface {
	HandleLocalStateGetEpochNumber(context.Context, *EpochNumberRequest) (*EpochNumberResponse, error)
}

// LocalStateGetTxBlockNumberHandler is an interface class that only contains
// the method HandleLocalStateGetTxBlockNumber
// The class that implements this method MUST handle the RPC call for
// the method GetTxBlockNumber of the RPC service LocalState
type LocalStateGetTxBlockNumberHandler interface {
	HandleLocalStateGetTxBlockNumber(context.Context, *TxBlockNumberRequest) (*TxBlockNumberResponse, error)
}



// LocalStateDispatch allows handlers to be registered for all RPC methods
// using the Register<Service><Name> methods.
// After registration, the LocalStateDispatch struct will dispatch calls
// to an rpc method via the methods named as <Service><Name>(...)
type LocalStateDispatch struct {
	sync.Mutex
  //	handlerLocalStateGetData is the registered handler for the
	//  GetData RPC method of service LocalState
	handlerLocalStateGetData LocalStateGetDataHandler
	// waitChanLocalStateGetData will cause a caller of the RPC
	// method GetData on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateGetData chan struct{}
  //	handlerLocalStateGetValueForOwner is the registered handler for the
	//  GetValueForOwner RPC method of service LocalState
	handlerLocalStateGetValueForOwner LocalStateGetValueForOwnerHandler
	// waitChanLocalStateGetValueForOwner will cause a caller of the RPC
	// method GetValueForOwner on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateGetValueForOwner chan struct{}
  //	handlerLocalStateIterateNameSpace is the registered handler for the
	//  IterateNameSpace RPC method of service LocalState
	handlerLocalStateIterateNameSpace LocalStateIterateNameSpaceHandler
	// waitChanLocalStateIterateNameSpace will cause a caller of the RPC
	// method IterateNameSpace on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateIterateNameSpace chan struct{}
  //	handlerLocalStateGetMinedTransaction is the registered handler for the
	//  GetMinedTransaction RPC method of service LocalState
	handlerLocalStateGetMinedTransaction LocalStateGetMinedTransactionHandler
	// waitChanLocalStateGetMinedTransaction will cause a caller of the RPC
	// method GetMinedTransaction on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateGetMinedTransaction chan struct{}
  //	handlerLocalStateGetBlockHeader is the registered handler for the
	//  GetBlockHeader RPC method of service LocalState
	handlerLocalStateGetBlockHeader LocalStateGetBlockHeaderHandler
	// waitChanLocalStateGetBlockHeader will cause a caller of the RPC
	// method GetBlockHeader on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateGetBlockHeader chan struct{}
  //	handlerLocalStateGetUTXO is the registered handler for the
	//  GetUTXO RPC method of service LocalState
	handlerLocalStateGetUTXO LocalStateGetUTXOHandler
	// waitChanLocalStateGetUTXO will cause a caller of the RPC
	// method GetUTXO on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateGetUTXO chan struct{}
  //	handlerLocalStateGetPendingTransaction is the registered handler for the
	//  GetPendingTransaction RPC method of service LocalState
	handlerLocalStateGetPendingTransaction LocalStateGetPendingTransactionHandler
	// waitChanLocalStateGetPendingTransaction will cause a caller of the RPC
	// method GetPendingTransaction on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateGetPendingTransaction chan struct{}
  //	handlerLocalStateGetRoundStateForValidator is the registered handler for the
	//  GetRoundStateForValidator RPC method of service LocalState
	handlerLocalStateGetRoundStateForValidator LocalStateGetRoundStateForValidatorHandler
	// waitChanLocalStateGetRoundStateForValidator will cause a caller of the RPC
	// method GetRoundStateForValidator on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateGetRoundStateForValidator chan struct{}
  //	handlerLocalStateGetValidatorSet is the registered handler for the
	//  GetValidatorSet RPC method of service LocalState
	handlerLocalStateGetValidatorSet LocalStateGetValidatorSetHandler
	// waitChanLocalStateGetValidatorSet will cause a caller of the RPC
	// method GetValidatorSet on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateGetValidatorSet chan struct{}
  //	handlerLocalStateGetBlockNumber is the registered handler for the
	//  GetBlockNumber RPC method of service LocalState
	handlerLocalStateGetBlockNumber LocalStateGetBlockNumberHandler
	// waitChanLocalStateGetBlockNumber will cause a caller of the RPC
	// method GetBlockNumber on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateGetBlockNumber chan struct{}
  //	handlerLocalStateGetChainID is the registered handler for the
	//  GetChainID RPC method of service LocalState
	handlerLocalStateGetChainID LocalStateGetChainIDHandler
	// waitChanLocalStateGetChainID will cause a caller of the RPC
	// method GetChainID on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateGetChainID chan struct{}
  //	handlerLocalStateSendTransaction is the registered handler for the
	//  SendTransaction RPC method of service LocalState
	handlerLocalStateSendTransaction LocalStateSendTransactionHandler
	// waitChanLocalStateSendTransaction will cause a caller of the RPC
	// method SendTransaction on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateSendTransaction chan struct{}
  //	handlerLocalStateGetEpochNumber is the registered handler for the
	//  GetEpochNumber RPC method of service LocalState
	handlerLocalStateGetEpochNumber LocalStateGetEpochNumberHandler
	// waitChanLocalStateGetEpochNumber will cause a caller of the RPC
	// method GetEpochNumber on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateGetEpochNumber chan struct{}
  //	handlerLocalStateGetTxBlockNumber is the registered handler for the
	//  GetTxBlockNumber RPC method of service LocalState
	handlerLocalStateGetTxBlockNumber LocalStateGetTxBlockNumberHandler
	// waitChanLocalStateGetTxBlockNumber will cause a caller of the RPC
	// method GetTxBlockNumber on service LocalState to block until the
	// method has been registered.
	waitChanLocalStateGetTxBlockNumber chan struct{}
}



// RegisterLocalStateGetData will register the object 't' as the service
// handler for the RPC method GetData from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateGetData(t LocalStateGetDataHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateGetData != nil {
		panic("double registration of LocalStateGetData")
	}
	// register the service handler
	d.handlerLocalStateGetData = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateGetData)
}

// LocalStateGetData will invoke the handler for the RPC method
// GetData from service LocalState
func (d *LocalStateDispatch) LocalStateGetData(ctx context.Context, r *GetDataRequest) (*GetDataResponse, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateGetData:
		// return the invoked methods response
		return d.handlerLocalStateGetData.HandleLocalStateGetData(ctx, r)
	}
}

// RegisterLocalStateGetValueForOwner will register the object 't' as the service
// handler for the RPC method GetValueForOwner from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateGetValueForOwner(t LocalStateGetValueForOwnerHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateGetValueForOwner != nil {
		panic("double registration of LocalStateGetValueForOwner")
	}
	// register the service handler
	d.handlerLocalStateGetValueForOwner = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateGetValueForOwner)
}

// LocalStateGetValueForOwner will invoke the handler for the RPC method
// GetValueForOwner from service LocalState
func (d *LocalStateDispatch) LocalStateGetValueForOwner(ctx context.Context, r *GetValueRequest) (*GetValueResponse, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateGetValueForOwner:
		// return the invoked methods response
		return d.handlerLocalStateGetValueForOwner.HandleLocalStateGetValueForOwner(ctx, r)
	}
}

// RegisterLocalStateIterateNameSpace will register the object 't' as the service
// handler for the RPC method IterateNameSpace from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateIterateNameSpace(t LocalStateIterateNameSpaceHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateIterateNameSpace != nil {
		panic("double registration of LocalStateIterateNameSpace")
	}
	// register the service handler
	d.handlerLocalStateIterateNameSpace = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateIterateNameSpace)
}

// LocalStateIterateNameSpace will invoke the handler for the RPC method
// IterateNameSpace from service LocalState
func (d *LocalStateDispatch) LocalStateIterateNameSpace(ctx context.Context, r *IterateNameSpaceRequest) (*IterateNameSpaceResponse, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateIterateNameSpace:
		// return the invoked methods response
		return d.handlerLocalStateIterateNameSpace.HandleLocalStateIterateNameSpace(ctx, r)
	}
}

// RegisterLocalStateGetMinedTransaction will register the object 't' as the service
// handler for the RPC method GetMinedTransaction from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateGetMinedTransaction(t LocalStateGetMinedTransactionHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateGetMinedTransaction != nil {
		panic("double registration of LocalStateGetMinedTransaction")
	}
	// register the service handler
	d.handlerLocalStateGetMinedTransaction = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateGetMinedTransaction)
}

// LocalStateGetMinedTransaction will invoke the handler for the RPC method
// GetMinedTransaction from service LocalState
func (d *LocalStateDispatch) LocalStateGetMinedTransaction(ctx context.Context, r *MinedTransactionRequest) (*MinedTransactionResponse, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateGetMinedTransaction:
		// return the invoked methods response
		return d.handlerLocalStateGetMinedTransaction.HandleLocalStateGetMinedTransaction(ctx, r)
	}
}

// RegisterLocalStateGetBlockHeader will register the object 't' as the service
// handler for the RPC method GetBlockHeader from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateGetBlockHeader(t LocalStateGetBlockHeaderHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateGetBlockHeader != nil {
		panic("double registration of LocalStateGetBlockHeader")
	}
	// register the service handler
	d.handlerLocalStateGetBlockHeader = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateGetBlockHeader)
}

// LocalStateGetBlockHeader will invoke the handler for the RPC method
// GetBlockHeader from service LocalState
func (d *LocalStateDispatch) LocalStateGetBlockHeader(ctx context.Context, r *BlockHeaderRequest) (*BlockHeaderResponse, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateGetBlockHeader:
		// return the invoked methods response
		return d.handlerLocalStateGetBlockHeader.HandleLocalStateGetBlockHeader(ctx, r)
	}
}

// RegisterLocalStateGetUTXO will register the object 't' as the service
// handler for the RPC method GetUTXO from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateGetUTXO(t LocalStateGetUTXOHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateGetUTXO != nil {
		panic("double registration of LocalStateGetUTXO")
	}
	// register the service handler
	d.handlerLocalStateGetUTXO = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateGetUTXO)
}

// LocalStateGetUTXO will invoke the handler for the RPC method
// GetUTXO from service LocalState
func (d *LocalStateDispatch) LocalStateGetUTXO(ctx context.Context, r *UTXORequest) (*UTXOResponse, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateGetUTXO:
		// return the invoked methods response
		return d.handlerLocalStateGetUTXO.HandleLocalStateGetUTXO(ctx, r)
	}
}

// RegisterLocalStateGetPendingTransaction will register the object 't' as the service
// handler for the RPC method GetPendingTransaction from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateGetPendingTransaction(t LocalStateGetPendingTransactionHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateGetPendingTransaction != nil {
		panic("double registration of LocalStateGetPendingTransaction")
	}
	// register the service handler
	d.handlerLocalStateGetPendingTransaction = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateGetPendingTransaction)
}

// LocalStateGetPendingTransaction will invoke the handler for the RPC method
// GetPendingTransaction from service LocalState
func (d *LocalStateDispatch) LocalStateGetPendingTransaction(ctx context.Context, r *PendingTransactionRequest) (*PendingTransactionResponse, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateGetPendingTransaction:
		// return the invoked methods response
		return d.handlerLocalStateGetPendingTransaction.HandleLocalStateGetPendingTransaction(ctx, r)
	}
}

// RegisterLocalStateGetRoundStateForValidator will register the object 't' as the service
// handler for the RPC method GetRoundStateForValidator from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateGetRoundStateForValidator(t LocalStateGetRoundStateForValidatorHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateGetRoundStateForValidator != nil {
		panic("double registration of LocalStateGetRoundStateForValidator")
	}
	// register the service handler
	d.handlerLocalStateGetRoundStateForValidator = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateGetRoundStateForValidator)
}

// LocalStateGetRoundStateForValidator will invoke the handler for the RPC method
// GetRoundStateForValidator from service LocalState
func (d *LocalStateDispatch) LocalStateGetRoundStateForValidator(ctx context.Context, r *RoundStateForValidatorRequest) (*RoundStateForValidatorResponse, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateGetRoundStateForValidator:
		// return the invoked methods response
		return d.handlerLocalStateGetRoundStateForValidator.HandleLocalStateGetRoundStateForValidator(ctx, r)
	}
}

// RegisterLocalStateGetValidatorSet will register the object 't' as the service
// handler for the RPC method GetValidatorSet from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateGetValidatorSet(t LocalStateGetValidatorSetHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateGetValidatorSet != nil {
		panic("double registration of LocalStateGetValidatorSet")
	}
	// register the service handler
	d.handlerLocalStateGetValidatorSet = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateGetValidatorSet)
}

// LocalStateGetValidatorSet will invoke the handler for the RPC method
// GetValidatorSet from service LocalState
func (d *LocalStateDispatch) LocalStateGetValidatorSet(ctx context.Context, r *ValidatorSetRequest) (*ValidatorSetResponse, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateGetValidatorSet:
		// return the invoked methods response
		return d.handlerLocalStateGetValidatorSet.HandleLocalStateGetValidatorSet(ctx, r)
	}
}

// RegisterLocalStateGetBlockNumber will register the object 't' as the service
// handler for the RPC method GetBlockNumber from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateGetBlockNumber(t LocalStateGetBlockNumberHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateGetBlockNumber != nil {
		panic("double registration of LocalStateGetBlockNumber")
	}
	// register the service handler
	d.handlerLocalStateGetBlockNumber = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateGetBlockNumber)
}

// LocalStateGetBlockNumber will invoke the handler for the RPC method
// GetBlockNumber from service LocalState
func (d *LocalStateDispatch) LocalStateGetBlockNumber(ctx context.Context, r *BlockNumberRequest) (*BlockNumberResponse, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateGetBlockNumber:
		// return the invoked methods response
		return d.handlerLocalStateGetBlockNumber.HandleLocalStateGetBlockNumber(ctx, r)
	}
}

// RegisterLocalStateGetChainID will register the object 't' as the service
// handler for the RPC method GetChainID from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateGetChainID(t LocalStateGetChainIDHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateGetChainID != nil {
		panic("double registration of LocalStateGetChainID")
	}
	// register the service handler
	d.handlerLocalStateGetChainID = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateGetChainID)
}

// LocalStateGetChainID will invoke the handler for the RPC method
// GetChainID from service LocalState
func (d *LocalStateDispatch) LocalStateGetChainID(ctx context.Context, r *ChainIDRequest) (*ChainIDResponse, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateGetChainID:
		// return the invoked methods response
		return d.handlerLocalStateGetChainID.HandleLocalStateGetChainID(ctx, r)
	}
}

// RegisterLocalStateSendTransaction will register the object 't' as the service
// handler for the RPC method SendTransaction from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateSendTransaction(t LocalStateSendTransactionHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateSendTransaction != nil {
		panic("double registration of LocalStateSendTransaction")
	}
	// register the service handler
	d.handlerLocalStateSendTransaction = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateSendTransaction)
}

// LocalStateSendTransaction will invoke the handler for the RPC method
// SendTransaction from service LocalState
func (d *LocalStateDispatch) LocalStateSendTransaction(ctx context.Context, r *TransactionData) (*TransactionDetails, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateSendTransaction:
		// return the invoked methods response
		return d.handlerLocalStateSendTransaction.HandleLocalStateSendTransaction(ctx, r)
	}
}

// RegisterLocalStateGetEpochNumber will register the object 't' as the service
// handler for the RPC method GetEpochNumber from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateGetEpochNumber(t LocalStateGetEpochNumberHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateGetEpochNumber != nil {
		panic("double registration of LocalStateGetEpochNumber")
	}
	// register the service handler
	d.handlerLocalStateGetEpochNumber = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateGetEpochNumber)
}

// LocalStateGetEpochNumber will invoke the handler for the RPC method
// GetEpochNumber from service LocalState
func (d *LocalStateDispatch) LocalStateGetEpochNumber(ctx context.Context, r *EpochNumberRequest) (*EpochNumberResponse, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateGetEpochNumber:
		// return the invoked methods response
		return d.handlerLocalStateGetEpochNumber.HandleLocalStateGetEpochNumber(ctx, r)
	}
}

// RegisterLocalStateGetTxBlockNumber will register the object 't' as the service
// handler for the RPC method GetTxBlockNumber from service LocalState
func (d *LocalStateDispatch) RegisterLocalStateGetTxBlockNumber(t LocalStateGetTxBlockNumberHandler) {
	d.Lock()
	defer d.Unlock()
	// double registration is not allowed
	if d.handlerLocalStateGetTxBlockNumber != nil {
		panic("double registration of LocalStateGetTxBlockNumber")
	}
	// register the service handler
	d.handlerLocalStateGetTxBlockNumber = t
	// close the wait channel to signal that the method is ready to use
	close(d.waitChanLocalStateGetTxBlockNumber)
}

// LocalStateGetTxBlockNumber will invoke the handler for the RPC method
// GetTxBlockNumber from service LocalState
func (d *LocalStateDispatch) LocalStateGetTxBlockNumber(ctx context.Context, r *TxBlockNumberRequest) (*TxBlockNumberResponse, error) {
	// wait for registration to complete or context to be canceled
	select {
	case <-ctx.Done():
		return nil, errors.New("context canceled")
	case <-d.waitChanLocalStateGetTxBlockNumber:
		// return the invoked methods response
		return d.handlerLocalStateGetTxBlockNumber.HandleLocalStateGetTxBlockNumber(ctx, r)
	}
}



// NewLocalStateDispatch will construct a new LocalStateDispatcher with all fields properly
// initialized.
func NewLocalStateDispatch() *LocalStateDispatch {
	return &LocalStateDispatch{ 
		// initialize the wait channel for method GetData on service LocalState
		waitChanLocalStateGetData: make(chan struct{}),
		// initialize the wait channel for method GetValueForOwner on service LocalState
		waitChanLocalStateGetValueForOwner: make(chan struct{}),
		// initialize the wait channel for method IterateNameSpace on service LocalState
		waitChanLocalStateIterateNameSpace: make(chan struct{}),
		// initialize the wait channel for method GetMinedTransaction on service LocalState
		waitChanLocalStateGetMinedTransaction: make(chan struct{}),
		// initialize the wait channel for method GetBlockHeader on service LocalState
		waitChanLocalStateGetBlockHeader: make(chan struct{}),
		// initialize the wait channel for method GetUTXO on service LocalState
		waitChanLocalStateGetUTXO: make(chan struct{}),
		// initialize the wait channel for method GetPendingTransaction on service LocalState
		waitChanLocalStateGetPendingTransaction: make(chan struct{}),
		// initialize the wait channel for method GetRoundStateForValidator on service LocalState
		waitChanLocalStateGetRoundStateForValidator: make(chan struct{}),
		// initialize the wait channel for method GetValidatorSet on service LocalState
		waitChanLocalStateGetValidatorSet: make(chan struct{}),
		// initialize the wait channel for method GetBlockNumber on service LocalState
		waitChanLocalStateGetBlockNumber: make(chan struct{}),
		// initialize the wait channel for method GetChainID on service LocalState
		waitChanLocalStateGetChainID: make(chan struct{}),
		// initialize the wait channel for method SendTransaction on service LocalState
		waitChanLocalStateSendTransaction: make(chan struct{}),
		// initialize the wait channel for method GetEpochNumber on service LocalState
		waitChanLocalStateGetEpochNumber: make(chan struct{}),
		// initialize the wait channel for method GetTxBlockNumber on service LocalState
		waitChanLocalStateGetTxBlockNumber: make(chan struct{}),
	}
}

// GeneratedLocalStateServer implements the LocalState service as a gRPC
// server. GeneratedLocalStateServer invokes methods on the services
// through the LocalStateDispatch handlers.
type GeneratedLocalStateServer struct {
	dispatch *LocalStateDispatch
}

// GetData will invoke the method GetData on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) GetData(ctx context.Context, r *GetDataRequest) (*GetDataResponse, error) {
	return s.dispatch.LocalStateGetData(ctx, r)
}


// GetValueForOwner will invoke the method GetValueForOwner on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) GetValueForOwner(ctx context.Context, r *GetValueRequest) (*GetValueResponse, error) {
	return s.dispatch.LocalStateGetValueForOwner(ctx, r)
}


// IterateNameSpace will invoke the method IterateNameSpace on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) IterateNameSpace(ctx context.Context, r *IterateNameSpaceRequest) (*IterateNameSpaceResponse, error) {
	return s.dispatch.LocalStateIterateNameSpace(ctx, r)
}


// GetMinedTransaction will invoke the method GetMinedTransaction on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) GetMinedTransaction(ctx context.Context, r *MinedTransactionRequest) (*MinedTransactionResponse, error) {
	return s.dispatch.LocalStateGetMinedTransaction(ctx, r)
}


// GetBlockHeader will invoke the method GetBlockHeader on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) GetBlockHeader(ctx context.Context, r *BlockHeaderRequest) (*BlockHeaderResponse, error) {
	return s.dispatch.LocalStateGetBlockHeader(ctx, r)
}


// GetUTXO will invoke the method GetUTXO on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) GetUTXO(ctx context.Context, r *UTXORequest) (*UTXOResponse, error) {
	return s.dispatch.LocalStateGetUTXO(ctx, r)
}


// GetPendingTransaction will invoke the method GetPendingTransaction on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) GetPendingTransaction(ctx context.Context, r *PendingTransactionRequest) (*PendingTransactionResponse, error) {
	return s.dispatch.LocalStateGetPendingTransaction(ctx, r)
}


// GetRoundStateForValidator will invoke the method GetRoundStateForValidator on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) GetRoundStateForValidator(ctx context.Context, r *RoundStateForValidatorRequest) (*RoundStateForValidatorResponse, error) {
	return s.dispatch.LocalStateGetRoundStateForValidator(ctx, r)
}


// GetValidatorSet will invoke the method GetValidatorSet on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) GetValidatorSet(ctx context.Context, r *ValidatorSetRequest) (*ValidatorSetResponse, error) {
	return s.dispatch.LocalStateGetValidatorSet(ctx, r)
}


// GetBlockNumber will invoke the method GetBlockNumber on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) GetBlockNumber(ctx context.Context, r *BlockNumberRequest) (*BlockNumberResponse, error) {
	return s.dispatch.LocalStateGetBlockNumber(ctx, r)
}


// GetChainID will invoke the method GetChainID on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) GetChainID(ctx context.Context, r *ChainIDRequest) (*ChainIDResponse, error) {
	return s.dispatch.LocalStateGetChainID(ctx, r)
}


// SendTransaction will invoke the method SendTransaction on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) SendTransaction(ctx context.Context, r *TransactionData) (*TransactionDetails, error) {
	return s.dispatch.LocalStateSendTransaction(ctx, r)
}


// GetEpochNumber will invoke the method GetEpochNumber on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) GetEpochNumber(ctx context.Context, r *EpochNumberRequest) (*EpochNumberResponse, error) {
	return s.dispatch.LocalStateGetEpochNumber(ctx, r)
}


// GetTxBlockNumber will invoke the method GetTxBlockNumber on the RPC service LocalState
// using the LocalStateDispatch handler.
func (s *GeneratedLocalStateServer) GetTxBlockNumber(ctx context.Context, r *TxBlockNumberRequest) (*TxBlockNumberResponse, error) {
	return s.dispatch.LocalStateGetTxBlockNumber(ctx, r)
}



// NewGeneratedLocalStateServer constructs a new server for the service.
func NewGeneratedLocalStateServer(dispatch *LocalStateDispatch) *GeneratedLocalStateServer {
  return &GeneratedLocalStateServer{
    dispatch: dispatch,
  }
}

