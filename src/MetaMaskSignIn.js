// src/MetaMaskSignIn.js
import React, { useState } from 'react';
import { useWeb3 } from './useWeb3';

const MetaMaskSignIn = () => {
  const { web3, accounts, contract } = useWeb3();
  const [address, setAddress] = useState('');

  const signInWithMetaMask = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const recoveredAddress = accounts[0];

      // Save user information to the blockchain (dummy example)
      await contract.methods.registerUser(recoveredAddress).send({ from: recoveredAddress });

      setAddress(recoveredAddress);
    } catch (error) {
      console.error('Error signing in with MetaMask:', error);
    }
  };

  return (
    <div>
      <h2>Sign In with MetaMask</h2>
      <button onClick={signInWithMetaMask}>Sign In with MetaMask</button>
      {address && <p>Address: {address}</p>}
    </div>
  );
};

export default MetaMaskSignIn;
