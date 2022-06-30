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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { OnEvent, TypedEvent, TypedEventFilter, TypedListener } from "./common";

export type SnapshotStruct = {
  committedAt: BigNumberish;
  blockClaims: BClaimsParserLibrary.BClaimsStruct;
};

export type SnapshotStructOutput = [
  BigNumber,
  BClaimsParserLibrary.BClaimsStructOutput
] & {
  committedAt: BigNumber;
  blockClaims: BClaimsParserLibrary.BClaimsStructOutput;
};

export declare namespace BClaimsParserLibrary {
  export type BClaimsStruct = {
    chainId: BigNumberish;
    height: BigNumberish;
    txCount: BigNumberish;
    prevBlock: BytesLike;
    txRoot: BytesLike;
    stateRoot: BytesLike;
    headerRoot: BytesLike;
  };

  export type BClaimsStructOutput = [
    number,
    number,
    number,
    string,
    string,
    string,
    string
  ] & {
    chainId: number;
    height: number;
    txCount: number;
    prevBlock: string;
    txRoot: string;
    stateRoot: string;
    headerRoot: string;
  };
}

export interface SnapshotsMockInterface extends utils.Interface {
  contractName: "SnapshotsMock";
  functions: {
    "getAliceNetHeightFromLatestSnapshot()": FunctionFragment;
    "getAliceNetHeightFromSnapshot(uint256)": FunctionFragment;
    "getBlockClaimsFromLatestSnapshot()": FunctionFragment;
    "getBlockClaimsFromSnapshot(uint256)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getChainIdFromLatestSnapshot()": FunctionFragment;
    "getChainIdFromSnapshot(uint256)": FunctionFragment;
    "getCommittedHeightFromLatestSnapshot()": FunctionFragment;
    "getCommittedHeightFromSnapshot(uint256)": FunctionFragment;
    "getEpoch()": FunctionFragment;
    "getEpochFromHeight(uint256)": FunctionFragment;
    "getEpochLength()": FunctionFragment;
    "getLatestSnapshot()": FunctionFragment;
    "getMetamorphicContractAddress(bytes32,address)": FunctionFragment;
    "getMinimumIntervalBetweenSnapshots()": FunctionFragment;
    "getSnapshot(uint256)": FunctionFragment;
    "getSnapshotDesperationDelay()": FunctionFragment;
    "getSnapshotDesperationFactor()": FunctionFragment;
    "initialize(uint32,uint32)": FunctionFragment;
    "isMock()": FunctionFragment;
    "mayValidatorSnapshot(uint256,uint256,uint256,bytes32,uint256)": FunctionFragment;
    "migrateSnapshots(bytes[],bytes[])": FunctionFragment;
    "setCommittedHeightFromLatestSnapshot(uint256)": FunctionFragment;
    "setEpochLength(uint32)": FunctionFragment;
    "setMinimumIntervalBetweenSnapshots(uint32)": FunctionFragment;
    "setSnapshotDesperationDelay(uint32)": FunctionFragment;
    "setSnapshotDesperationFactor(uint32)": FunctionFragment;
    "snapshot(bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAliceNetHeightFromLatestSnapshot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAliceNetHeightFromSnapshot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBlockClaimsFromLatestSnapshot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBlockClaimsFromSnapshot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getChainIdFromLatestSnapshot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getChainIdFromSnapshot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCommittedHeightFromLatestSnapshot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCommittedHeightFromSnapshot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getEpoch", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getEpochFromHeight",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEpochLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestSnapshot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMetamorphicContractAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinimumIntervalBetweenSnapshots",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSnapshot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSnapshotDesperationDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSnapshotDesperationFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isMock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mayValidatorSnapshot",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "migrateSnapshots",
    values: [BytesLike[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setCommittedHeightFromLatestSnapshot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setEpochLength",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumIntervalBetweenSnapshots",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSnapshotDesperationDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSnapshotDesperationFactor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "snapshot",
    values: [BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAliceNetHeightFromLatestSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAliceNetHeightFromSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBlockClaimsFromLatestSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBlockClaimsFromSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getChainIdFromLatestSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getChainIdFromSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCommittedHeightFromLatestSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCommittedHeightFromSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getEpoch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getEpochFromHeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEpochLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMetamorphicContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinimumIntervalBetweenSnapshots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSnapshotDesperationDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSnapshotDesperationFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isMock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mayValidatorSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "migrateSnapshots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCommittedHeightFromLatestSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEpochLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumIntervalBetweenSnapshots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSnapshotDesperationDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSnapshotDesperationFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "snapshot", data: BytesLike): Result;

  events: {
    "SnapshotTaken(uint256,uint256,uint256,address,bool,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SnapshotTaken"): EventFragment;
}

export type SnapshotTakenEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, boolean, string],
  {
    chainId: BigNumber;
    epoch: BigNumber;
    height: BigNumber;
    validator: string;
    isSafeToProceedConsensus: boolean;
    signatureRaw: string;
  }
>;

export type SnapshotTakenEventFilter = TypedEventFilter<SnapshotTakenEvent>;

export interface SnapshotsMock extends BaseContract {
  contractName: "SnapshotsMock";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SnapshotsMockInterface;

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
    getAliceNetHeightFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAliceNetHeightFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBlockClaimsFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<[BClaimsParserLibrary.BClaimsStructOutput]>;

    getBlockClaimsFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BClaimsParserLibrary.BClaimsStructOutput]>;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getChainIdFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getChainIdFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCommittedHeightFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCommittedHeightFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEpochFromHeight(
      height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getEpochLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    getLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<[SnapshotStructOutput]>;

    getMetamorphicContractAddress(
      _salt: BytesLike,
      _factory: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getMinimumIntervalBetweenSnapshots(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[SnapshotStructOutput]>;

    getSnapshotDesperationDelay(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSnapshotDesperationFactor(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      desperationDelay_: BigNumberish,
      desperationFactor_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isMock(overrides?: CallOverrides): Promise<[boolean]>;

    mayValidatorSnapshot(
      numValidators: BigNumberish,
      myIdx: BigNumberish,
      blocksSinceDesperation: BigNumberish,
      blsig: BytesLike,
      desperationFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    migrateSnapshots(
      groupSignature_: BytesLike[],
      bClaims_: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setCommittedHeightFromLatestSnapshot(
      height_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEpochLength(
      epochLength_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinimumIntervalBetweenSnapshots(
      minimumIntervalBetweenSnapshots_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSnapshotDesperationDelay(
      desperationDelay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSnapshotDesperationFactor(
      desperationFactor_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    snapshot(
      groupSignature_: BytesLike,
      bClaims_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getAliceNetHeightFromLatestSnapshot(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAliceNetHeightFromSnapshot(
    epoch_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBlockClaimsFromLatestSnapshot(
    overrides?: CallOverrides
  ): Promise<BClaimsParserLibrary.BClaimsStructOutput>;

  getBlockClaimsFromSnapshot(
    epoch_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BClaimsParserLibrary.BClaimsStructOutput>;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  getChainIdFromLatestSnapshot(overrides?: CallOverrides): Promise<BigNumber>;

  getChainIdFromSnapshot(
    epoch_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCommittedHeightFromLatestSnapshot(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCommittedHeightFromSnapshot(
    epoch_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  getEpochFromHeight(
    height: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

  getLatestSnapshot(overrides?: CallOverrides): Promise<SnapshotStructOutput>;

  getMetamorphicContractAddress(
    _salt: BytesLike,
    _factory: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getMinimumIntervalBetweenSnapshots(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSnapshot(
    epoch_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<SnapshotStructOutput>;

  getSnapshotDesperationDelay(overrides?: CallOverrides): Promise<BigNumber>;

  getSnapshotDesperationFactor(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    desperationDelay_: BigNumberish,
    desperationFactor_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isMock(overrides?: CallOverrides): Promise<boolean>;

  mayValidatorSnapshot(
    numValidators: BigNumberish,
    myIdx: BigNumberish,
    blocksSinceDesperation: BigNumberish,
    blsig: BytesLike,
    desperationFactor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  migrateSnapshots(
    groupSignature_: BytesLike[],
    bClaims_: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  setCommittedHeightFromLatestSnapshot(
    height_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEpochLength(
    epochLength_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinimumIntervalBetweenSnapshots(
    minimumIntervalBetweenSnapshots_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSnapshotDesperationDelay(
    desperationDelay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSnapshotDesperationFactor(
    desperationFactor_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  snapshot(
    groupSignature_: BytesLike,
    bClaims_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAliceNetHeightFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAliceNetHeightFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBlockClaimsFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<BClaimsParserLibrary.BClaimsStructOutput>;

    getBlockClaimsFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BClaimsParserLibrary.BClaimsStructOutput>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getChainIdFromLatestSnapshot(overrides?: CallOverrides): Promise<BigNumber>;

    getChainIdFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCommittedHeightFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCommittedHeightFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochFromHeight(
      height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

    getLatestSnapshot(overrides?: CallOverrides): Promise<SnapshotStructOutput>;

    getMetamorphicContractAddress(
      _salt: BytesLike,
      _factory: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getMinimumIntervalBetweenSnapshots(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<SnapshotStructOutput>;

    getSnapshotDesperationDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getSnapshotDesperationFactor(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      desperationDelay_: BigNumberish,
      desperationFactor_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isMock(overrides?: CallOverrides): Promise<boolean>;

    mayValidatorSnapshot(
      numValidators: BigNumberish,
      myIdx: BigNumberish,
      blocksSinceDesperation: BigNumberish,
      blsig: BytesLike,
      desperationFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    migrateSnapshots(
      groupSignature_: BytesLike[],
      bClaims_: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    setCommittedHeightFromLatestSnapshot(
      height_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setEpochLength(
      epochLength_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumIntervalBetweenSnapshots(
      minimumIntervalBetweenSnapshots_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSnapshotDesperationDelay(
      desperationDelay_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSnapshotDesperationFactor(
      desperationFactor_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    snapshot(
      groupSignature_: BytesLike,
      bClaims_: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "SnapshotTaken(uint256,uint256,uint256,address,bool,bytes)"(
      chainId?: null,
      epoch?: BigNumberish | null,
      height?: null,
      validator?: string | null,
      isSafeToProceedConsensus?: null,
      signatureRaw?: null
    ): SnapshotTakenEventFilter;
    SnapshotTaken(
      chainId?: null,
      epoch?: BigNumberish | null,
      height?: null,
      validator?: string | null,
      isSafeToProceedConsensus?: null,
      signatureRaw?: null
    ): SnapshotTakenEventFilter;
  };

  estimateGas: {
    getAliceNetHeightFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAliceNetHeightFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBlockClaimsFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBlockClaimsFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getChainIdFromLatestSnapshot(overrides?: CallOverrides): Promise<BigNumber>;

    getChainIdFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCommittedHeightFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCommittedHeightFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochFromHeight(
      height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

    getLatestSnapshot(overrides?: CallOverrides): Promise<BigNumber>;

    getMetamorphicContractAddress(
      _salt: BytesLike,
      _factory: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinimumIntervalBetweenSnapshots(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSnapshotDesperationDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getSnapshotDesperationFactor(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      desperationDelay_: BigNumberish,
      desperationFactor_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isMock(overrides?: CallOverrides): Promise<BigNumber>;

    mayValidatorSnapshot(
      numValidators: BigNumberish,
      myIdx: BigNumberish,
      blocksSinceDesperation: BigNumberish,
      blsig: BytesLike,
      desperationFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    migrateSnapshots(
      groupSignature_: BytesLike[],
      bClaims_: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setCommittedHeightFromLatestSnapshot(
      height_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEpochLength(
      epochLength_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinimumIntervalBetweenSnapshots(
      minimumIntervalBetweenSnapshots_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSnapshotDesperationDelay(
      desperationDelay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSnapshotDesperationFactor(
      desperationFactor_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    snapshot(
      groupSignature_: BytesLike,
      bClaims_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAliceNetHeightFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAliceNetHeightFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBlockClaimsFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBlockClaimsFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getChainIdFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getChainIdFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCommittedHeightFromLatestSnapshot(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCommittedHeightFromSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEpochFromHeight(
      height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEpochLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLatestSnapshot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMetamorphicContractAddress(
      _salt: BytesLike,
      _factory: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinimumIntervalBetweenSnapshots(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSnapshot(
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSnapshotDesperationDelay(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSnapshotDesperationFactor(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      desperationDelay_: BigNumberish,
      desperationFactor_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isMock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mayValidatorSnapshot(
      numValidators: BigNumberish,
      myIdx: BigNumberish,
      blocksSinceDesperation: BigNumberish,
      blsig: BytesLike,
      desperationFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    migrateSnapshots(
      groupSignature_: BytesLike[],
      bClaims_: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setCommittedHeightFromLatestSnapshot(
      height_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEpochLength(
      epochLength_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinimumIntervalBetweenSnapshots(
      minimumIntervalBetweenSnapshots_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSnapshotDesperationDelay(
      desperationDelay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSnapshotDesperationFactor(
      desperationFactor_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    snapshot(
      groupSignature_: BytesLike,
      bClaims_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
