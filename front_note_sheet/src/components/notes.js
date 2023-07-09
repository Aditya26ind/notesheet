import  React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory ,Link} from "react-router-dom";
import "./notes.css";
function NotesOfUser(){
    const history=useHistory();
    const [allNotes,setAllNotes]=useState([])
   
    const loadnote=async ()=>{
    await axios.get(`/loggedIn/${localStorage.getItem("id")}/`,{ headers: {"Authorization":`Bearer ${localStorage.getItem("token")}`} })
     .then(res=>console.log(res.data))
     .then((data)=>{
         setAllNotes(data)
     })
    }
    useEffect(()=>{
        loadnote();
   },[]);
   const deleteNote=async (id)=>{
    await axios.delete(`/loggedIn/delete/${localStorage.getItem("id")}/${id}/`,{ headers: {"Authorization":`Bearer ${localStorage.getItem("token")}`} }).then(res=>console.log(res.data))
    window.location.reload()
   }
    return(
        <div>
        {allNotes.map((datas,index)=>{
            return(
            <div key={index} className="noteKaclass">
            <button type="button" id="btn3" className="btn btn-outline-info"></button>
            <p>{datas.note}</p>
            <button type="button" id="btn1" className="btn btn-outline-success"><Link to={{pathname:"/login/edit",state: {id:datas.id,note:datas.note}}}>Edit</Link></button>
            <button onClick={() =>deleteNote(datas.id)} type="button" id="btn2"className="btn btn-outline-danger">Delete</button>
            </div>)
        }
        )}
        </div>
    );
}
export default NotesOfUser;