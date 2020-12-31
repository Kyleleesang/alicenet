package objs

import (
	"bytes"
	"testing"

	"github.com/MadBase/MadNet/application/objs/uint256"
	"github.com/MadBase/MadNet/constants"
	"github.com/MadBase/MadNet/crypto"
)

func makeSecpSigner(privk []byte) *crypto.Secp256k1Signer {
	s := &crypto.Secp256k1Signer{}
	if err := s.SetPrivk(privk); err != nil {
		panic(err)
	}
	return s
}

func makeDataStoreGood(secpPrivk []byte) *DataStore {
	chainID := uint32(2)
	idxPre := []byte("Index")
	idx := crypto.Hasher(idxPre)
	issuedAt := uint32(1)
	rawdata := crypto.Hasher([]byte("rawdata"))
	txOutIdx := uint32(0)
	numEpochs := uint32(5)

	deposit, err := BaseDepositEquation(uint32(len(rawdata)), numEpochs)
	if err != nil {
		panic(err)
	}

	ownerSigner := makeSecpSigner(secpPrivk)
	ownerPubk, err := ownerSigner.Pubkey()
	if err != nil {
		panic(err)
	}
	ownerAcct := crypto.GetAccount(ownerPubk)
	owner := &DataStoreOwner{}
	owner.New(ownerAcct, constants.CurveSecp256k1)

	txHash := crypto.Hasher([]byte("txHash"))

	dsp := &DSPreImage{
		ChainID:  chainID,
		Index:    idx,
		IssuedAt: issuedAt,
		Deposit:  deposit,
		RawData:  rawdata,
		TXOutIdx: txOutIdx,
		Owner:    owner,
	}
	dsl := &DSLinker{
		DSPreImage: dsp,
		TxHash:     txHash,
	}
	ds := &DataStore{
		DSLinker: dsl,
	}
	return ds
}

func TestDataStoreGood(t *testing.T) {
	cid := uint32(2)
	idxPre := []byte("Index")
	idx := crypto.Hasher(idxPre)
	txoid := uint32(17)
	iat := uint32(1)
	rawdata := crypto.Hasher([]byte("foo"))
	dep, err := new(uint256.Uint256).FromUint64(uint64((len(rawdata) + constants.BaseDatasizeConst) * 3))
	if err != nil {
		t.Fatal(err)
	}

	ownerSigner := &crypto.Secp256k1Signer{}
	if err := ownerSigner.SetPrivk(crypto.Hasher([]byte("a"))); err != nil {
		t.Fatal(err)
	}
	ownerPubk, err := ownerSigner.Pubkey()
	if err != nil {
		t.Fatal(err)
	}
	ownerAcct := crypto.GetAccount(ownerPubk)
	owner := &DataStoreOwner{}
	owner.New(ownerAcct, constants.CurveSecp256k1)

	dsp := &DSPreImage{
		ChainID:  cid,
		Index:    idx,
		IssuedAt: iat,
		Deposit:  dep,
		RawData:  rawdata,
		TXOutIdx: txoid,
		Owner:    owner,
	}
	txHash := make([]byte, constants.HashLen)
	dsl := &DSLinker{
		DSPreImage: dsp,
		TxHash:     txHash,
	}
	ds := &DataStore{
		DSLinker: dsl,
	}
	if err := ds.PreSign(ownerSigner); err != nil {
		t.Fatal(err)
	}

	dsBytes, err := ds.MarshalBinary()
	if err != nil {
		t.Fatal(err)
	}
	ds2 := &DataStore{}
	err = ds2.UnmarshalBinary(dsBytes)
	if err != nil {
		t.Fatal(err)
	}
	dsEqual(t, ds, ds2)
}

func dsEqual(t *testing.T, ds1, ds2 *DataStore) {
	dsl1 := ds1.DSLinker
	dsl2 := ds2.DSLinker
	dslEqual(t, dsl1, dsl2)
	if !bytes.Equal(ds1.Signature.Signature, ds2.Signature.Signature) {
		t.Fatal("Do not agree on Signature!")
	}
}

func TestDataStoreBad1(t *testing.T) {
	cid := uint32(0) // Invalid ChainID
	idxPre := []byte("Index")
	idx := crypto.Hasher(idxPre)
	txoid := uint32(17)
	iat := uint32(1)
	rawdata := crypto.Hasher([]byte("foo"))
	dep, err := new(uint256.Uint256).FromUint64(uint64((len(rawdata) + constants.BaseDatasizeConst) * 3))
	if err != nil {
		t.Fatal(err)
	}

	ownerSigner := &crypto.Secp256k1Signer{}
	if err := ownerSigner.SetPrivk(crypto.Hasher([]byte("a"))); err != nil {
		t.Fatal(err)
	}
	ownerPubk, err := ownerSigner.Pubkey()
	if err != nil {
		t.Fatal(err)
	}
	ownerAcct := crypto.GetAccount(ownerPubk)
	owner := &DataStoreOwner{}
	owner.New(ownerAcct, constants.CurveSecp256k1)

	dsp := &DSPreImage{
		ChainID:  cid,
		Index:    idx,
		IssuedAt: iat,
		Deposit:  dep,
		RawData:  rawdata,
		TXOutIdx: txoid,
		Owner:    owner,
	}
	txHash := make([]byte, constants.HashLen)
	dsl := &DSLinker{
		DSPreImage: dsp,
		TxHash:     txHash,
	}
	ds := &DataStore{
		DSLinker: dsl,
	}
	err = ds.PreSign(ownerSigner)
	if err == nil {
		t.Fatal("Should raise error for invalid DSLinker!")
	}
}

func TestDataStoreBad2(t *testing.T) {
	cid := uint32(2)
	idxPre := []byte("Index")
	idx := crypto.Hasher(idxPre)
	txoid := uint32(17)
	iat := uint32(1)
	rawdata := crypto.Hasher([]byte("foo"))
	dep, err := new(uint256.Uint256).FromUint64(uint64((len(rawdata) + constants.BaseDatasizeConst) * 3))
	if err != nil {
		t.Fatal(err)
	}

	ownerSigner := &crypto.Secp256k1Signer{}
	if err := ownerSigner.SetPrivk(crypto.Hasher([]byte("a"))); err != nil {
		t.Fatal(err)
	}
	ownerPubk, err := ownerSigner.Pubkey()
	if err != nil {
		t.Fatal(err)
	}
	ownerAcct := crypto.GetAccount(ownerPubk)
	owner := &DataStoreOwner{}
	owner.New(ownerAcct, constants.CurveSecp256k1)

	dsp := &DSPreImage{
		ChainID:  cid,
		Index:    idx,
		IssuedAt: iat,
		Deposit:  dep,
		RawData:  rawdata,
		TXOutIdx: txoid,
		Owner:    owner,
	}
	txHash := make([]byte, constants.HashLen)
	dsl := &DSLinker{
		DSPreImage: dsp,
		TxHash:     txHash,
	}
	ds := &DataStore{
		DSLinker: dsl,
	}
	if err := ds.PreSign(ownerSigner); err != nil {
		t.Fatal(err)
	}
	ds.Signature.SVA = 0
	_, err = ds.MarshalBinary()
	if err == nil {
		t.Fatal("Should raise error for invalid Signature: incorrect SVA")
	}
}

func TestOwnerSig(t *testing.T) {
	cid := uint32(2)
	idxPre := []byte("Index")
	idx := crypto.Hasher(idxPre)
	txoid := uint32(17)
	iat := uint32(1)
	rawdata := crypto.Hasher([]byte("foo"))
	dep, err := new(uint256.Uint256).FromUint64(uint64((len(rawdata) + constants.BaseDatasizeConst) * 3))
	if err != nil {
		t.Fatal(err)
	}

	ownerSigner := &crypto.Secp256k1Signer{}
	if err := ownerSigner.SetPrivk(crypto.Hasher([]byte("a"))); err != nil {
		t.Fatal(err)
	}
	ownerPubk, err := ownerSigner.Pubkey()
	if err != nil {
		t.Fatal(err)
	}
	ownerAcct := crypto.GetAccount(ownerPubk)
	owner := &DataStoreOwner{}
	owner.New(ownerAcct, constants.CurveSecp256k1)

	dsp := &DSPreImage{
		ChainID:  cid,
		Index:    idx,
		IssuedAt: iat,
		Deposit:  dep,
		RawData:  rawdata,
		TXOutIdx: txoid,
		Owner:    owner,
	}
	txHash := make([]byte, constants.HashLen)
	dsl := &DSLinker{
		DSPreImage: dsp,
		TxHash:     txHash,
	}
	ds := &DataStore{
		DSLinker: dsl,
	}
	if err := ds.PreSign(ownerSigner); err != nil {
		t.Fatal(err)
	}
	if err := ds.ValidatePreSignature(); err != nil {
		t.Fatal(err)
	}

	dsBytes, err := ds.MarshalBinary()
	if err != nil {
		t.Fatal(err)
	}
	ds2 := &DataStore{}
	err = ds2.UnmarshalBinary(dsBytes)
	if err != nil {
		t.Fatal(err)
	}
	dsEqual(t, ds, ds2)

	{
		txIn, err := ds2.MakeTxIn()
		if err != nil {
			t.Fatal(err)
		}
		txIn.TXInLinker.TxHash = crypto.Hasher([]byte("hsh"))
		err = ds2.Sign(txIn, ownerSigner)
		if err != nil {
			t.Fatal(err)
		}
		err = ds2.ValidateSignature(iat, txIn)
		if err != nil {
			t.Fatal(err)
		}
	}

	{
		txIn, err := ds2.MakeTxIn()
		if err != nil {
			t.Fatal(err)
		}
		txIn.TXInLinker.TxHash = crypto.Hasher([]byte("hsh"))
		err = ds2.Sign(txIn, ownerSigner)
		if err != nil {
			t.Fatal(err)
		}
		txIn.TXInLinker.TxHash = crypto.Hasher([]byte("hsh2"))
		err = ds2.ValidateSignature(iat, txIn)
		if err == nil {
			t.Fatal("bad sig did not fail")
		}
	}

	{
		bnsigner := &crypto.BNSigner{}
		bnsigner.SetPrivk(crypto.Hasher([]byte("d")))
		txIn, err := ds2.MakeTxIn()
		if err != nil {
			t.Fatal(err)
		}
		txIn.TXInLinker.TxHash = crypto.Hasher([]byte("hsh"))
		err = ds2.Sign(txIn, bnsigner)
		if err != nil {
			t.Fatal(err)
		}
		err = ds2.ValidateSignature(iat, txIn)
		if err == nil {
			t.Fatal("bad sig did not fail")
		}
	}
}

func TestOwnerSig2(t *testing.T) {
	cid := uint32(2)
	idxPre := []byte("Index")
	idx := crypto.Hasher(idxPre)
	txoid := uint32(17)
	iat := uint32(1)
	rawdata := crypto.Hasher([]byte("foo"))
	dep, err := new(uint256.Uint256).FromUint64(uint64((len(rawdata) + constants.BaseDatasizeConst) * 3))
	if err != nil {
		t.Fatal(err)
	}

	ownerSigner := &crypto.BNSigner{}
	ownerSigner.SetPrivk(crypto.Hasher([]byte("a")))

	ownerPubk, err := ownerSigner.Pubkey()
	if err != nil {
		t.Fatal(err)
	}
	ownerAcct := crypto.GetAccount(ownerPubk)
	owner := &DataStoreOwner{}
	owner.New(ownerAcct, constants.CurveBN256Eth)

	dsp := &DSPreImage{
		ChainID:  cid,
		Index:    idx,
		IssuedAt: iat,
		Deposit:  dep,
		RawData:  rawdata,
		TXOutIdx: txoid,
		Owner:    owner,
	}
	txHash := make([]byte, constants.HashLen)
	dsl := &DSLinker{
		DSPreImage: dsp,
		TxHash:     txHash,
	}
	ds := &DataStore{
		DSLinker: dsl,
	}
	if err := ds.PreSign(ownerSigner); err != nil {
		t.Fatal(err)
	}
	if err := ds.ValidatePreSignature(); err != nil {
		t.Fatal(err)
	}

	dsBytes, err := ds.MarshalBinary()
	if err != nil {
		t.Fatal(err)
	}
	ds2 := &DataStore{}
	err = ds2.UnmarshalBinary(dsBytes)
	if err != nil {
		t.Fatal(err)
	}
	dsEqual(t, ds, ds2)

	{
		txIn, err := ds2.MakeTxIn()
		if err != nil {
			t.Fatal(err)
		}
		txIn.TXInLinker.TxHash = crypto.Hasher([]byte("hsh"))
		err = ds2.Sign(txIn, ownerSigner)
		if err != nil {
			t.Fatal(err)
		}
		err = ds2.ValidateSignature(iat, txIn)
		if err != nil {
			t.Fatal(err)
		}
	}

	{
		txIn, err := ds2.MakeTxIn()
		if err != nil {
			t.Fatal(err)
		}
		txIn.TXInLinker.TxHash = crypto.Hasher([]byte("hsh"))
		err = ds2.Sign(txIn, ownerSigner)
		if err != nil {
			t.Fatal(err)
		}
		txIn.TXInLinker.TxHash = crypto.Hasher([]byte("hsh2"))
		err = ds2.ValidateSignature(iat, txIn)
		if err == nil {
			t.Fatal("bad sig did not fail")
		}
	}

	{
		bnsigner := &crypto.BNSigner{}
		bnsigner.SetPrivk(crypto.Hasher([]byte("d")))
		txIn, err := ds2.MakeTxIn()
		if err != nil {
			t.Fatal(err)
		}
		txIn.TXInLinker.TxHash = crypto.Hasher([]byte("hsh"))
		err = ds2.Sign(txIn, bnsigner)
		if err != nil {
			t.Fatal(err)
		}
		err = ds2.ValidateSignature(iat, txIn)
		if err == nil {
			t.Fatal("bad sig did not fail")
		}
	}
}

func TestDeposit(t *testing.T) {
	cid := uint32(2)
	idxPre := []byte("Index")
	idx := crypto.Hasher(idxPre)
	txoid := uint32(17)
	iat := uint32(1)
	rawdata := crypto.Hasher([]byte("foo"))
	numEpochStored := uint32(3)
	dep, err := BaseDepositEquation(uint32(len(rawdata)), numEpochStored)
	if err != nil {
		t.Fatal(err)
	}

	ownerSigner := &crypto.BNSigner{}
	ownerSigner.SetPrivk(crypto.Hasher([]byte("a")))

	ownerPubk, err := ownerSigner.Pubkey()
	if err != nil {
		t.Fatal(err)
	}
	ownerAcct := crypto.GetAccount(ownerPubk)
	owner := &DataStoreOwner{}
	owner.New(ownerAcct, constants.CurveBN256Eth)

	dsp := &DSPreImage{
		ChainID:  cid,
		Index:    idx,
		IssuedAt: iat,
		Deposit:  dep,
		RawData:  rawdata,
		TXOutIdx: txoid,
		Owner:    owner,
	}
	txHash := make([]byte, constants.HashLen)
	dsl := &DSLinker{
		DSPreImage: dsp,
		TxHash:     txHash,
	}
	ds := &DataStore{
		DSLinker: dsl,
	}
	if err := ds.PreSign(ownerSigner); err != nil {
		t.Fatal(err)
	}
	if err := ds.ValidatePreSignature(); err != nil {
		t.Fatal(err)
	}

	err = ds.DSLinker.DSPreImage.ValidateDeposit()
	if err != nil {
		t.Fatal(err)
	}

	// Incorrect Deposit value
	badValue1, err := new(uint256.Uint256).Sub(ds.DSLinker.DSPreImage.Deposit, uint256.One())
	if err != nil {
		t.Fatal(err)
	}
	//ds.DSLinker.DSPreImage.Deposit = ds.DSLinker.DSPreImage.Deposit - 1
	ds.DSLinker.DSPreImage.Deposit = badValue1
	err = ds.DSLinker.DSPreImage.ValidateDeposit()
	if err == nil {
		t.Fatal("Should raise error in ValidateDeposit (1)")
	}

	// Another incorrect Deposit value
	badValue2, err := new(uint256.Uint256).Add(ds.DSLinker.DSPreImage.Deposit, uint256.Two())
	if err != nil {
		t.Fatal(err)
	}
	//ds.DSLinker.DSPreImage.Deposit = ds.DSLinker.DSPreImage.Deposit + 2
	ds.DSLinker.DSPreImage.Deposit = badValue2
	err = ds.DSLinker.DSPreImage.ValidateDeposit()
	if err == nil {
		t.Fatal("Should raise error in ValidateDeposit (2)")
	}

	// Return to correct value
	ds.DSLinker.DSPreImage.Deposit = dep
	err = ds.DSLinker.DSPreImage.ValidateDeposit()
	if err != nil {
		t.Fatal(err)
	}
	dsValue, err := ds.Value()
	if err != nil {
		t.Fatal(err)
	}
	if !dsValue.Eq(dep) {
		t.Fatal("ds.Next does not match")
	}
	// Look at RemainingValue for epoch of expiration;
	// should be cleanupReward as defined below (cost of storing 1 epoch)
	remVal, err := ds.RemainingValue((numEpochStored + iat + 1) * constants.EpochLength)
	if err != nil {
		t.Fatal(err)
	}
	cleanupReward, err := new(uint256.Uint256).FromUint64(uint64(len(rawdata) + constants.BaseDatasizeConst))
	if err != nil {
		t.Fatal(err)
	}
	if !remVal.Eq(cleanupReward) {
		t.Fatalf("%v", remVal)
	}
}

func TestDSMarshalBinary(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.MarshalBinary()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	_, err = ds.MarshalBinary()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSUnmarshalBinary(t *testing.T) {
	ds := &DataStore{}
	data := make([]byte, 0)
	err := ds.UnmarshalBinary(data)
	if err == nil {
		t.Fatal("Should have raised an error")
	}
}

func TestDSIssuedAt(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.IssuedAt()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	_, err = ds.IssuedAt()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSChainID(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.ChainID()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	_, err = ds.ChainID()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSIndex(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.Index()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	_, err = ds.Index()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSPreHash(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.PreHash()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	_, err = ds.PreHash()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSUTXOID(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.UTXOID()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	_, err = ds.UTXOID()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSTXOutIdx(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.TXOutIdx()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	_, err = ds.TXOutIdx()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSSetTXOutIdx(t *testing.T) {
	idx := uint32(0)
	utxo := &TXOut{}
	err := utxo.dataStore.SetTXOutIdx(idx)
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	err = ds.SetTXOutIdx(idx)
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSTxHash(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.TxHash()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	_, err = ds.TxHash()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSSetTxHash(t *testing.T) {
	txHash := make([]byte, 0)
	utxo := &TXOut{}
	err := utxo.dataStore.SetTxHash(txHash)
	if err == nil {
		t.Fatal("Should have raised error (1)")
	}

	ds := &DataStore{}
	err = ds.SetTxHash(txHash)
	if err == nil {
		t.Fatal("Should have raised error (2)")
	}

	err = ds.SetTxHash(txHash)
	if err == nil {
		t.Fatal("Should have raised error (3)")
	}

	ds.DSLinker = &DSLinker{}
	err = ds.SetTxHash(txHash)
	if err == nil {
		t.Fatal("Should have raised error (4)")
	}

	txHash = make([]byte, constants.HashLen)
	err = ds.SetTxHash(txHash)
	if err != nil {
		t.Fatal("Should pass")
	}
}

func TestDSRawData(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.RawData()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	_, err = ds.RawData()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSOwnerCall(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.Owner()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	_, err = ds.Owner()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
	ds.DSLinker = &DSLinker{}
	ds.DSLinker.DSPreImage = &DSPreImage{}
	ds.DSLinker.DSPreImage.Owner = &DataStoreOwner{}
	acct := make([]byte, constants.OwnerLen)
	curveSpec := constants.CurveSecp256k1
	o := &Owner{}
	err = o.New(acct, curveSpec)
	if err != nil {
		t.Fatal(err)
	}
	err = ds.DSLinker.DSPreImage.Owner.NewFromOwner(o)
	if err != nil {
		t.Fatal(err)
	}

	_, err = ds.Owner()
	if err != nil {
		t.Fatal("Should pass")
	}
}

func TestDSGenericOwner(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.GenericOwner()
	if err == nil {
		t.Fatal("Should have raised an error")
	}

	ds := &DataStore{}
	ds.DSLinker = &DSLinker{}
	ds.DSLinker.DSPreImage = &DSPreImage{}
	ds.DSLinker.DSPreImage.Owner = &DataStoreOwner{}
	acct := make([]byte, constants.OwnerLen)
	curveSpec := constants.CurveSecp256k1
	o := &Owner{}
	err = o.New(acct, curveSpec)
	if err != nil {
		t.Fatal(err)
	}
	err = ds.DSLinker.DSPreImage.Owner.NewFromOwner(o)
	if err != nil {
		t.Fatal(err)
	}
	_, err = ds.GenericOwner()
	if err != nil {
		t.Fatal("Should pass")
	}
}

func TestDSEpochOfExpiration(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.EpochOfExpiration()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	_, err = ds.EpochOfExpiration()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSRemainingValue(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.RemainingValue(0)
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	_, err = ds.RemainingValue(0)
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSValueCall(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.Value()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	_, err = ds.Value()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSValidatePreSignature(t *testing.T) {
	utxo := &TXOut{}
	err := utxo.dataStore.ValidatePreSignature()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	err = ds.ValidatePreSignature()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSPreSign(t *testing.T) {
	s := &crypto.Secp256k1Signer{}
	utxo := &TXOut{}
	err := utxo.dataStore.PreSign(s)
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	err = ds.PreSign(s)
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}

	privk := crypto.Hasher([]byte("privk"))
	ds = makeDataStoreGood(privk)
	err = ds.PreSign(s)
	if err == nil {
		t.Fatal("Should have raised an error (3)")
	}

	s = makeSecpSigner(privk)
	err = ds.PreSign(s)
	if err != nil {
		t.Fatal(err)
	}
}

func TestDSSign(t *testing.T) {
	utxo := &TXOut{}
	txIn := &TXIn{}
	s := &crypto.Secp256k1Signer{}
	err := utxo.dataStore.Sign(txIn, s)
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}
	ds := &DataStore{}
	err = ds.Sign(txIn, s)
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}

	privk := crypto.Hasher([]byte("privk"))
	err = s.SetPrivk(privk)
	if err != nil {
		t.Fatal(err)
	}
	ds = makeDataStoreGood(privk)
	txIn, err = ds.MakeTxIn()
	if err != nil {
		t.Fatal(err)
	}
	dso := ds.DSLinker.DSPreImage.Owner
	ds.DSLinker.DSPreImage.Owner = nil // kill owner to make invalid
	err = ds.Sign(txIn, s)
	if err == nil {
		t.Fatal("Should have raised an error (3)")
	}

	ds.DSLinker.DSPreImage.Owner = dso // replace
	err = ds.Sign(txIn, s)
	if err != nil {
		t.Fatal(err)
	}
}

func TestDSValidateSignature(t *testing.T) {
	currentHeight := uint32(0)
	txIn := &TXIn{}
	utxo := &TXOut{}
	err := utxo.dataStore.ValidateSignature(currentHeight, txIn)
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}

	ds := &DataStore{}
	err = ds.ValidateSignature(currentHeight, txIn)
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}
}

func TestDSMakeTxIn(t *testing.T) {
	utxo := &TXOut{}
	_, err := utxo.dataStore.MakeTxIn()
	if err == nil {
		t.Fatal("Should have raised an error (1)")
	}

	ds := &DataStore{}
	_, err = ds.MakeTxIn()
	if err == nil {
		t.Fatal("Should have raised an error (2)")
	}

	ds.DSLinker = &DSLinker{}
	ds.DSLinker.DSPreImage = &DSPreImage{}
	ds.DSLinker.DSPreImage.TXOutIdx = 1
	_, err = ds.MakeTxIn()
	if err == nil {
		t.Fatal("Should have raised an error (3)")
	}

	ds.DSLinker.DSPreImage.ChainID = 1
	_, err = ds.MakeTxIn()
	if err == nil {
		t.Fatal("Should have raised an error (4)")
	}
}
