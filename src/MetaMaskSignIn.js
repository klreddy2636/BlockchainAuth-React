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
    <div style={styles.container}>
      <h2 style={styles.title}>Sign In with MetaMask</h2>
      <button style={styles.button} onClick={signInWithMetaMask}>
        Sign In with MetaMask
      </button>
      {address && <p style={styles.address}>Address: {address}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    margin: 'auto',
    marginTop: '50px',
  },
  title: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  address: {
    marginTop: '20px',
    color: '#555',
  },
};

export default MetaMaskSignIn;
