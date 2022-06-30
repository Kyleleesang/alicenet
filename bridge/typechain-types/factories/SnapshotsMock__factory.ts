/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
  Signer,
  utils,
} from "ethers";
import type { SnapshotsMock, SnapshotsMockInterface } from "../SnapshotsMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "chainID_",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "epochLength_",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "height",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isSafeToProceedConsensus",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signatureRaw",
        type: "bytes",
      },
    ],
    name: "SnapshotTaken",
    type: "event",
  },
  {
    inputs: [],
    name: "getAliceNetHeightFromLatestSnapshot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch_",
        type: "uint256",
      },
    ],
    name: "getAliceNetHeightFromSnapshot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockClaimsFromLatestSnapshot",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "chainId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "height",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "txCount",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "prevBlock",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "txRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "stateRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "headerRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct BClaimsParserLibrary.BClaims",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch_",
        type: "uint256",
      },
    ],
    name: "getBlockClaimsFromSnapshot",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "chainId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "height",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "txCount",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "prevBlock",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "txRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "stateRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "headerRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct BClaimsParserLibrary.BClaims",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainIdFromLatestSnapshot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch_",
        type: "uint256",
      },
    ],
    name: "getChainIdFromSnapshot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCommittedHeightFromLatestSnapshot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch_",
        type: "uint256",
      },
    ],
    name: "getCommittedHeightFromSnapshot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "height",
        type: "uint256",
      },
    ],
    name: "getEpochFromHeight",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEpochLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestSnapshot",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "committedAt",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "chainId",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "height",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "txCount",
                type: "uint32",
              },
              {
                internalType: "bytes32",
                name: "prevBlock",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "txRoot",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "stateRoot",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "headerRoot",
                type: "bytes32",
              },
            ],
            internalType: "struct BClaimsParserLibrary.BClaims",
            name: "blockClaims",
            type: "tuple",
          },
        ],
        internalType: "struct Snapshot",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
  {
    inputs: [],
    name: "getMinimumIntervalBetweenSnapshots",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch_",
        type: "uint256",
      },
    ],
    name: "getSnapshot",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "committedAt",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "chainId",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "height",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "txCount",
                type: "uint32",
              },
              {
                internalType: "bytes32",
                name: "prevBlock",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "txRoot",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "stateRoot",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "headerRoot",
                type: "bytes32",
              },
            ],
            internalType: "struct BClaimsParserLibrary.BClaims",
            name: "blockClaims",
            type: "tuple",
          },
        ],
        internalType: "struct Snapshot",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSnapshotDesperationDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSnapshotDesperationFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "desperationDelay_",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "desperationFactor_",
        type: "uint32",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isMock",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numValidators",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "myIdx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blocksSinceDesperation",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "blsig",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "desperationFactor",
        type: "uint256",
      },
    ],
    name: "mayValidatorSnapshot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "groupSignature_",
        type: "bytes[]",
      },
      {
        internalType: "bytes[]",
        name: "bClaims_",
        type: "bytes[]",
      },
    ],
    name: "migrateSnapshots",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "height_",
        type: "uint256",
      },
    ],
    name: "setCommittedHeightFromLatestSnapshot",
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
        internalType: "uint32",
        name: "epochLength_",
        type: "uint32",
      },
    ],
    name: "setEpochLength",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "minimumIntervalBetweenSnapshots_",
        type: "uint32",
      },
    ],
    name: "setMinimumIntervalBetweenSnapshots",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "desperationDelay_",
        type: "uint32",
      },
    ],
    name: "setSnapshotDesperationDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "desperationFactor_",
        type: "uint32",
      },
    ],
    name: "setSnapshotDesperationFactor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "groupSignature_",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "bClaims_",
        type: "bytes",
      },
    ],
    name: "snapshot",
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
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620016a1380380620016a1833981016040819052620000349162000152565b33608052620000e96c15985b1a59185d1bdc941bdbdb609a1b6200005760805190565b6040517fff0000000000000000000000000000000000000000000000000000000000000060208201526001600160601b0319606083901b166021820152603581018390527f1c0bf703a3415cada9785e89e9d70314c3111ae7d8e04f33bb42eb1d264088be6055820181905260009160750160408051601f198184030181529190528051602090910120949350505050565b6001600160a01b031660a052600280546001600160a01b0319163317905563ffffffff91821660c052600080549190921666010000000000000263ffffffff60301b199091161790556200018a565b805163ffffffff811681146200014d57600080fd5b919050565b600080604083850312156200016657600080fd5b620001718362000138565b9150620001816020840162000138565b90509250929050565b60805160a05160c0516114e3620001be600039600061026201526000818161075f01526107f60152600050506114e36000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c8063ae2728ea116100f9578063d9c1165711610097578063eb7c7afe11610071578063eb7c7afe146106c6578063f45fa246146106df578063ff07fc0e146106f8578063ff914b1e1461072a57600080fd5b8063d9c116571461062d578063deb1e56e14610657578063e18c697a146106a657600080fd5b8063c5e8fde1116100d3578063c5e8fde1146105bf578063cfe8a73b146105f1578063d17fcc5614610609578063d518f2431461062557600080fd5b8063ae2728ea146104d5578063c2e8fef2146104eb578063c2ea6603146104fe57600080fd5b80633fa7a1ad11610166578063757991a811610140578063757991a81461038657806376f10ad01461039a5780637cc4cce6146103ba5780638653a465146103da57600080fd5b80633fa7a1ad1461029b57806342438d7b146102ae57806345dfc599146102b657600080fd5b806328ccaa29116101a257806328ccaa29146102465780632eee30ce1461024d5780633408e470146102605780633ecc0f5e1461028657600080fd5b8063026c2b7e146101c957806308ca1f25146101f957806319f746691461021c575b600080fd5b6000805462010000900463ffffffff168152600160205260409020545b6040519081526020015b60405180910390f35b61020c610207366004610f97565b610759565b60405190151581526020016101f0565b6101e661022a366004611003565b6000908152600160208190526040909120015463ffffffff1690565b600161020c565b6101e661025b366004611003565b6109d1565b7f00000000000000000000000000000000000000000000000000000000000000006101e6565b610299610294366004611035565b610a62565b005b6102996102a9366004611068565b610c07565b6003546101e6565b6103796102c4366004611003565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915250600090815260016020818152604092839020835160e0810185529281015463ffffffff80821685526401000000008204811693850193909352680100000000000000009004909116928201929092526002820154606082015260038201546080820152600482015460a082015260059091015460c082015290565b6040516101f0919061108a565b60005462010000900463ffffffff166101e6565b6103ad6103a8366004611003565b610cd1565b6040516101f091906110e3565b6000546e010000000000000000000000000000900463ffffffff166101e6565b6104b06103e8366004611151565b6040517fff0000000000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606083901b166021820152603581018390527f1c0bf703a3415cada9785e89e9d70314c3111ae7d8e04f33bb42eb1d264088be60558201819052600091607501604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101f0565b61020c6104e336600461132b565b600192915050565b6102996104f9366004611068565b610da4565b6103796040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810191909152506000805463ffffffff620100009091048116825260016020818152604093849020845160e081018652928101548085168452640100000000810485169284019290925268010000000000000000909104909216928101929092526002810154606083015260038101546080830152600481015460a08301526005015460c082015290565b6101e66105cd366004611003565b60009081526001602081905260409091200154640100000000900463ffffffff1690565b6000546601000000000000900463ffffffff166101e6565b6000546a0100000000000000000000900463ffffffff166101e6565b6103ad610e6a565b6000805462010000900463ffffffff908116825260016020819052604090922090910154166101e6565b610299610665366004611068565b6000805463ffffffff9092166601000000000000027fffffffffffffffffffffffffffffffffffffffffffff00000000ffffffffffff909216919091179055565b6101e66106b4366004611003565b60009081526001602052604090205490565b6102996106d4366004611068565b63ffffffff16600355565b61020c6106ed36600461138f565b600195945050505050565b6000805462010000900463ffffffff9081168252600160208190526040909220909101546401000000009004166101e6565b6101e6610738366004611003565b6000805462010000900463ffffffff16815260016020526040902081905590565b600060017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631885570f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ec91906113ca565b15610875575060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631e5975f46040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561085c57600080fd5b505af1158015610870573d6000803e3d6000fd5b505050505b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101829052815490916201000090910463ffffffff169060026108ca8361141b565b825463ffffffff9182166101009390930a92830292820219169190911790915560408051808201825243815260208082019586526000805462010000900485168152600180835290849020925183559551805183880180549383015195830151871668010000000000000000027fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff968816640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000009095169290971691909117929092179390931693909317909255606081015160028301556080810151600383015560a0810151600483015560c0015160059091015550915050949350505050565b600080546601000000000000900463ffffffff1682116109f357506001919050565b600054610a10906601000000000000900463ffffffff168361146d565b600003610a3a57600054610a34906601000000000000900463ffffffff1683611481565b92915050565b600054610a57906601000000000000900463ffffffff1683611481565b610a34906001611495565b600054610100900460ff16610a7d5760005460ff1615610a81565b303b155b610b12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084015b60405180910390fd5b600054610100900460ff16158015610b5157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b60006003819055805463ffffffff8481166e010000000000000000000000000000027fffffffffffffffffffffffffffff00000000ffffffffffffffffffffffffffff9187166a010000000000000000000002919091167fffffffffffffffffffffffffffff0000000000000000ffffffffffffffffffff909216919091171790558015610c0257600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b505050565b60025473ffffffffffffffffffffffffffffffffffffffff163314610c88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536e617073686f74733a204f6e6c792061646d696e20616c6c6f7765642100006044820152606401610b09565b6000805463ffffffff9092166e010000000000000000000000000000027fffffffffffffffffffffffffffff00000000ffffffffffffffffffffffffffff909216919091179055565b610d206040805180820182526000808252825160e0810184528181526020818101839052938101829052606081018290526080810182905260a0810182905260c0810191909152909182015290565b506000908152600160208181526040928390208351808501855281548152845160e0810186529382015463ffffffff808216865264010000000082048116868601526801000000000000000090910416948401949094526002810154606084015260038101546080840152600481015460a08401526005015460c083015282015290565b60025473ffffffffffffffffffffffffffffffffffffffff163314610e25576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536e617073686f74733a204f6e6c792061646d696e20616c6c6f7765642100006044820152606401610b09565b6000805463ffffffff9092166a0100000000000000000000027fffffffffffffffffffffffffffffffffffff00000000ffffffffffffffffffff909216919091179055565b610eb96040805180820182526000808252825160e0810184528181526020818101839052938101829052606081018290526080810182905260a0810182905260c0810191909152909182015290565b506000805463ffffffff6201000090910481168252600160208181526040938490208451808601865281548152855160e0810187529382015480861685526401000000008104861685850152680100000000000000009004909416948301949094526002840154606083015260038401546080830152600484015460a083015260059093015460c08201529181019190915290565b60008083601f840112610f6057600080fd5b50813567ffffffffffffffff811115610f7857600080fd5b602083019150836020828501011115610f9057600080fd5b9250929050565b60008060008060408587031215610fad57600080fd5b843567ffffffffffffffff80821115610fc557600080fd5b610fd188838901610f4e565b90965094506020870135915080821115610fea57600080fd5b50610ff787828801610f4e565b95989497509550505050565b60006020828403121561101557600080fd5b5035919050565b803563ffffffff8116811461103057600080fd5b919050565b6000806040838503121561104857600080fd5b6110518361101c565b915061105f6020840161101c565b90509250929050565b60006020828403121561107a57600080fd5b6110838261101c565b9392505050565b60e08101610a34828463ffffffff80825116835280602083015116602084015280604083015116604084015250606081015160608301526080810151608083015260a081015160a083015260c081015160c08301525050565b8151815260208083015161010083019161114a9084018263ffffffff80825116835280602083015116602084015280604083015116604084015250606081015160608301526080810151608083015260a081015160a083015260c081015160c08301525050565b5092915050565b6000806040838503121561116457600080fd5b82359150602083013573ffffffffffffffffffffffffffffffffffffffff8116811461118f57600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156112105761121061119a565b604052919050565b6000601f838184011261122a57600080fd5b8235602067ffffffffffffffff808311156112475761124761119a565b8260051b6112568382016111c9565b938452868101830193838101908986111561127057600080fd5b84890192505b8583101561131e5782358481111561128e5760008081fd5b8901603f81018b136112a05760008081fd5b858101356040868211156112b6576112b661119a565b6112e5887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08c850116016111c9565b8281528d828486010111156112fa5760008081fd5b828285018a8301376000928101890192909252508352509184019190840190611276565b9998505050505050505050565b6000806040838503121561133e57600080fd5b823567ffffffffffffffff8082111561135657600080fd5b61136286838701611218565b9350602085013591508082111561137857600080fd5b5061138585828601611218565b9150509250929050565b600080600080600060a086880312156113a757600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000602082840312156113dc57600080fd5b8151801515811461108357600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600063ffffffff808316818103611434576114346113ec565b6001019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60008261147c5761147c61143e565b500690565b6000826114905761149061143e565b500490565b600082198211156114a8576114a86113ec565b50019056fea264697066735822122014bca3712e2a03583fda96e00204ef069edf3bedd7b878e4564ed99dec73f95a64736f6c634300080d0033";

type SnapshotsMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SnapshotsMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SnapshotsMock__factory extends ContractFactory {
  constructor(...args: SnapshotsMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SnapshotsMock";
  }

  deploy(
    chainID_: BigNumberish,
    epochLength_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SnapshotsMock> {
    return super.deploy(
      chainID_,
      epochLength_,
      overrides || {}
    ) as Promise<SnapshotsMock>;
  }
  getDeployTransaction(
    chainID_: BigNumberish,
    epochLength_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(chainID_, epochLength_, overrides || {});
  }
  attach(address: string): SnapshotsMock {
    return super.attach(address) as SnapshotsMock;
  }
  connect(signer: Signer): SnapshotsMock__factory {
    return super.connect(signer) as SnapshotsMock__factory;
  }
  static readonly contractName: "SnapshotsMock";
  public readonly contractName: "SnapshotsMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SnapshotsMockInterface {
    return new utils.Interface(_abi) as SnapshotsMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SnapshotsMock {
    return new Contract(address, _abi, signerOrProvider) as SnapshotsMock;
  }
}
