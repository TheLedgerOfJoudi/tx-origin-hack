export const ADDRESS = "0x1a977F0ea4235CDc8dbB177D7e4C674D96aaFD1c"
export const ABI = [
    {
      "inputs": [
        {
          "internalType": "contract Vulnerable",
          "name": "_vulnerable",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "hack",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]