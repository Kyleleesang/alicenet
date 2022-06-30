/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { EventFragment, FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { OnEvent, TypedEvent, TypedEventFilter, TypedListener } from "./common";

export declare namespace BToken {
  export type DepositStruct = {
    accountType: BigNumberish;
    account: string;
    value: BigNumberish;
  };

  export type DepositStructOutput = [number, string, BigNumber] & {
    accountType: number;
    account: string;
    value: BigNumber;
  };
}

export interface BTokenInterface extends utils.Interface {
  contractName: "BToken";
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "bTokensToEth(uint256,uint256,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256,uint256)": FunctionFragment;
    "burnTo(address,uint256,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "deposit(uint8,address,uint256)": FunctionFragment;
    "distribute()": FunctionFragment;
    "ethToBTokens(uint256,uint256)": FunctionFragment;
    "getAdmin()": FunctionFragment;
    "getDeposit(uint256)": FunctionFragment;
    "getMetamorphicContractAddress(bytes32,address)": FunctionFragment;
    "getPoolBalance()": FunctionFragment;
    "getTotalBTokensDeposited()": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "initialize()": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "mintDeposit(uint8,address,uint256)": FunctionFragment;
    "mintTo(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "setAdmin(address)": FunctionFragment;
    "setSplits(uint256,uint256,uint256,uint256)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "virtualMintDeposit(uint8,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bTokensToEth",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnTo",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ethToBTokens",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getAdmin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getDeposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMetamorphicContractAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBTokensDeposited",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "mintDeposit",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintTo",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "setAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setSplits",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "virtualMintDeposit",
    values: [BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bTokensToEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ethToBTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMetamorphicContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBTokensDeposited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setSplits", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "virtualMintDeposit",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "DepositReceived(uint256,uint8,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; spender: string; value: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type DepositReceivedEvent = TypedEvent<
  [BigNumber, number, string, BigNumber],
  {
    depositID: BigNumber;
    accountType: number;
    depositor: string;
    amount: BigNumber;
  }
>;

export type DepositReceivedEventFilter = TypedEventFilter<DepositReceivedEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; value: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface BToken extends BaseContract {
  contractName: "BToken";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BTokenInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bTokensToEth(
      poolBalance_: BigNumberish,
      totalSupply_: BigNumberish,
      numBTK_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { numEth: BigNumber }>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      amount_: BigNumberish,
      minEth_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnTo(
      to_: string,
      amount_: BigNumberish,
      minEth_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      accountType_: BigNumberish,
      to_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ethToBTokens(
      poolBalance_: BigNumberish,
      numEth_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAdmin(overrides?: CallOverrides): Promise<[string]>;

    getDeposit(
      depositID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BToken.DepositStructOutput]>;

    getMetamorphicContractAddress(
      _salt: BytesLike,
      _factory: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPoolBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalBTokensDeposited(overrides?: CallOverrides): Promise<[BigNumber]>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mint(
      minBTK_: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintDeposit(
      accountType_: BigNumberish,
      to_: string,
      minBTK_: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintTo(
      to_: string,
      minBTK_: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    setAdmin(
      admin_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSplits(
      validatorStakingSplit_: BigNumberish,
      publicStakingSplit_: BigNumberish,
      liquidityProviderStakingSplit_: BigNumberish,
      protocolFee_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    virtualMintDeposit(
      accountType_: BigNumberish,
      to_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bTokensToEth(
    poolBalance_: BigNumberish,
    totalSupply_: BigNumberish,
    numBTK_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    amount_: BigNumberish,
    minEth_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnTo(
    to_: string,
    amount_: BigNumberish,
    minEth_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    accountType_: BigNumberish,
    to_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distribute(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ethToBTokens(
    poolBalance_: BigNumberish,
    numEth_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAdmin(overrides?: CallOverrides): Promise<string>;

  getDeposit(
    depositID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BToken.DepositStructOutput>;

  getMetamorphicContractAddress(
    _salt: BytesLike,
    _factory: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getPoolBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalBTokensDeposited(overrides?: CallOverrides): Promise<BigNumber>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mint(
    minBTK_: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintDeposit(
    accountType_: BigNumberish,
    to_: string,
    minBTK_: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintTo(
    to_: string,
    minBTK_: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  setAdmin(
    admin_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSplits(
    validatorStakingSplit_: BigNumberish,
    publicStakingSplit_: BigNumberish,
    liquidityProviderStakingSplit_: BigNumberish,
    protocolFee_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  virtualMintDeposit(
    accountType_: BigNumberish,
    to_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    bTokensToEth(
      poolBalance_: BigNumberish,
      totalSupply_: BigNumberish,
      numBTK_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      amount_: BigNumberish,
      minEth_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnTo(
      to_: string,
      amount_: BigNumberish,
      minEth_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deposit(
      accountType_: BigNumberish,
      to_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    distribute(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        minerAmount: BigNumber;
        stakingAmount: BigNumber;
        lpStakingAmount: BigNumber;
        foundationAmount: BigNumber;
      }
    >;

    ethToBTokens(
      poolBalance_: BigNumberish,
      numEth_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAdmin(overrides?: CallOverrides): Promise<string>;

    getDeposit(
      depositID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BToken.DepositStructOutput>;

    getMetamorphicContractAddress(
      _salt: BytesLike,
      _factory: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getPoolBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBTokensDeposited(overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(overrides?: CallOverrides): Promise<void>;

    mint(minBTK_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    mintDeposit(
      accountType_: BigNumberish,
      to_: string,
      minBTK_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintTo(
      to_: string,
      minBTK_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    setAdmin(admin_: string, overrides?: CallOverrides): Promise<void>;

    setSplits(
      validatorStakingSplit_: BigNumberish,
      publicStakingSplit_: BigNumberish,
      liquidityProviderStakingSplit_: BigNumberish,
      protocolFee_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    virtualMintDeposit(
      accountType_: BigNumberish,
      to_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "DepositReceived(uint256,uint8,address,uint256)"(
      depositID?: BigNumberish | null,
      accountType?: BigNumberish | null,
      depositor?: string | null,
      amount?: null
    ): DepositReceivedEventFilter;
    DepositReceived(
      depositID?: BigNumberish | null,
      accountType?: BigNumberish | null,
      depositor?: string | null,
      amount?: null
    ): DepositReceivedEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bTokensToEth(
      poolBalance_: BigNumberish,
      totalSupply_: BigNumberish,
      numBTK_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      amount_: BigNumberish,
      minEth_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnTo(
      to_: string,
      amount_: BigNumberish,
      minEth_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      accountType_: BigNumberish,
      to_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ethToBTokens(
      poolBalance_: BigNumberish,
      numEth_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    getDeposit(
      depositID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMetamorphicContractAddress(
      _salt: BytesLike,
      _factory: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBTokensDeposited(overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mint(
      minBTK_: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintDeposit(
      accountType_: BigNumberish,
      to_: string,
      minBTK_: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintTo(
      to_: string,
      minBTK_: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    setAdmin(
      admin_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSplits(
      validatorStakingSplit_: BigNumberish,
      publicStakingSplit_: BigNumberish,
      liquidityProviderStakingSplit_: BigNumberish,
      protocolFee_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    virtualMintDeposit(
      accountType_: BigNumberish,
      to_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bTokensToEth(
      poolBalance_: BigNumberish,
      totalSupply_: BigNumberish,
      numBTK_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      amount_: BigNumberish,
      minEth_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnTo(
      to_: string,
      amount_: BigNumberish,
      minEth_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      accountType_: BigNumberish,
      to_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ethToBTokens(
      poolBalance_: BigNumberish,
      numEth_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeposit(
      depositID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMetamorphicContractAddress(
      _salt: BytesLike,
      _factory: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalBTokensDeposited(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      minBTK_: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintDeposit(
      accountType_: BigNumberish,
      to_: string,
      minBTK_: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintTo(
      to_: string,
      minBTK_: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAdmin(
      admin_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSplits(
      validatorStakingSplit_: BigNumberish,
      publicStakingSplit_: BigNumberish,
      liquidityProviderStakingSplit_: BigNumberish,
      protocolFee_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    virtualMintDeposit(
      accountType_: BigNumberish,
      to_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
