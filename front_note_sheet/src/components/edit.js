import axios from "axios";
import  React, { useState } from "react";
import { Link, Redirect, useLocation,useHistory } from "react-router-dom";
import "./edit.css";
function Editing(){
    const location=useLocation()
    const history=useHistory()
    const [notes,setNotes]=useState({note:""})
    const handleInputs=(e)=>{
        e.preventDefault();
        const name=e.target.name
        const value=e.target.value
        setNotes({...notes,[name]:value})

    };
    const handlesubmit=async (e)=>{
        e.preventDefault();
        const data={
            note:notes.note,
        };
        // console.log(location.state.id,location.state.note)
        await axios.post(`/loggedIn/update/1/${location.state.id}/`,data,{ headers: {"Authorization":`Bearer ${localStorage.getItem("token")}`} });
        history.push("/notes")
    }
    return(
        <form onSubmit={handlesubmit} id="editForm">
            <input  onChange={handleInputs} defaultValue={location.state.note} name='note' type="text" className="noting" id="notingID" placeholder="write your notes here.............."></input>
            <button type="submit" className="btn btn-outline-primary" id="notebtn">SAVE</button>

        </form>
    )
}
export default Editing;