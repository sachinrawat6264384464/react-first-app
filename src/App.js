import React from "react";
import Places from './places.js'; // ✅ correct path
import './App.css';
import Card from './card.js';
import FavoritesPage from './FavoritesPage.js'; // ❌ galat tha, ab sahi path diya
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      {/* ✅ Navbar always visible */}
      <nav className="nav">
        
        <menu className='menu'>
          <Link to="/" className="fav-link " style={{ 
     textDecoration:"none",
     color:"white",
     fontSize:"1.5rem",
  fontWeight: "600",
 
    }} >Home</Link>
          <h2>About</h2>
          <Link to="/favorites" className="fav-link " style={{ 
     textDecoration:"none",
     color:"white",
     fontSize:"1.5rem",
  fontWeight: "600",
 
    }} >❤️ Favorites</Link>
          <h2>Service</h2>
        </menu>
        <div className="btns">
          
        </div>
      </nav>

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Card />} /> {/* Home Page */}
        <Route path="/favorites" element={<FavoritesPage />} />
         <Route path="/places" element={<Places />} /> 
        {/* Favorites Page */}
      </Routes>
    </Router>
  );
}

export default App;
