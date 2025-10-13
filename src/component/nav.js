import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Nav = () => {
  return (
    <nav className="nav">
      <h3>
        VISIT_THE <span className="logo">INDIA</span>
      </h3>

      <div className="menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
        
      </div>
    </nav>
  );
};

export default Nav;
