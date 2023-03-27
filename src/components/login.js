import React, { useState } from "react";


function Login(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);
   
    const login = (e) => {
      e.preventDefault();
      console.log(name, email, password);
      const userData = {
        name,
        email,
        password,
      };
      localStorage.setItem('token-info', JSON.stringify(userData));
      setIsLoggedin(true);
      setName('');
      setEmail('');
      setPassword('');
    };
   
    const logout = () => {
      localStorage.removeItem('token-info');
      setIsLoggedin(false);
    };
   
    return (
      <>
        <div  className="login">
           
          {!isLoggedin ? (
            
              <form action="" onClick={login} className="login">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Name"
                  id="inputs"
                />
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  id="inputs"
                />
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  id="inputs"
                />
                <button  id="buttons"type="submit" >
                  login
                </button>
              </form>
             
          ) : (
            
              <button onClickCapture={logout}>logout</button>
              
          )}
        </div>
        <button onClick={()=>props.onFormSwitch("Register")}>Dont have an account? Register</button>
      </>
    );
  


}


export default Login