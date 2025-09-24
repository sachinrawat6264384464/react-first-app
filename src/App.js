import React from "react";
import './App.css';
import Login from './login.jsx'
function App() {
  return (
  <>
 <nav className="nav">
     <h1> Hello web</h1>
       <menu className='menu'>
           <h2>Home</h2>
           <h2>about</h2>
           <h2>contact</h2>
           <h2>Service</h2>
       </menu>
 </nav>
 < Login/>
   </>
   
  );
}

export default App;
