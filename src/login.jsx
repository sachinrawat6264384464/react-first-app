import React, { useState } from "react";
import "./login.css"; // styling file

function Login() {
 const [Username,setUsername] = useState("")
 const [password,setpassword] = useState("")
  const onsubmitform =(e)=>{
     e.preventDefault();
      alert(`Email: ${Username}\npassword : ${password}`);
 
 }
  return (
  <>
  <section className="home">
    <div className="login-container">
      <h2>Login yourself</h2>
      <form onSubmit={onsubmitform}  className="login-form">
        <div className="form-group">
          <label>Username</label>
          <input
            type="email"
            placeholder="Enter your Username"
           value={Username}
           onChange={(e)=> setUsername(e.target.value)}
           required
          
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
              value={password}
        onChange={(e)=> setpassword(e.target.value)}
           required
          />
        </div>

        <button type="submit" className="btn">Login</button>
      </form>
    </div>
    <div className="src">
    <input type="search" placeholder="searching" className="inpu"/>
      <button className="search">Search </button>                                                                                                                                                                                                                                                                                   
    </div>
    </section></>
  );
}

export default Login;
