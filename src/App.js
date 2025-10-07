import React from "react";
import './App.css';
import Card from './card.js';
import FavoritesPage from './FavoritesPage.js'; // ❌ galat tha, ab sahi path diya
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* ✅ Navbar always visible */}
      <nav className="nav">
        <div className="navicon"><h1> |||</h1></div>
        <menu className='menu'>
          <h2>Home</h2>
          <h2>About</h2>
          <Link to="/favorites" className="fav-link " style={{ 
     textDecoration:"none",
     color:"white",
     
  fontWeight: "600",
 
    }} >❤️ Favorites</Link>
          <h2>Service</h2>
        </menu>
        <div className="btns">
          <button className="btn1">SIGNUP</button>
          <button className="btn2">SIGN-IN</button>
        </div>
      </nav>

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Card />} /> {/* Home Page */}
        <Route path="/favorites" element={<FavoritesPage />} /> {/* Favorites Page */}
      </Routes>
    </Router>
  );
}

export default App;
