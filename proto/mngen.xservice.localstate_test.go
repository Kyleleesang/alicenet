// Code generated. DO NOT EDIT.
package proto

import (
	"context"
	"github.com/stretchr/testify/assert"
	"testing"
)

type testLocalStateGetDataHandler struct{}

func (th *testLocalStateGetDataHandler) HandleLocalStateGetData(context.Context, *GetDataRequest) (*GetDataResponse, error) {
	return &GetDataResponse{}, nil
}

func TestLocalStateGetData(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetDataHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetData(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.GetData(context.Background(), &GetDataRequest{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateGetData(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetDataHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetData(h)

	fn := func() {
		d.RegisterLocalStateGetData(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateGetDataCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.GetData(cancelCtx, &GetDataRequest{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

type testLocalStateGetValueForOwnerHandler struct{}

func (th *testLocalStateGetValueForOwnerHandler) HandleLocalStateGetValueForOwner(context.Context, *GetValueRequest) (*GetValueResponse, error) {
	return &GetValueResponse{}, nil
}

func TestLocalStateGetValueForOwner(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetValueForOwnerHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetValueForOwner(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.GetValueForOwner(context.Background(), &GetValueRequest{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateGetValueForOwner(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetValueForOwnerHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetValueForOwner(h)

	fn := func() {
		d.RegisterLocalStateGetValueForOwner(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateGetValueForOwnerCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.GetValueForOwner(cancelCtx, &GetValueRequest{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

type testLocalStateIterateNameSpaceHandler struct{}

func (th *testLocalStateIterateNameSpaceHandler) HandleLocalStateIterateNameSpace(context.Context, *IterateNameSpaceRequest) (*IterateNameSpaceResponse, error) {
	return &IterateNameSpaceResponse{}, nil
}

func TestLocalStateIterateNameSpace(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateIterateNameSpaceHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateIterateNameSpace(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.IterateNameSpace(context.Background(), &IterateNameSpaceRequest{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateIterateNameSpace(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateIterateNameSpaceHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateIterateNameSpace(h)

	fn := func() {
		d.RegisterLocalStateIterateNameSpace(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateIterateNameSpaceCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.IterateNameSpace(cancelCtx, &IterateNameSpaceRequest{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

type testLocalStateGetMinedTransactionHandler struct{}

func (th *testLocalStateGetMinedTransactionHandler) HandleLocalStateGetMinedTransaction(context.Context, *MinedTransactionRequest) (*MinedTransactionResponse, error) {
	return &MinedTransactionResponse{}, nil
}

func TestLocalStateGetMinedTransaction(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetMinedTransactionHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetMinedTransaction(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.GetMinedTransaction(context.Background(), &MinedTransactionRequest{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateGetMinedTransaction(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetMinedTransactionHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetMinedTransaction(h)

	fn := func() {
		d.RegisterLocalStateGetMinedTransaction(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateGetMinedTransactionCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.GetMinedTransaction(cancelCtx, &MinedTransactionRequest{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

type testLocalStateGetBlockHeaderHandler struct{}

func (th *testLocalStateGetBlockHeaderHandler) HandleLocalStateGetBlockHeader(context.Context, *BlockHeaderRequest) (*BlockHeaderResponse, error) {
	return &BlockHeaderResponse{}, nil
}

func TestLocalStateGetBlockHeader(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetBlockHeaderHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetBlockHeader(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.GetBlockHeader(context.Background(), &BlockHeaderRequest{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateGetBlockHeader(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetBlockHeaderHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetBlockHeader(h)

	fn := func() {
		d.RegisterLocalStateGetBlockHeader(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateGetBlockHeaderCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.GetBlockHeader(cancelCtx, &BlockHeaderRequest{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

type testLocalStateGetUTXOHandler struct{}

func (th *testLocalStateGetUTXOHandler) HandleLocalStateGetUTXO(context.Context, *UTXORequest) (*UTXOResponse, error) {
	return &UTXOResponse{}, nil
}

func TestLocalStateGetUTXO(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetUTXOHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetUTXO(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.GetUTXO(context.Background(), &UTXORequest{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateGetUTXO(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetUTXOHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetUTXO(h)

	fn := func() {
		d.RegisterLocalStateGetUTXO(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateGetUTXOCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.GetUTXO(cancelCtx, &UTXORequest{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

type testLocalStateGetPendingTransactionHandler struct{}

func (th *testLocalStateGetPendingTransactionHandler) HandleLocalStateGetPendingTransaction(context.Context, *PendingTransactionRequest) (*PendingTransactionResponse, error) {
	return &PendingTransactionResponse{}, nil
}

func TestLocalStateGetPendingTransaction(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetPendingTransactionHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetPendingTransaction(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.GetPendingTransaction(context.Background(), &PendingTransactionRequest{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateGetPendingTransaction(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetPendingTransactionHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetPendingTransaction(h)

	fn := func() {
		d.RegisterLocalStateGetPendingTransaction(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateGetPendingTransactionCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.GetPendingTransaction(cancelCtx, &PendingTransactionRequest{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

type testLocalStateGetRoundStateForValidatorHandler struct{}

func (th *testLocalStateGetRoundStateForValidatorHandler) HandleLocalStateGetRoundStateForValidator(context.Context, *RoundStateForValidatorRequest) (*RoundStateForValidatorResponse, error) {
	return &RoundStateForValidatorResponse{}, nil
}

func TestLocalStateGetRoundStateForValidator(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetRoundStateForValidatorHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetRoundStateForValidator(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.GetRoundStateForValidator(context.Background(), &RoundStateForValidatorRequest{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateGetRoundStateForValidator(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetRoundStateForValidatorHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetRoundStateForValidator(h)

	fn := func() {
		d.RegisterLocalStateGetRoundStateForValidator(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateGetRoundStateForValidatorCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.GetRoundStateForValidator(cancelCtx, &RoundStateForValidatorRequest{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

type testLocalStateGetValidatorSetHandler struct{}

func (th *testLocalStateGetValidatorSetHandler) HandleLocalStateGetValidatorSet(context.Context, *ValidatorSetRequest) (*ValidatorSetResponse, error) {
	return &ValidatorSetResponse{}, nil
}

func TestLocalStateGetValidatorSet(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetValidatorSetHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetValidatorSet(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.GetValidatorSet(context.Background(), &ValidatorSetRequest{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateGetValidatorSet(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetValidatorSetHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetValidatorSet(h)

	fn := func() {
		d.RegisterLocalStateGetValidatorSet(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateGetValidatorSetCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.GetValidatorSet(cancelCtx, &ValidatorSetRequest{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

type testLocalStateGetBlockNumberHandler struct{}

func (th *testLocalStateGetBlockNumberHandler) HandleLocalStateGetBlockNumber(context.Context, *BlockNumberRequest) (*BlockNumberResponse, error) {
	return &BlockNumberResponse{}, nil
}

func TestLocalStateGetBlockNumber(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetBlockNumberHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetBlockNumber(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.GetBlockNumber(context.Background(), &BlockNumberRequest{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateGetBlockNumber(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetBlockNumberHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetBlockNumber(h)

	fn := func() {
		d.RegisterLocalStateGetBlockNumber(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateGetBlockNumberCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.GetBlockNumber(cancelCtx, &BlockNumberRequest{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

type testLocalStateGetChainIDHandler struct{}

func (th *testLocalStateGetChainIDHandler) HandleLocalStateGetChainID(context.Context, *ChainIDRequest) (*ChainIDResponse, error) {
	return &ChainIDResponse{}, nil
}

func TestLocalStateGetChainID(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetChainIDHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetChainID(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.GetChainID(context.Background(), &ChainIDRequest{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateGetChainID(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetChainIDHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetChainID(h)

	fn := func() {
		d.RegisterLocalStateGetChainID(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateGetChainIDCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.GetChainID(cancelCtx, &ChainIDRequest{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

type testLocalStateSendTransactionHandler struct{}

func (th *testLocalStateSendTransactionHandler) HandleLocalStateSendTransaction(context.Context, *TransactionData) (*TransactionDetails, error) {
	return &TransactionDetails{}, nil
}

func TestLocalStateSendTransaction(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateSendTransactionHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateSendTransaction(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.SendTransaction(context.Background(), &TransactionData{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateSendTransaction(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateSendTransactionHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateSendTransaction(h)

	fn := func() {
		d.RegisterLocalStateSendTransaction(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateSendTransactionCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.SendTransaction(cancelCtx, &TransactionData{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

type testLocalStateGetEpochNumberHandler struct{}

func (th *testLocalStateGetEpochNumberHandler) HandleLocalStateGetEpochNumber(context.Context, *EpochNumberRequest) (*EpochNumberResponse, error) {
	return &EpochNumberResponse{}, nil
}

func TestLocalStateGetEpochNumber(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetEpochNumberHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetEpochNumber(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.GetEpochNumber(context.Background(), &EpochNumberRequest{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateGetEpochNumber(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetEpochNumberHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetEpochNumber(h)

	fn := func() {
		d.RegisterLocalStateGetEpochNumber(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateGetEpochNumberCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.GetEpochNumber(cancelCtx, &EpochNumberRequest{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

type testLocalStateGetTxBlockNumberHandler struct{}

func (th *testLocalStateGetTxBlockNumberHandler) HandleLocalStateGetTxBlockNumber(context.Context, *TxBlockNumberRequest) (*TxBlockNumberResponse, error) {
	return &TxBlockNumberResponse{}, nil
}

func TestLocalStateGetTxBlockNumber(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetTxBlockNumberHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetTxBlockNumber(h)

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	_, err := srvr.GetTxBlockNumber(context.Background(), &TxBlockNumberRequest{})
	if err != nil {
		t.Error(err)
	}
}

func TestDoubleregistrationLocalStateGetTxBlockNumber(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Setup the handler for the TestService
	h := &testLocalStateGetTxBlockNumberHandler{}

	// Register the handler with the dispatch class
	d.RegisterLocalStateGetTxBlockNumber(h)

	fn := func() {
		d.RegisterLocalStateGetTxBlockNumber(h)
	}
	assert.Panics(t, fn, "double registration must panic")
}

func TestLocalStateGetTxBlockNumberCancel(t *testing.T) {
	// Setup the dispatch handler
	d := NewLocalStateDispatch()

	// Create the server and pass in the dispatch class
	srvr := GeneratedLocalStateServer{
		dispatch: d,
	}

	// Test calling the method TestCall
	errChan := make(chan error)
	defer close(errChan)
	ctx := context.Background()
	cancelCtx, cancelFunc := context.WithCancel(ctx)
	fn := func() {
		_, err := srvr.GetTxBlockNumber(cancelCtx, &TxBlockNumberRequest{})
		errChan <- err
	}
	go fn()
	cancelFunc()
	cancelErr := <-errChan
	assert.EqualError(t, cancelErr, "context canceled", "the error returned must be a context canceled error")
}

