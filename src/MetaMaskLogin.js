// src/MetaMaskLogin.js
import React, { useState } from 'react';
import { useWeb3 } from './useWeb3';

const MetaMaskLogin = () => {
  const { web3, accounts, contract } = useWeb3();
  const [address, setAddress] = useState('');
  console.log(web3);
  console.log(accounts)
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
    <div style={styles.container}>
      <h2 style={styles.title}>Login with MetaMask</h2>
      <button style={styles.button} onClick={loginWithMetaMask}>
        Login with MetaMask
      </button>
      {address && (
        <div style={styles.addressContainer}>
          <p style={styles.welcomeText}>Welcome back!</p>
          <p style={styles.address}>Address: {address}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  },
  button: {
    padding: '10px 15px',
    fontSize: '18px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  addressContainer: {
    marginTop: '20px',
  },
  welcomeText: {
    fontSize: '20px',
    color: '#333',
  },
  address: {
    fontSize: '16px',
    color: '#555',
  },
};

export default MetaMaskLogin; 
