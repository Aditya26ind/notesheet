import React, { useState,componentDidMount, useEffect } from "react";
import "./signup.css";
import writing from "../Photos/Logos/writing.jpg";
import axios from "axios";
function Signup() {
  const [info, setInfo] = useState({ username: "", email: "", password1: "", password2: "", age: "", dob: "", phone: "" });
  const [err, setErr] = useState("")
  const [err2, setErr2] = useState("")
  const [err3, setErr3] = useState("")
  const [err4, setErr4] = useState("")
  const [err5, setErr5] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)
  const [user, setUser] = useState("")
  const [userPresent, setUserpresent] = useState("")
  const handleInput = e => {
    e.preventDefault();
    const re = /^[0-9\b]+$/;
    var regexp = /^\S*$/;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    const passRegex=/^(?=.*[0-9])(?=.*[a-z])/;
    const name = e.target.name;
    const value = e.target.value;
    
    if (name === "password1" && value.length < 8) {
      setErr("Too Short")
    }
    if (name === "phone" && !re.test(value)) {
      setErr2("Number Only")
      e.target.value = ``
    }
    if (name === "age" && !re.test(value)) {
      setErr5("Number Only")
      e.target.value = ``
    }
     if (name === "username" && !regexp.test(value)) {
      setErr3("No White Space")
      e.target.value = ``
    }
    if (name === "email" && !reg.test(value)) {
      setErr4("@example.com needed")
    }
    else{
      if(name ==="password1" && value.length>=8){
        if(!passRegex.test(value)){
          setErr("Must Contains lowercase char and number")
        }
        else{
        setErr('')}
      }
      if(name ==="username" && regexp.test(value)){
        setErr3('')
      }
      if(name ==="age" && re.test(value)){
        setErr5('')
      }
      if(name ==="email" && reg.test(value)){
        setErr4('')
      }
      if(name ==="phone" && re.test(value)){
        setErr2('')
      }
    }
    setInfo({ ...info, [name]: value })
  };
  const handleformsubmit = async (e) => {
    e.preventDefault();
    if (err!=="" || err2!=="" || err3!=="" || err4!=="" || err5!=="" || info.password1<8 || info.username.length===0 ){
      setUser("Invalid Informations Pls check!!!!!");
    }
    else{
    const data = {
      username: info.username,
      email: info.email,
      password1: info.password1,
      password2: info.password1,
      age: info.age,
      dob: info.dob,
      phone: info.phone
    };
    await axios.post("/signup/posttt/", data)
      .then(res =>{if(res.data.username!==info.username){
        setUserpresent("Username Taken")
      }else{
        setUser("created user wohhooo!!!!")
      }})
      .catch(err => alert(err));
      setInfo({
        username:"",
        password1:"",
        phone:"",
        age:"",
        email:"", 
        dob:""
      });
    
    
}
}

  return (
    <>
    <form onSubmit={handleformsubmit}>
    {err!=="" || err2!=="" || err3!=="" || err4!=="" || err5!=="" || info.password1<8 || info.username.length===0 ?
      <strong id="userCreatedwrong">{user===""?userPresent:user}</strong>:
      <strong></strong>}
      <div id="form2" className="form-group">
        <div className="input-group mb-3" >
          <input name="username" value={info.username} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={handleInput} required />
          <strong>{err3}</strong>
        </div>

        <div className="input-group mb-3">
          <input onChange={handleInput} value={info.email} type="text" className="form-control" placeholder="Recipient's email" aria-label="Recipient's username" name="email" aria-describedby="basic-addon2" required />
          <strong>{err4}</strong>
        </div>
        <div className="input-group mb-3">
          <input minLength="8" value={info.password1} name="password1" onChange={handleInput} type="password" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <strong>{err}</strong>
        </div>
        <div className="input-group mb-3">
          <input name="age" value={info.age} onChange={handleInput} type="text" className="form-control" placeholder="Age" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <strong>{err5}</strong>
        </div>
        <div className="input-group mb-3">
          <input name="dob" value={info.dob} onChange={handleInput} type="text" className="form-control" placeholder="D.O.B" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <strong></strong>
        </div>
        <div className="input-group mb-3">
          <input name="phone" value={info.phone} onChange={handleInput} type="text" className="form-control" placeholder="Phone" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <strong>{err2}</strong>
        </div>
        <button id="submitButton" type="submit" onClick={handleformsubmit} className="btn btn-primary" disabled={isDisabled}>SUBMIT</button>
        <img id="writing2" src={writing} />
      </div>
    </form>
    </>
  )}
export default Signup;