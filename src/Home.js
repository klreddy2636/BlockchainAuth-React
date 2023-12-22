// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/infinity" style={styles.logo}>
        Your Logo
      </Link>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/signin" style={styles.link}>
          Sign In
        </Link>
        {/* Add more navigation links if needed */}
      </div>
    </nav>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#333',
  },
  link: {
    padding: '10px 15px',
    fontSize: '18px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '4px',
    textDecoration: 'none',
    margin: '0 10px',
  },
  // Navbar styles
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: '24px',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '15px',
  },
};

export default Home;
