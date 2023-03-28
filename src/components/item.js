import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';


function Item({task, handleEdit}){


    function handlePriority(){
        if(task.priority === "HIGH"){
            return "high"
        }else if(task.priority === "MEDIUM"){
            return "medium"
        }else if(task.priority === "LOW"){
            return "low"
        }
    }

    return(
        <>
        <div className="" id="task_item">
            <div className="card" id="task_card" >
                <div className="card-body">
                    <h5 id={handlePriority}>{task.title}</h5>
                    <div>
                        <p id="description"> {task.description}</p>
                    </div>

                    <div id="item_footer">
                        <h6><span>Status:</span> <span>{task.status}</span>  </h6>
                        <h6 id="del_edit" onClick={handleEdit}><span><AiOutlineEdit/></span>  <span><AiOutlineDelete/></span></h6>
                    </div>
                    
                </div>
            </div>
        </div>    
        </>
    )
}

export default Item;