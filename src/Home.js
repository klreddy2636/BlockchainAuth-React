// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Blockchain Authentication Example</h1>
      <Link to="/signin">Sign In with MetaMask</Link>
    </div>
  );
};

export default Home;
