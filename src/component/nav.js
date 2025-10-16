import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <h3>
        VISIT_THE <span className="logo">INDIA</span>
      </h3>

      {/* Hamburger Button */}
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Links */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/favorites" className="nav-link" onClick={() => setMenuOpen(false)}>Favorites</Link>
      </div>
    </nav>
  );
};

export default Nav;
