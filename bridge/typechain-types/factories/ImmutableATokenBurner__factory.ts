/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";
import type {
  ImmutableATokenBurner,
  ImmutableATokenBurnerInterface,
} from "../ImmutableATokenBurner";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    name: "getMetamorphicContractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class ImmutableATokenBurner__factory {
  static readonly abi = _abi;
  static createInterface(): ImmutableATokenBurnerInterface {
    return new utils.Interface(_abi) as ImmutableATokenBurnerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ImmutableATokenBurner {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ImmutableATokenBurner;
  }
}
