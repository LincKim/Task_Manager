import React, { useState } from "react";


function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
      e.preventDefault();
      const response = await fetch('', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
          
      });
     
      const data = await response.json();
      console.log(data);
  };

  return (
      <div className="login">
       <form onSubmit={handleLogin} className="" >
       <h1 className="">Sign In</h1>
          <div className="">
          <label>Email</label>
          <input className="" 
             type="text" 
             placeholder="Enter email" 
             value={email} onChange={(e) => setEmail(e.target.value)} 
             required
          /> 
          </div>
          <div className="">
          <label>Password</label>
          <input className="" 
             type="password" 
             placeholder="Enter password" 
             value={password} onChange={(e) => setPassword(e.target.value)} 
             required
          /> 
          </div>
          <button>Log in</button>
       </form>
           
      </div>
  );

}


export default Login