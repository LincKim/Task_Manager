import React, { useEffect, useState } from "react";
import Login from "./login";
import Register from "./register";
import Homepage from "./homepage";
import { Route, Routes, Link, Navigate } from 'react-router-dom';


function App() {
  const [user, setUser] = useState(null);

  function signup(user) {
		setUser(user);
	}


  useEffect(() => {
    // auto-login
    fetch("").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogout() {
    fetch("", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="App">
      <div >
        <h3 >
          <Link to="/" id="logo_title">TASK_MANAGER</Link>  
        </h3>

        <button id="auth_logo" >
        <Link to="/auth">CONTINUE</Link>
        </button>

      </div>
      {/* <Home/> */}

      <Routes>
        <Route path="/" element={<Login/>}/>
       <Route path="/home" element={<Homepage handleLogout={handleLogout} user={user}/>}/>
       <Route path="/auth" element={
       
        !user ? <Register signup={signup} /> : <Navigate to="/home"></Navigate>
       }/>
      </Routes>

        
    </div>
  );
}

export default App;
