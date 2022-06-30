/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides, Signer, utils } from "ethers";
import type {
  RCertParserLibraryErrorCodes,
  RCertParserLibraryErrorCodesInterface,
} from "../RCertParserLibraryErrorCodes";

const _abi = [
  {
    inputs: [],
    name: "RCERTPARSERLIB_DATA_OFFSET_OVERFLOW",
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
  {
    inputs: [],
    name: "RCERTPARSERLIB_INSUFFICIENT_BYTES",
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
  {
    inputs: [],
    name: "RCERTPARSERLIB_INSUFFICIENT_BYTES_TO_EXTRACT",
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
  "0x61010661003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060475760003560e01c80630d0bbca714604c57806332d46c62146084578063401f6b5c1460aa575b600080fd5b60727f313430310000000000000000000000000000000000000000000000000000000081565b60405190815260200160405180910390f35b60727f313430320000000000000000000000000000000000000000000000000000000081565b60727f31343030000000000000000000000000000000000000000000000000000000008156fea26469706673582212205baaac2274260813429441726b3cc2f1c3a7bc1fb2c940fe73d4c951d3473caf64736f6c634300080d0033";

type RCertParserLibraryErrorCodesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RCertParserLibraryErrorCodesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RCertParserLibraryErrorCodes__factory extends ContractFactory {
  constructor(...args: RCertParserLibraryErrorCodesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "RCertParserLibraryErrorCodes";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RCertParserLibraryErrorCodes> {
    return super.deploy(
      overrides || {}
    ) as Promise<RCertParserLibraryErrorCodes>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RCertParserLibraryErrorCodes {
    return super.attach(address) as RCertParserLibraryErrorCodes;
  }
  connect(signer: Signer): RCertParserLibraryErrorCodes__factory {
    return super.connect(signer) as RCertParserLibraryErrorCodes__factory;
  }
  static readonly contractName: "RCertParserLibraryErrorCodes";
  public readonly contractName: "RCertParserLibraryErrorCodes";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RCertParserLibraryErrorCodesInterface {
    return new utils.Interface(_abi) as RCertParserLibraryErrorCodesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RCertParserLibraryErrorCodes {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RCertParserLibraryErrorCodes;
  }
}
