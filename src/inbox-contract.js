import web3 from "./web3";

const address = '0x5eec2A1d8669ADcC43395795d9825a7b65483961';
const abi = [
    {
        constant: false,
        inputs: [{ name: 'newMessage', type: 'string' }],
        name: 'setMessage',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
        signature: '0x368b8772'
    },
    {
        constant: true,
        inputs: [],
        name: 'message',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0xe21f37ce'
    },
    {
        inputs: [{ name: 'initialMessage', type: 'string' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
        constant: undefined,
        signature: 'constructor'
    }
];

export default new web3.eth.Contract(abi, address);
