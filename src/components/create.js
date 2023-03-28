import React, {useState} from "react";
import {GrFormAdd} from "react-icons/gr";


function Create({handleSubmit}){

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    return(
        <>
            <form className="" id="create_form" onSubmit={handleSubmit}>
                <div className="">
                    <label className="" for="specificSizeInputName">Title</label>
                     <input type="text" className="form-control" id="specificSizeInputName" placeholder="Title" Value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="">
                    <label className="" for="specificSizeInputGroupUsername">Description</label>
                    <div className="input-group">
                            <input type="text" className="form-control" id="" placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)} />
                    </div>
                    </div>
                    <div className="">
                        <label className="" for="specificSizeSelect">Priority</label>
                        <select className="form-select" id="specificSizeSelect" onChange={(e)=> e.target.value}>
                            <option selected>Priority...</option>
                            <option value="0">Low</option>
                            <option value="1">Medium</option>
                            <option value="2">High</option>
                        </select>
                    </div>
                    <div className="">
                         <button type="submit" className=""><GrFormAdd/></button>
                    </div>
                </form>
        </>
    )
}

export default Create;