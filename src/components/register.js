import React, { useState } from "react";

function Register() {

    const[username, setUsername] = useState("")
     const[email, setEmail] = useState("")
     const[password,setPassword] = useState("")

     const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            username: username,
            email: email,
            password: password
        };

        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });

        const data = await response.json();

        console.log(data);
     };

    return ( 
        <div>
            <form onSubmit={handleSubmit} className="" >
            <h1 className="">Sign Up</h1>
            <div className="">
            <label>username</label>
            <input className=""
            type="text" 
            placeholder="Enter username" 
            value={username} onChange={(e) => setUsername(e.target.value)} 
            required
            /> 
            </div>
            <div className="">
            <label>email</label>
            <input className="" 
               type="text" 
               placeholder="Enter email" 
               value={email} onChange={(e) => setEmail(e.target.value)} 
               required
            /> 
            </div>
            <div className="">
            <label>password</label>
            <input className="" 
               type="password" 
               placeholder="Enter password" 
               value={password} onChange={(e) => setPassword(e.target.value)} 
               required
            /> 
            </div>
            <button type="submit">sign up</button>
         </form>
        </div>
     );
}

export default Register;