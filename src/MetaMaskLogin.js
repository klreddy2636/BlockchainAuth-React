// src/MetaMaskLogin.js
import React, { useState } from 'react';
import { useWeb3 } from './useWeb3';

const MetaMaskLogin = () => {
  const { web3, accounts, contract } = useWeb3();
  const [address, setAddress] = useState('');

  const loginWithMetaMask = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const recoveredAddress = accounts[0];

      // Check if the user exists on the blockchain (dummy example)
      const isUserRegistered = await contract.methods.isUserRegistered(recoveredAddress).call();

      if (isUserRegistered) {
        setAddress(recoveredAddress);
      } else {
        alert('User not registered. Please sign up.');
      }
    } catch (error) {
      console.error('Error logging in with MetaMask:', error);
    }
  };

  return (
    <div>
      <h2>Login with MetaMask</h2>
      <button onClick={loginWithMetaMask}>Login with MetaMask</button>
      {address && <p>Welcome back! Address: {address}</p>}
    </div>
  );
};

export default MetaMaskLogin; 
