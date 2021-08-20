import React from 'react';
import './App.css';
import insta from "./Photos/Logos/insta.png";
import  linkedin from "./Photos/Logos/linkedin.png";
import soloo from "./Photos/Logos/soloo.jpg";
import notepen from "./Photos/Logos/notepen.jpg"
import notesheetlogo from "./Photos/Logos/notesheetlogo.png"

function App({children}) {
 const logout=()=>{
    localStorage.clear();
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#" ><img id="logoTop" src={notesheetlogo}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"/>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav  ml-auto">
    {localStorage.getItem("token")?
    <a id="nav" className="nav-item nav-link" href="/home">HOME</a>:<a></a>}
      {localStorage.getItem("token")?
    <a id="nav"className="nav-item nav-link" href="/notes">NOTES</a>:<a></a>}
      {localStorage.getItem("token") ?
      <a  onClick={logout} className="nav-item nav-link" href="/login">LOGOUT</a>:
      <a id="nav"className="nav-item nav-link" href="/login">LOGIN</a>}
      {localStorage.getItem("token") ===null?
      <a id="nav" className="nav-item nav-link disabled" href="/signup">SIGNUP</a>:
      <a></a>}
    </div>
  </div>
</nav>
<div>{children}</div>
<p id="copyright">&copy;Aditya salabh</p>
<a href="https://www.instagram.com/adityyaa06/?utm_medium=copy_link"><img id="python"src={insta}/></a>
  <a href="https://www.linkedin.com/in/aditya-salabh-831762192"><img id="reacttt"src={linkedin}/></a>
  <a href="https://www.sololearn.com/users/login?returnUrl=%2Fprofile%2F15419186%2F%3Fref%3Dapp"><img id="django"src={soloo}/></a>
  
  </div>
  );
}

export default App;
