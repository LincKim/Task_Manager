import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Item from "./item";
import Create from "./create";
import { AiOutlineLogout } from 'react-icons/ai';



function Home({handleLogout, user}){

    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState(0)


    useEffect(()=>{
        fetch("")
        .then((r) => r.json())
        .then(setTasks)
    },[])

    function handleSubmit(e){
        e.preventDefault();
        const user_id = sessionStorage.getItem('user_id')
        fetch('',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
              priority,
              user_id
        })
    })
        .then(r=> r.json())
        .then(data=> setTasks(...tasks,data))
    }


    function handleEdit(e){
        e.preventDefault();
        const user_id = sessionStorage.getItem('user_id')
        fetch('',{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
              priority,
              user_id
        })
    })
        .then(r=> r.json())
        .then(data=> setTasks(...tasks,data))
    }
   
    return(
        <>
        <Navbar/>
        <h3 id="logout" onClick={handleLogout}  ><AiOutlineLogout/></h3>


        <div className="" id="selection">
                
            <div className="row">
                <center><h2 id="armySelect"> </h2></center>
            
               {/* contain a form to add a task */}

               <Create handleSubmit={handleSubmit}/>

            </div>
        </div>


        <div className="" id="taskList">
            <center>
                <h4>{`${user.name} Tasks`}</h4>
            </center>
            <div  className="row">

                { tasks.length > 0 ? (
                    tasks.map((task) => <Item task={task} handleEdit={handleEdit}/>)) : null }

                    
            </div> 
        </div>
        </>
    )
}

export default Home;