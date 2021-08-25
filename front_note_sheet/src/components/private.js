
import { render } from "@testing-library/react";
import axios from "axios";
import  React, { useEffect, useState } from "react";
import { Route ,useHistory,Redirect, useLocation, Switch} from "react-router-dom";
 function  PrivateRoute({component:Component,...rest}){
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