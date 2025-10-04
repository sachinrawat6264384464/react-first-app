import React from "react";
import './App.css';

import Card from './card.js'
function App() {
  return (
  <>
 <nav className="nav">
     <div className="navicon"><h1> |||</h1></div>
       <menu className='menu'>
           <h2>Home</h2>
           <h2>about</h2>
           <h2>contact</h2>
           <h2>Service</h2>
       </menu>
       <div className="btns">
       <button className="btn1"> SIGNUP  </button>
       <button className="btn2"> SIGN-IN  </button>
       </div>
 </nav>
 
<Card/>
   </>
   
  );
}

export default App;
