/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides, Signer, utils } from "ethers";
import type {
  CustomEnumerableMapsErrorCodes,
  CustomEnumerableMapsErrorCodesInterface,
} from "../CustomEnumerableMapsErrorCodes";

const _abi = [
  {
    inputs: [],
    name: "CUSTOMENUMMAP_KEY_NOT_IN_MAP",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80630c911506146038575b600080fd5b605e7f313930300000000000000000000000000000000000000000000000000000000081565b60405190815260200160405180910390f3fea26469706673582212201ccbab146e03808f11992a3ce00cd42249195b84e1239d57b1687dc077f38aa864736f6c634300080d0033";

type CustomEnumerableMapsErrorCodesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CustomEnumerableMapsErrorCodesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CustomEnumerableMapsErrorCodes__factory extends ContractFactory {
  constructor(...args: CustomEnumerableMapsErrorCodesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CustomEnumerableMapsErrorCodes";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CustomEnumerableMapsErrorCodes> {
    return super.deploy(
      overrides || {}
    ) as Promise<CustomEnumerableMapsErrorCodes>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CustomEnumerableMapsErrorCodes {
    return super.attach(address) as CustomEnumerableMapsErrorCodes;
  }
  connect(signer: Signer): CustomEnumerableMapsErrorCodes__factory {
    return super.connect(signer) as CustomEnumerableMapsErrorCodes__factory;
  }
  static readonly contractName: "CustomEnumerableMapsErrorCodes";
  public readonly contractName: "CustomEnumerableMapsErrorCodes";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CustomEnumerableMapsErrorCodesInterface {
    return new utils.Interface(_abi) as CustomEnumerableMapsErrorCodesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CustomEnumerableMapsErrorCodes {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CustomEnumerableMapsErrorCodes;
  }
}
