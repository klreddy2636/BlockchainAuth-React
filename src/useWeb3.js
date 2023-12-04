// src/useWeb3.js
import { useState, useEffect } from 'react';
import Web3 from 'web3';
const contractAddress="0x622568061101B748d9f77f191DD6dC4D7F6610c3"  // contract address
const abiString = `

    [
        {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
              }
            ],
            "name": "UserRegistered",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "registeredUsers",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "registerUser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "user",
                "type": "address"
              }
            ],
            "name": "isUserRegistered",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
    ]`;
const contractAbi = JSON.parse(abiString);//  ABI


const useWeb3 = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          setWeb3(web3Instance);

          const accounts = await web3Instance.eth.getAccounts();
          setAccounts(accounts);
          console.log('Type of contractAbi:', Array.isArray(contractAbi) ? 'Array' : 'Not an Array');
          console.log('Parsed ABI:', contractAbi); // Log ABI for debugging

          const contractInstance = new web3Instance.eth.Contract(contractAbi, contractAddress);
          setContract(contractInstance);
        } catch (error) {
          console.error('Error initializing Web3:', error);
        }
      } else {
        console.error('MetaMask not detected.');
      }
    };

    initWeb3();
  }, []);

  return { web3, accounts, contract };
};

export { useWeb3 };
