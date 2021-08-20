import axios from "axios";
import  React, { useState } from "react";
import "./Noting.css";
import {useHistory} from "react-router-dom";
function Noting(){
    const history=useHistory()
    const [notes,setNotes]=useState({note:""})
    const handleInputs=(e)=>{
        e.preventDefault();
        const name=e.target.name
        const value=e.target.value
        setNotes({...notes,[name]:value})
    }
    const handlesubmit=async (e)=>{
        e.preventDefault();
        const data={
            note:notes.note,

        };
        await axios.post(`/loggedIn/${localStorage.getItem("id")}/`,data,{ headers: {"Authorization":`Bearer ${localStorage.getItem("token")}`} })
        .then(res => console.log(res))
        .catch(err => console.log(err));
        e.target.reset()
        history.push("/notes")
    }


    return(
        <form onSubmit={handlesubmit}>
            <input onChange={handleInputs} name='note' type="text" className="noting" id="notingID" placeholder="write your notes here.............."></input>
            <button  type="submit" className="btn btn-outline-primary" id="notebtn">SAVE</button>

        </form>
    )
}
export default Noting;