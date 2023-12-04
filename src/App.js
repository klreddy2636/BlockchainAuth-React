// Install the necessary dependencies:
// npm install react react-dom web3 react-router-dom

//exact componenet ={Home} Lin 18
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MetaMaskSignIn from './MetaMaskSignIn';
import MetaMaskLogin from './MetaMaskLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={ <MetaMaskSignIn/> } />
        <Route path="/login" element={ <MetaMaskLogin/> } />
        <Route path="/" element={ <Home/> } />    
      </Routes>
    </Router>
  );
}

export default App;

