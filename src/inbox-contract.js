import web3 from "./web3";

const address = '0x259076444b0dfCD892057E0F1e4c1611E045071C';
const abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "initialMessage",
                type: "string"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        constant: true,
        inputs: [],
        name: "message",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "string",
                name: "newMessage",
                type: "string"
            }
        ],
        name: "setMessage",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    }
];

export default new web3.eth.Contract(abi, address);
