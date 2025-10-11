import React from "react";
import './card.css';
import   "./places";

import { Link } from "react-router-dom";
function Card() {
  
  return (
  
  <div className="app">
  <div className="welcome-section">
    <h1> Welcome to  <span >Dream Destinations</span></h1>
    <h2><div className="scroll-text"><span>INDIA</span></div> </h2>
    <p>Discover breathtaking places, plan your next adventure, and save your favorites — all in one place!</p>
    <Link to="/Places" className="explore-btn">Start Exploring</Link>
  </div>

  
</div>


  );
}

export default Card;
