/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { OnEvent, TypedEvent, TypedEventFilter, TypedListener } from "./common";

export interface ImmutableAuthErrorCodesInterface extends utils.Interface {
  contractName: "ImmutableAuthErrorCodes";
  functions: {
    "IMMUTEABLEAUTH_ONLY_ATOKEN()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_ATOKENBURNER()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_ATOKENMINTER()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_BTOKEN()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_ETHDKG()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_ETHDKGACCUSATIONS()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_ETHDKGPHASES()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_FACTORY()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_FOUNDATION()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_GOVERNANCE()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_LIQUIDITYPROVIDERSTAKING()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_MADTOKEN()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_PUBLICSTAKING()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_SNAPSHOTS()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_STAKINGPOSITIONDESCRIPTOR()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_VALIDATORPOOL()": FunctionFragment;
    "IMMUTEABLEAUTH_ONLY_VALIDATORSTAKING()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_ATOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_ATOKENBURNER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_ATOKENMINTER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_BTOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_ETHDKG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_ETHDKGACCUSATIONS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_ETHDKGPHASES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_FACTORY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_FOUNDATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_GOVERNANCE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_LIQUIDITYPROVIDERSTAKING",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_MADTOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_PUBLICSTAKING",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_SNAPSHOTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_STAKINGPOSITIONDESCRIPTOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_VALIDATORPOOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMMUTEABLEAUTH_ONLY_VALIDATORSTAKING",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_ATOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_ATOKENBURNER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_ATOKENMINTER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_BTOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_ETHDKG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_ETHDKGACCUSATIONS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_ETHDKGPHASES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_FACTORY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_FOUNDATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_GOVERNANCE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_LIQUIDITYPROVIDERSTAKING",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_MADTOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_PUBLICSTAKING",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_SNAPSHOTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_STAKINGPOSITIONDESCRIPTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_VALIDATORPOOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMMUTEABLEAUTH_ONLY_VALIDATORSTAKING",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ImmutableAuthErrorCodes extends BaseContract {
  contractName: "ImmutableAuthErrorCodes";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ImmutableAuthErrorCodesInterface;

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
    IMMUTEABLEAUTH_ONLY_ATOKEN(overrides?: CallOverrides): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_ATOKENBURNER(
      overrides?: CallOverrides
    ): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_ATOKENMINTER(
      overrides?: CallOverrides
    ): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_BTOKEN(overrides?: CallOverrides): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_ETHDKG(overrides?: CallOverrides): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_ETHDKGACCUSATIONS(
      overrides?: CallOverrides
    ): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_ETHDKGPHASES(
      overrides?: CallOverrides
    ): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_FACTORY(overrides?: CallOverrides): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_FOUNDATION(
      overrides?: CallOverrides
    ): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_GOVERNANCE(
      overrides?: CallOverrides
    ): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_LIQUIDITYPROVIDERSTAKING(
      overrides?: CallOverrides
    ): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_MADTOKEN(overrides?: CallOverrides): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_PUBLICSTAKING(
      overrides?: CallOverrides
    ): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_SNAPSHOTS(overrides?: CallOverrides): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_STAKINGPOSITIONDESCRIPTOR(
      overrides?: CallOverrides
    ): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_VALIDATORPOOL(
      overrides?: CallOverrides
    ): Promise<[string]>;

    IMMUTEABLEAUTH_ONLY_VALIDATORSTAKING(
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  IMMUTEABLEAUTH_ONLY_ATOKEN(overrides?: CallOverrides): Promise<string>;

  IMMUTEABLEAUTH_ONLY_ATOKENBURNER(overrides?: CallOverrides): Promise<string>;

  IMMUTEABLEAUTH_ONLY_ATOKENMINTER(overrides?: CallOverrides): Promise<string>;

  IMMUTEABLEAUTH_ONLY_BTOKEN(overrides?: CallOverrides): Promise<string>;

  IMMUTEABLEAUTH_ONLY_ETHDKG(overrides?: CallOverrides): Promise<string>;

  IMMUTEABLEAUTH_ONLY_ETHDKGACCUSATIONS(
    overrides?: CallOverrides
  ): Promise<string>;

  IMMUTEABLEAUTH_ONLY_ETHDKGPHASES(overrides?: CallOverrides): Promise<string>;

  IMMUTEABLEAUTH_ONLY_FACTORY(overrides?: CallOverrides): Promise<string>;

  IMMUTEABLEAUTH_ONLY_FOUNDATION(overrides?: CallOverrides): Promise<string>;

  IMMUTEABLEAUTH_ONLY_GOVERNANCE(overrides?: CallOverrides): Promise<string>;

  IMMUTEABLEAUTH_ONLY_LIQUIDITYPROVIDERSTAKING(
    overrides?: CallOverrides
  ): Promise<string>;

  IMMUTEABLEAUTH_ONLY_MADTOKEN(overrides?: CallOverrides): Promise<string>;

  IMMUTEABLEAUTH_ONLY_PUBLICSTAKING(overrides?: CallOverrides): Promise<string>;

  IMMUTEABLEAUTH_ONLY_SNAPSHOTS(overrides?: CallOverrides): Promise<string>;

  IMMUTEABLEAUTH_ONLY_STAKINGPOSITIONDESCRIPTOR(
    overrides?: CallOverrides
  ): Promise<string>;

  IMMUTEABLEAUTH_ONLY_VALIDATORPOOL(overrides?: CallOverrides): Promise<string>;

  IMMUTEABLEAUTH_ONLY_VALIDATORSTAKING(
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    IMMUTEABLEAUTH_ONLY_ATOKEN(overrides?: CallOverrides): Promise<string>;

    IMMUTEABLEAUTH_ONLY_ATOKENBURNER(
      overrides?: CallOverrides
    ): Promise<string>;

    IMMUTEABLEAUTH_ONLY_ATOKENMINTER(
      overrides?: CallOverrides
    ): Promise<string>;

    IMMUTEABLEAUTH_ONLY_BTOKEN(overrides?: CallOverrides): Promise<string>;

    IMMUTEABLEAUTH_ONLY_ETHDKG(overrides?: CallOverrides): Promise<string>;

    IMMUTEABLEAUTH_ONLY_ETHDKGACCUSATIONS(
      overrides?: CallOverrides
    ): Promise<string>;

    IMMUTEABLEAUTH_ONLY_ETHDKGPHASES(
      overrides?: CallOverrides
    ): Promise<string>;

    IMMUTEABLEAUTH_ONLY_FACTORY(overrides?: CallOverrides): Promise<string>;

    IMMUTEABLEAUTH_ONLY_FOUNDATION(overrides?: CallOverrides): Promise<string>;

    IMMUTEABLEAUTH_ONLY_GOVERNANCE(overrides?: CallOverrides): Promise<string>;

    IMMUTEABLEAUTH_ONLY_LIQUIDITYPROVIDERSTAKING(
      overrides?: CallOverrides
    ): Promise<string>;

    IMMUTEABLEAUTH_ONLY_MADTOKEN(overrides?: CallOverrides): Promise<string>;

    IMMUTEABLEAUTH_ONLY_PUBLICSTAKING(
      overrides?: CallOverrides
    ): Promise<string>;

    IMMUTEABLEAUTH_ONLY_SNAPSHOTS(overrides?: CallOverrides): Promise<string>;

    IMMUTEABLEAUTH_ONLY_STAKINGPOSITIONDESCRIPTOR(
      overrides?: CallOverrides
    ): Promise<string>;

    IMMUTEABLEAUTH_ONLY_VALIDATORPOOL(
      overrides?: CallOverrides
    ): Promise<string>;

    IMMUTEABLEAUTH_ONLY_VALIDATORSTAKING(
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    IMMUTEABLEAUTH_ONLY_ATOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_ATOKENBURNER(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_ATOKENMINTER(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_BTOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_ETHDKG(overrides?: CallOverrides): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_ETHDKGACCUSATIONS(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_ETHDKGPHASES(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_FACTORY(overrides?: CallOverrides): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_FOUNDATION(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_GOVERNANCE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_LIQUIDITYPROVIDERSTAKING(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_MADTOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_PUBLICSTAKING(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_SNAPSHOTS(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_STAKINGPOSITIONDESCRIPTOR(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_VALIDATORPOOL(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IMMUTEABLEAUTH_ONLY_VALIDATORSTAKING(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    IMMUTEABLEAUTH_ONLY_ATOKEN(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_ATOKENBURNER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_ATOKENMINTER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_BTOKEN(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_ETHDKG(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_ETHDKGACCUSATIONS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_ETHDKGPHASES(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_FACTORY(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_FOUNDATION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_GOVERNANCE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_LIQUIDITYPROVIDERSTAKING(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_MADTOKEN(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_PUBLICSTAKING(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_SNAPSHOTS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_STAKINGPOSITIONDESCRIPTOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_VALIDATORPOOL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IMMUTEABLEAUTH_ONLY_VALIDATORSTAKING(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
