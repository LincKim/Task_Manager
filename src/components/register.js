import React, { useState } from "react";

function Register(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
     
    const handleSubmit =(e) =>{
        e.preventdefault()
    }


    return (
        <div className="login">
        <form onClick={handleSubmit}className="registertwo">

            <lebel>Name</lebel>

            <input value={name} 
            onChange={(e)=>setName(e.target.value)} 
            type="text" 
            htmlFor="name" 
            placeholder="Full Name"
            id="inputs" 
            />
            <lebel>Email</lebel>

            <input 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            type="email" 
            placeholder="email" 
            id="email" 
            name="inputs"
            />

            <lebel>Password</lebel>

            <input 
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            type="password" 
            placeholder="******" 
            id="inputs"
            />

            <button id="buttons" type="submit">Register</button>

        </form>

        <button  onClick={()=>props.onFormSwitch("Login")}>Already have an account? login</button>

        </div>
    )
}

export default Register;