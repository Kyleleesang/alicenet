/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides, Signer, utils } from "ethers";
import type {
  PClaimsParserLibraryErrorCodes,
  PClaimsParserLibraryErrorCodesInterface,
} from "../PClaimsParserLibraryErrorCodes";

const _abi = [
  {
    inputs: [],
    name: "PCLAIMSPARSERLIB_DATA_OFFSET_OVERFLOW",
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
    name: "PCLAIMSPARSERLIB_INSUFFICIENT_BYTES",
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
  "0x60d6610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c8063d507f8ad146042578063ea2c55be14607a575b600080fd5b60687f313330300000000000000000000000000000000000000000000000000000000081565b60405190815260200160405180910390f35b60687f31333031000000000000000000000000000000000000000000000000000000008156fea264697066735822122081fcd583333f9628273a605cab7e1ac5bee8b6aa1732645bfcbc791e75df31fa64736f6c634300080d0033";

type PClaimsParserLibraryErrorCodesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PClaimsParserLibraryErrorCodesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PClaimsParserLibraryErrorCodes__factory extends ContractFactory {
  constructor(...args: PClaimsParserLibraryErrorCodesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PClaimsParserLibraryErrorCodes";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PClaimsParserLibraryErrorCodes> {
    return super.deploy(
      overrides || {}
    ) as Promise<PClaimsParserLibraryErrorCodes>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PClaimsParserLibraryErrorCodes {
    return super.attach(address) as PClaimsParserLibraryErrorCodes;
  }
  connect(signer: Signer): PClaimsParserLibraryErrorCodes__factory {
    return super.connect(signer) as PClaimsParserLibraryErrorCodes__factory;
  }
  static readonly contractName: "PClaimsParserLibraryErrorCodes";
  public readonly contractName: "PClaimsParserLibraryErrorCodes";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PClaimsParserLibraryErrorCodesInterface {
    return new utils.Interface(_abi) as PClaimsParserLibraryErrorCodesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PClaimsParserLibraryErrorCodes {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PClaimsParserLibraryErrorCodes;
  }
}
