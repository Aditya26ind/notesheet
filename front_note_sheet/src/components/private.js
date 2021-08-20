
import { render } from "@testing-library/react";
import axios from "axios";
import  React, { useEffect, useState } from "react";
import { Route ,useHistory,Redirect, useLocation, Switch} from "react-router-dom";
 function  PrivateRoute({component:Component,...rest}){
  const history=useHistory() 
  const [on,setOn]=useState(false);
  const forChecking=async()=>{
  if(localStorage.getItem("token")){
  const check={token:`${localStorage.getItem("token")}`}
  await axios.post(`/api/token/verify/`,check).then(res=>res.data).catch(err=>{localStorage.clear();
  history.push('/login')})}}
  useEffect(()=>{
    forChecking();
},[]);
    return(
        <Route {...rest}  
        render={ props=>
            localStorage.getItem("token") ?
            <Component {...props}/>
              :
            <Redirect to={{pathname:"/login",state:{from:props.location}}}/>
         } />)
}
export default PrivateRoute;