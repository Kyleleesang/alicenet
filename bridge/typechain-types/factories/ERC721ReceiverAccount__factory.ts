/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides, Signer, utils } from "ethers";
import type {
  ERC721ReceiverAccount,
  ERC721ReceiverAccountInterface,
} from "../ERC721ReceiverAccount";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "aToken",
    outputs: [
      {
        internalType: "contract AToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenID_",
        type: "uint256",
      },
    ],
    name: "approveNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenID",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenID",
        type: "uint256",
      },
    ],
    name: "burnTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenID_",
        type: "uint256",
      },
    ],
    name: "collectEth",
    outputs: [
      {
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenID_",
        type: "uint256",
      },
    ],
    name: "collectToken",
    outputs: [
      {
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "depositEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "depositToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockDuration",
        type: "uint256",
      },
    ],
    name: "lockWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration_",
        type: "uint256",
      },
    ],
    name: "mintTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "publicStaking",
    outputs: [
      {
        internalType: "contract PublicStaking",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenID_",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approve_",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract AToken",
        name: "aToken_",
        type: "address",
      },
      {
        internalType: "contract PublicStaking",
        name: "stakeNFT_",
        type: "address",
      },
    ],
    name: "setTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenID_",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f5c806100206000396000f3fe60806040526004361061012d5760003560e01c80636215be77116100a5578063a22cb46511610074578063cbc7854e11610059578063cbc7854e146103e8578063e35c3e2814610459578063ea785a5e1461047957600080fd5b8063a22cb465146103a8578063b88d4fde146103c857600080fd5b80636215be771461031b5780639600dd831461033b578063a0712d681461035b578063a0c1f15e1461037b57600080fd5b8063150b7a02116100fc5780632a0d8bd1116100e15780632a0d8bd1146102a65780632baf2acb146102c657806342966c68146102e657600080fd5b8063150b7a021461021057806323b872dd1461028657600080fd5b806304decf2e14610139578063095ea7b3146101905780630e4eb15b146101c05780630f4d14e9146101ee57600080fd5b3661013457005b600080fd5b34801561014557600080fd5b506000546101669073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561019c57600080fd5b506101b06101ab366004610c5c565b610499565b6040519015158152602001610187565b3480156101cc57600080fd5b506101e06101db366004610c88565b61053e565b604051908152602001610187565b3480156101fa57600080fd5b5061020e610209366004610caa565b6105db565b005b34801561021c57600080fd5b5061025561022b366004610cc3565b7f150b7a023d4804d13e8c85fb27262cb750cf6ba9f9dd3bb30d90f482ceeb4b1f95945050505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610187565b34801561029257600080fd5b5061020e6102a1366004610d62565b610664565b3480156102b257600080fd5b506101e06102c1366004610caa565b6106fd565b3480156102d257600080fd5b506101e06102e1366004610da3565b61079a565b3480156102f257600080fd5b50610306610301366004610caa565b610847565b60408051928352602083019190915201610187565b34801561032757600080fd5b5061020e610336366004610caa565b6108e5565b34801561034757600080fd5b5061020e610356366004610c5c565b610973565b34801561036757600080fd5b506101e0610376366004610caa565b6109e8565b34801561038757600080fd5b506001546101669073ffffffffffffffffffffffffffffffffffffffff1681565b3480156103b457600080fd5b5061020e6103c3366004610de6565b610a40565b3480156103d457600080fd5b5061020e6103e3366004610cc3565b610aa0565b3480156103f457600080fd5b5061020e610403366004610e1f565b6000805473ffffffffffffffffffffffffffffffffffffffff9283167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560018054939092169216919091179055565b34801561046557600080fd5b506101e0610474366004610caa565b610b37565b34801561048557600080fd5b50610306610494366004610c5c565b610b8f565b6001546040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052600092169063095ea7b3906044016020604051808303816000875af1158015610513573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105379190610e4d565b9392505050565b600080546040517f0e4eb15b000000000000000000000000000000000000000000000000000000008152600481018590526024810184905273ffffffffffffffffffffffffffffffffffffffff90911690630e4eb15b906044016020604051808303816000875af11580156105b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105379190610e6a565b6000546040517f99a89ecc000000000000000000000000000000000000000000000000000000008152602a600482015273ffffffffffffffffffffffffffffffffffffffff909116906399a89ecc9083906024016000604051808303818588803b15801561064857600080fd5b505af115801561065c573d6000803e3d6000fd5b505050505050565b6000546040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152848116602483015260448201849052909116906323b872dd90606401600060405180830381600087803b1580156106e057600080fd5b505af11580156106f4573d6000803e3d6000fd5b50505050505050565b600080546040517f2a0d8bd10000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690632a0d8bd1906024015b6020604051808303816000875af1158015610770573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107949190610e6a565b92915050565b600080546040517f2baf2acb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152602482018690526044820185905290911690632baf2acb906064016020604051808303816000875af115801561081b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083f9190610e6a565b949350505050565b600080546040517f42966c6800000000000000000000000000000000000000000000000000000000815260048101849052829173ffffffffffffffffffffffffffffffffffffffff16906342966c689060240160408051808303816000875af11580156108b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108dc9190610e83565b91509150915091565b6000546040517f8191f5e5000000000000000000000000000000000000000000000000000000008152602a60048201526024810183905273ffffffffffffffffffffffffffffffffffffffff90911690638191f5e590604401600060405180830381600087803b15801561095857600080fd5b505af115801561096c573d6000803e3d6000fd5b5050505050565b6000546040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063095ea7b3906044015b600060405180830381600087803b15801561064857600080fd5b600080546040517fa0712d680000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff9091169063a0712d6890602401610751565b6000546040517fa22cb46500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015283151560248301529091169063a22cb465906044016109ce565b6000546040517fb88d4fde00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063b88d4fde90610afe9088908890889088908890600401610ea7565b600060405180830381600087803b158015610b1857600080fd5b505af1158015610b2c573d6000803e3d6000fd5b505050505050505050565b600080546040517fe35c3e280000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff9091169063e35c3e2890602401610751565b600080546040517fea785a5e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152602482018590528392169063ea785a5e9060440160408051808303816000875af1158015610c08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2c9190610e83565b915091509250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114610c5957600080fd5b50565b60008060408385031215610c6f57600080fd5b8235610c7a81610c37565b946020939093013593505050565b60008060408385031215610c9b57600080fd5b50508035926020909101359150565b600060208284031215610cbc57600080fd5b5035919050565b600080600080600060808688031215610cdb57600080fd5b8535610ce681610c37565b94506020860135610cf681610c37565b935060408601359250606086013567ffffffffffffffff80821115610d1a57600080fd5b818801915088601f830112610d2e57600080fd5b813581811115610d3d57600080fd5b896020828501011115610d4f57600080fd5b9699959850939650602001949392505050565b600080600060608486031215610d7757600080fd5b8335610d8281610c37565b92506020840135610d9281610c37565b929592945050506040919091013590565b600080600060608486031215610db857600080fd5b8335610dc381610c37565b95602085013595506040909401359392505050565b8015158114610c5957600080fd5b60008060408385031215610df957600080fd5b8235610e0481610c37565b91506020830135610e1481610dd8565b809150509250929050565b60008060408385031215610e3257600080fd5b8235610e3d81610c37565b91506020830135610e1481610c37565b600060208284031215610e5f57600080fd5b815161053781610dd8565b600060208284031215610e7c57600080fd5b5051919050565b60008060408385031215610e9657600080fd5b505080516020909101519092909150565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015260806060830152826080830152828460a0840137600060a0848401015260a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501168301019050969550505050505056fea2646970667358221220d80b6245655148243096612ef225672637e75799f9a63addc288c1d70f2ddcda64736f6c634300080d0033";

type ERC721ReceiverAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ReceiverAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721ReceiverAccount__factory extends ContractFactory {
  constructor(...args: ERC721ReceiverAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721ReceiverAccount";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721ReceiverAccount> {
    return super.deploy(overrides || {}) as Promise<ERC721ReceiverAccount>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721ReceiverAccount {
    return super.attach(address) as ERC721ReceiverAccount;
  }
  connect(signer: Signer): ERC721ReceiverAccount__factory {
    return super.connect(signer) as ERC721ReceiverAccount__factory;
  }
  static readonly contractName: "ERC721ReceiverAccount";
  public readonly contractName: "ERC721ReceiverAccount";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721ReceiverAccountInterface {
    return new utils.Interface(_abi) as ERC721ReceiverAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721ReceiverAccount {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721ReceiverAccount;
  }
}
