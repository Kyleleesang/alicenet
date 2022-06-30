/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides, Signer, utils } from "ethers";
import type {
  StateMigration,
  StateMigrationInterface,
} from "../StateMigration";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factory_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EPOCH_LENGTH",
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
    name: "doMigrationStep",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "migrateSnapshotsAndValidators",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeValidators",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101a06040523480156200001257600080fd5b5060405162002d0238038062002d0283398101604081905262000035916200024b565b6001600160a01b038116608052620000ef68536e617073686f747360b81b6200005d60805190565b6040517fff0000000000000000000000000000000000000000000000000000000000000060208201526001600160601b0319606083901b166021820152603581018390527f1c0bf703a3415cada9785e89e9d70314c3111ae7d8e04f33bb42eb1d264088be6055820181905260009160750160408051601f198184030181529190528051602090910120949350505050565b6001600160a01b031660a0526200011365455448444b4760d01b6200005d60805190565b6001600160a01b031660c052620001376520aa37b5b2b760d11b6200005d60805190565b6001600160a01b031660e052620001616b20aa37b5b2b726b4b73a32b960a11b6200005d60805190565b6001600160a01b0316610100526200018665212a37b5b2b760d11b6200005d60805190565b6001600160a01b031661012052620001b26c5075626c69635374616b696e6760981b6200005d60805190565b6001600160a01b031661014052620001de6c15985b1a59185d1bdc941bdbdb609a1b6200005d60805190565b6001600160a01b0316610160526040518190620001fb906200023d565b6001600160a01b039091168152602001604051809103906000f08015801562000228573d6000803e3d6000fd5b506001600160a01b031661018052506200027d565b6106a3806200265f83390190565b6000602082840312156200025e57600080fd5b81516001600160a01b03811681146200027657600080fd5b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516123336200032c60003960008181610649015281816106da01528181611ced01528181611d8b0152611e0d0152600081816101980152818161053f015261097801526000818161036a01528181610438015261050301526000818160dc0152610f37015260006102410152600061032b01526000610ebe01526000611b900152600061028001526123336000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638653a465116100505780638653a4651461007e578063ac4746ab146100bb578063e1e03156146100d257600080fd5b8063544148271461006c57806362f7fb8c14610076575b600080fd5b6100746100da565b005b6100746106b3565b61009161008c366004611ec9565b611c3e565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100c461040081565b6040519081526020016100b2565b610074611ceb565b7f00000000000000000000000000000000000000000000000000000000000000006040517f767bc1bf0000000000000000000000000000000000000000000000000000000081526000600482018190526024820181905260448201526103e8606482015273ffffffffffffffffffffffffffffffffffffffff919091169063767bc1bf90608401600060405180830381600087803b15801561017b57600080fd5b505af115801561018f573d6000803e3d6000fd5b505050506101ba7f000000000000000000000000000000000000000000000000000000000000000090565b6040517f43808c500000000000000000000000000000000000000000000000000000000081526001600482015273ffffffffffffffffffffffffffffffffffffffff91909116906343808c5090602401600060405180830381600087803b15801561022457600080fd5b505af1158015610238573d6000803e3d6000fd5b505050506102637f000000000000000000000000000000000000000000000000000000000000000090565b73ffffffffffffffffffffffffffffffffffffffff166340c10f197f00000000000000000000000000000000000000000000000000000000000000006040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004828101919091526024820152604401600060405180830381600087803b15801561030e57600080fd5b505af1158015610322573d6000803e3d6000fd5b5050505061034d7f000000000000000000000000000000000000000000000000000000000000000090565b73ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f00000000000000000000000000000000000000000000000000000000000000006040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff90911660048281019190915260248201526044016020604051808303816000875af11580156103fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104219190611f12565b5061042a611eab565b60005b600481101561060b577f00000000000000000000000000000000000000000000000000000000000000006040517fa0712d680000000000000000000000000000000000000000000000000000000081526001600482015273ffffffffffffffffffffffffffffffffffffffff919091169063a0712d68906024016020604051808303816000875af11580156104c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ea9190611f3b565b8282600481106104fc576104fc611f54565b60200201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f000000000000000000000000000000000000000000000000000000000000000084846004811061057057610570611f54565b60200201516040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff90921660048301526024820152604401600060405180830381600087803b1580156105e057600080fd5b505af11580156105f4573d6000803e3d6000fd5b50505050808061060390611f83565b91505061042d565b506040517f926a9fbe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063926a9fbe9061067e908490600401612005565b600060405180830381600087803b15801561069857600080fd5b505af11580156106ac573d6000803e3d6000fd5b5050505050565b60408051600480825260a082019092526000916020820160808036833701905050905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166367f718a96040518163ffffffff1660e01b8152600401608060405180830381865afa158015610743573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107679190612013565b905060005b82518110156107bb5781816004811061078757610787611f54565b602002015183828151811061079e5761079e611f54565b6020908102919091010152806107b381611f83565b91505061076c565b5060408051600480825260a082019092526000916020820160808036833701905050905073b80d6653f7e5b80dbbe8d0aa9f61b5d72e8028ad8160008151811061080757610807611f54565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507325489d6a720663f7e5253df68948edb302dfdcb68160018151811061086957610869611f54565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505073322e8f463b925da54a778ed597aef41bc4fe4743816002815181106108cb576108cb611f54565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505073adf2a338e19c12298a3007cbea1c5276d1f746e08160038151811061092d5761092d611f54565b73ffffffffffffffffffffffffffffffffffffffff92831660209182029290920101526040517f65bd91af0000000000000000000000000000000000000000000000000000000081527f0000000000000000000000000000000000000000000000000000000000000000909116906365bd91af906109b19084908790600401612139565b600060405180830381600087803b1580156109cb57600080fd5b505af11580156109df573d6000803e3d6000fd5b5060009250600491506109ef9050565b604051908082528060200260200182016040528015610a18578160200160208202803683370190505b5060408051600480825260a0820190925291925060009190816020015b610a3d611eab565b815260200190600190039081610a35579050509050600182600081518110610a6757610a67611f54565b60200260200101818152505060405180608001604052807f109f68dde37442959baa4b16498a6fd19c285f9355c23d8eef900876e8536a1281526020017f2c11cec2ce4e17afffcc105f9bd0e646f6274f562f1c93f93545fc22c74a2cdc81526020017f0430024aa1619a117e74425481c44f4628f45af7b389e4d5f84fc41227e1829e81526020017f163cb9abb41800ba5cc1955fd72c0983edc9869a21925006e691d4947451c9fd81525081600081518110610b2757610b27611f54565b6020026020010181905250600282600181518110610b4757610b47611f54565b60200260200101818152505060405180608001604052807f13f8a33ff7ef3cb5536b2223195b7b652a3533d309ad3887bcf570c9b1dbe14281526020017f170fe500681ff96e84a6dd7d1e4698f0ad6dd3ef17520a7cac29b29b84f86aa781526020017f19d29ec38a1d7d8d7284a76b214bf5b818eaccf47cd37ab8bc08c20833e586e981526020017f27c0f981d1bbc1667ea520341b7fa65fc79815ab8122a814e3714bfdbacd84db81525081600181518110610c0757610c07611f54565b6020026020010181905250600382600281518110610c2757610c27611f54565b60200260200101818152505060405180608001604052807f1064dd800716a7e80ed5d40d5563940cd25be4451976a28c237e1426d40eae5a81526020017f0e1c4d27ca7672e0662aaecbc5f2d62ec23e58cf63ffa9b6fabd41d3cff7c92781526020017f106d1f91c4b77d5c9bb485aeea784e9acf0c91702eefb766e94aefc92043a00481526020017f281971fd391a560142b8d796018afc31131a668b2ca6f62b304564d6422bb03f81525081600281518110610ce757610ce7611f54565b6020026020010181905250600482600381518110610d0757610d07611f54565b60200260200101818152505060405180608001604052807f2228b7dd85ddae13994fa85f42df1833da3b9468a1e65b987142d62f125a975481526020017f0c5682ae7cd22a3c3daff06ce469f318025845e90254d9d05cecaeba45f445a581526020017f2cdac99ed82ffc83fc17213e96d56400db23f08d05418936cb352f0e179cf97181526020017f06371376125bb2b96a5e427fac829f5c3919296aac4c42ddc44eb7c773369c2b81525081600381518110610dc757610dc7611f54565b602090810291909101810191909152604080516080810182527f2c28ce7f0c752e035b68687a8210cceb6068b5034bba9a4a8f2d43e3bbaa887781527f081b33b885370e04cd712601eb860bf821396bdbcd4b089aba0bfe7b1e649dd3928101929092527f253adba688741303e0b046632b35289a0d5c7648b414375e4d61a855abc5f0c3828201527f095ed894617e232df1779101e1d98e177340cb0fc6283cbc437d79a12290c2f16060830152517f4890465a0000000000000000000000000000000000000000000000000000000081526004916001916102369160009173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634890465a90610f00908b908b908b908b908b908a908c908b908501612167565b600060405180830381600087803b158015610f1a57600080fd5b505af1158015610f2e573d6000803e3d6000fd5b50505050610f597f000000000000000000000000000000000000000000000000000000000000000090565b6040517f921782780000000000000000000000000000000000000000000000000000000081526001600482015273ba7809a4114eef598132461f3202b5013e834cd5602482015264746a528800604482015273ffffffffffffffffffffffffffffffffffffffff9190911690639217827890606401600060405180830381600087803b158015610fe857600080fd5b505af1158015610ffc573d6000803e3d6000fd5b50600092506005915061100c9050565b60405190808252806020026020018201604052801561103f57816020015b606081526020019060019003908161102a5790505b5060408051600580825260c0820190925291925060009190816020015b606081526020019060019003908161105c579050509050604051602001611160907b0100040015000000002c01000d00000002010000190000000201000081527f25000000020100003100000002010000031dfcf2fef268ff9956ee399230e9bf60208201527f1da9dd510d18552b736b3269f4544c01c5d2460186f7233c927e7db2dcc703c060408201527fe500b653ca82273b7bfad8045d85a470d058c043d927976ecf061b3cdb3a4a0d60608201527f2de3284fcd69e23733650a1b3ef367533807ec1e085227e7bb99f47db1b118ce60808201527ffdae66f2fbfc66449a4500e9a6a2dab20000000000000000000000000000000060a082015260b00190565b6040516020818303038152906040528260008151811061118257611182611f54565b602002602001018190525060405160200161127a907b0100040015000000003001000d00000002010000190000000201000081527f250000000201000031000000020100009a7a9e6d46b1640392f4444a9cf56d1160208201527f90fe77fd4a740ee76b0e5f261341d195c5d2460186f7233c927e7db2dcc703c060408201527fe500b653ca82273b7bfad8045d85a470d29f86626d42e94c88da05e5cec3c29f60608201527f0fd037f8a9e1fcb6b49a4dd322da317ce4c870a97b5731173a6d17b71740c49860808201527fed409e25e28e9077c7f9119af3c286920000000000000000000000000000000060a082015260b00190565b6040516020818303038152906040528260018151811061129c5761129c611f54565b6020026020010181905250604051602001611394907b0100040015000000003401000d00000002010000190000000201000081527f2500000002010000310000000201000000f396eeda71abea614606937f7fcbd460208201527fd704af9ac0556a66687d689497c8da09c5d2460186f7233c927e7db2dcc703c060408201527fe500b653ca82273b7bfad8045d85a47033839738f138dbcbb362c3b351c7b7f160608201527f6041304c75354fb11ae01d3623cc4e146a5a9af572eacd9e40d9f508d077419c60808201527fc191f542c213d2c204d3251ce88c476b0000000000000000000000000000000060a082015260b00190565b604051602081830303815290604052826002815181106113b6576113b6611f54565b60200260200101819052506040516020016114ae907b0100040015000000003801000d00000002010000190000000201000081527f2500000002010000310000000201000000af33d9a061b001d8c1c912b2cf58f560208201527ff5bccd81e9c0fac7ac4f256134677a27c5d2460186f7233c927e7db2dcc703c060408201527fe500b653ca82273b7bfad8045d85a47099726b1e813baf97a0f88c89c525735860608201527fc4ef40c38b515184ea95bb9113587c85a06879b5886d1af4f04773c418b9517d60808201527fb8b410de7fdff0fd9ed47316e4c23e9f0000000000000000000000000000000060a082015260b00190565b604051602081830303815290604052826003815181106114d0576114d0611f54565b60200260200101819052506040516020016115c8907b0100040015000000003c01000d00000002010000190000000201000081527f250000000201000031000000020100001923548c43980ec331fa993cb8b90b1560208201527f7f4251fc8c37ba3506d205611af468e8c5d2460186f7233c927e7db2dcc703c060408201527fe500b653ca82273b7bfad8045d85a4702df6fa1cfdeabd709149817a42eb2c1e60608201527f2c18cc06c6b2bbf4a51d825aaa442f3516f8b5f4a60397c0efdd38750282135b60808201527feff68f4cdff36497574894658e2807ce0000000000000000000000000000000060a082015260b00190565b604051602081830303815290604052826004815181106115ea576115ea611f54565b60200260200101819052506040516020016116e6907f2c28ce7f0c752e035b68687a8210cceb6068b5034bba9a4a8f2d43e3bbaa887781527f081b33b885370e04cd712601eb860bf821396bdbcd4b089aba0bfe7b1e649dd360208201527f253adba688741303e0b046632b35289a0d5c7648b414375e4d61a855abc5f0c360408201527f095ed894617e232df1779101e1d98e177340cb0fc6283cbc437d79a12290c2f160608201527f14551b8239e68c2fc16a68bbfbfe2140b718ca279d784074743ce1dcdb134ed160808201527f0d0a4d630460957d1c50c0e3a8238cafc3985651674ce03e4b91837da6080de660a082015260c00190565b6040516020818303038152906040528160008151811061170857611708611f54565b6020026020010181905250604051602001611804907f2c28ce7f0c752e035b68687a8210cceb6068b5034bba9a4a8f2d43e3bbaa887781527f081b33b885370e04cd712601eb860bf821396bdbcd4b089aba0bfe7b1e649dd360208201527f253adba688741303e0b046632b35289a0d5c7648b414375e4d61a855abc5f0c360408201527f095ed894617e232df1779101e1d98e177340cb0fc6283cbc437d79a12290c2f160608201527f1a4d9a0e85b1e265f221c163546d61fcf76b301944368abbfbba42dc56a083ba60808201527f2ac800dc9a20a25ca95146c65d6c6cddbb299625907c1a057754f70073ec867560a082015260c00190565b6040516020818303038152906040528160018151811061182657611826611f54565b6020026020010181905250604051602001611922907f2c28ce7f0c752e035b68687a8210cceb6068b5034bba9a4a8f2d43e3bbaa887781527f081b33b885370e04cd712601eb860bf821396bdbcd4b089aba0bfe7b1e649dd360208201527f253adba688741303e0b046632b35289a0d5c7648b414375e4d61a855abc5f0c360408201527f095ed894617e232df1779101e1d98e177340cb0fc6283cbc437d79a12290c2f160608201527f06e2ca23e60db68ff939899c926fd9d76e40d15b17720bd5d60df4fd9725cd0760808201527f288ca12870d4b48f441e6a5b1943c8b9c91f0bd28256ab352e77a61d23124dbb60a082015260c00190565b6040516020818303038152906040528160028151811061194457611944611f54565b6020026020010181905250604051602001611a40907f2c28ce7f0c752e035b68687a8210cceb6068b5034bba9a4a8f2d43e3bbaa887781527f081b33b885370e04cd712601eb860bf821396bdbcd4b089aba0bfe7b1e649dd360208201527f253adba688741303e0b046632b35289a0d5c7648b414375e4d61a855abc5f0c360408201527f095ed894617e232df1779101e1d98e177340cb0fc6283cbc437d79a12290c2f160608201527f1bbb68f54eb8ab7b8276432c152909f11ba49cf685c07fadc1e1ba96c1b579ee60808201527f27002d8fe6bf013b640e1904525645c5f481cc47358330a8b6eb29d019828e3360a082015260c00190565b60405160208183030381529060405281600381518110611a6257611a62611f54565b6020026020010181905250604051602001611b5e907f2c28ce7f0c752e035b68687a8210cceb6068b5034bba9a4a8f2d43e3bbaa887781527f081b33b885370e04cd712601eb860bf821396bdbcd4b089aba0bfe7b1e649dd360208201527f253adba688741303e0b046632b35289a0d5c7648b414375e4d61a855abc5f0c360408201527f095ed894617e232df1779101e1d98e177340cb0fc6283cbc437d79a12290c2f160608201527f046a12b7354767f6ec2e660540eee970333bfa01e458ee4cd066588d3c46329760808201527f2e3c60a8f58a5f89b0926ae265b921bed31fc830056980d70e58db642357af0260a082015260c00190565b60405160208183030381529060405281600481518110611b8057611b80611f54565b6020026020010181905250611bb27f000000000000000000000000000000000000000000000000000000000000000090565b73ffffffffffffffffffffffffffffffffffffffff1663ae2728ea82846040518363ffffffff1660e01b8152600401611bec9291906122d8565b6020604051808303816000875af1158015611c0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c2f9190611f12565b50505050505050505050505050565b6040517fff0000000000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606083901b166021820152603581018390527f1c0bf703a3415cada9785e89e9d70314c3111ae7d8e04f33bb42eb1d264088be605582018190526000916075016040516020818303038152906040528051906020012060001c9150505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638ada066e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611d56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d7a9190611f3b565b600003611e0b57611d896100da565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635b34b9666040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611df157600080fd5b505af1158015611e05573d6000803e3d6000fd5b50505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638ada066e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611e76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e9a9190611f3b565b600103611ea957611d896106b3565b565b60405180608001604052806004906020820280368337509192915050565b60008060408385031215611edc57600080fd5b82359150602083013573ffffffffffffffffffffffffffffffffffffffff81168114611f0757600080fd5b809150509250929050565b600060208284031215611f2457600080fd5b81518015158114611f3457600080fd5b9392505050565b600060208284031215611f4d57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611fdb577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b8060005b6004811015611e05578151845260209384019390910190600101611fe6565b60808101611ce58284611fe2565b60006080828403121561202557600080fd5b82601f83011261203457600080fd5b6040516080810181811067ffffffffffffffff8211171561207e577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405280608084018581111561209357600080fd5b845b818110156120ad578051835260209283019201612095565b509195945050505050565b600081518084526020808501945080840160005b838110156120fe57815173ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016120cc565b509495945050505050565b600081518084526020808501945080840160005b838110156120fe5781518752958201959082019060010161211d565b60408152600061214c60408301856120b8565b828103602084015261215e8185612109565b95945050505050565b600061016080835261217b8184018c6120b8565b9050602083820381850152612190828c612109565b84810360408601528a51808252828c019350908201906000805b828110156121ea57855184835b60048110156121d4578251825291870191908701906001016121b7565b50505094840194608093909301926001016121aa565b50505060ff8a1660608601529250612200915050565b8560808301528460a08301528360c083015261221f60e0830184611fe2565b9998505050505050505050565b600081518084526020808501808196508360051b810191508286016000805b868110156122ca578385038a5282518051808752835b8181101561227c578281018901518882018a01528801612261565b8181111561228c578489838a0101525b509a87019a601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01695909501860194509185019160010161224b565b509298975050505050505050565b6040815260006122eb604083018561222c565b828103602084015261215e818561222c56fea264697066735822122017118abb89403604bc6254e02a485a7597c701e0156649eecdf0cce929f5c2c564736f6c634300080d003360a060405234801561001057600080fd5b506040516106a33803806106a383398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051610611610092600039600081816101df01526102e701526106116000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638653a465116100505780638653a465146100945780638ada066e1461018f578063926a9fbe146101a057600080fd5b80635b34b9661461006c57806367f718a914610076575b600080fd5b6100746101b3565b005b61007e610280565b60405161008b91906103ea565b60405180910390f35b61016a6100a236600461041b565b6040517fff0000000000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606083901b166021820152603581018390527f1c0bf703a3415cada9785e89e9d70314c3111ae7d8e04f33bb42eb1d264088be60558201819052600091607501604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161008b565b60045460405190815260200161008b565b6100746101ae366004610464565b6102bb565b604080517f323030300000000000000000000000000000000000000000000000000000000060208201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163314910160405160208183030381529060405290610268576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025f9190610509565b60405180910390fd5b50600480549060006102798361057c565b9190505550565b610288610379565b6040805160808101918290529060009060049082845b81548152602001906001019080831161029e575050505050905090565b604080517f323030300000000000000000000000000000000000000000000000000000000060208201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163314910160405160208183030381529060405290610367576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025f9190610509565b506103756000826004610397565b5050565b60405180608001604052806004906020820280368337509192915050565b82600481019282156103c5579160200282015b828111156103c55782518255916020019190600101906103aa565b506103d19291506103d5565b5090565b5b808211156103d157600081556001016103d6565b60808101818360005b60048110156104125781518352602092830192909101906001016103f3565b50505092915050565b6000806040838503121561042e57600080fd5b82359150602083013573ffffffffffffffffffffffffffffffffffffffff8116811461045957600080fd5b809150509250929050565b60006080828403121561047657600080fd5b82601f83011261048557600080fd5b6040516080810181811067ffffffffffffffff821117156104cf577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040528060808401858111156104e457600080fd5b845b818110156104fe5780358352602092830192016104e6565b509195945050505050565b600060208083528351808285015260005b818110156105365785810183015185820160400152820161051a565b81811115610548576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036105d4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea264697066735822122035a208f57ffbf9bc458f7567fbad0f8578efb6f2b17ab3944f8e21bee3a520ae64736f6c634300080d0033";

type StateMigrationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StateMigrationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StateMigration__factory extends ContractFactory {
  constructor(...args: StateMigrationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "StateMigration";
  }

  deploy(
    factory_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StateMigration> {
    return super.deploy(factory_, overrides || {}) as Promise<StateMigration>;
  }
  getDeployTransaction(
    factory_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(factory_, overrides || {});
  }
  attach(address: string): StateMigration {
    return super.attach(address) as StateMigration;
  }
  connect(signer: Signer): StateMigration__factory {
    return super.connect(signer) as StateMigration__factory;
  }
  static readonly contractName: "StateMigration";
  public readonly contractName: "StateMigration";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StateMigrationInterface {
    return new utils.Interface(_abi) as StateMigrationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StateMigration {
    return new Contract(address, _abi, signerOrProvider) as StateMigration;
  }
}
