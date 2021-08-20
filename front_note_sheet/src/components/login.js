import React, { useState } from "react";
import "./login.css";
import writing from "../Photos/Logos/writing.jpg";
import axios from "axios";
import { Link, Redirect, useHistory } from "react-router-dom";
import { render } from "@testing-library/react";
function Login(){
    const history=useHistory()
    const[LoginData,SetLoginData]=useState({username:'',password:''});
    const handleChange=(e)=>{
        e.preventDefault();
        const name=e.target.name;
        const value=e.target.value;
        SetLoginData({...LoginData,[name]:value})

    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const data={
            username:LoginData.username,
            password:LoginData.password
        };
      await axios.post("/api/token/",data)
        .then(res => localStorage.setItem('token',res.data.access))
        .catch(()=> alert("Invalid Cred.."));
        localStorage.getItem("token")?
        await axios.get(`/signup/posttt/${LoginData.username}/`,{ headers: {"Authorization":`Bearer ${localStorage.getItem("token")}`} }).then(res=>localStorage.setItem("id",res.data[0].id)):
        history.push("/login");
        history.push("/notes")



    }
    return(
    <div>
    <form id="form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">username</label>
            <input onChange={handleChange} name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" required/>
        </div>
        <button type="submit"  className="btn btn-primary">Submit</button>
</form>
  <img id="writing" src={writing}/>
</div>
    );
}
export default Login;