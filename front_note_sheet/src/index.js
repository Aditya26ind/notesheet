import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPage from "./Pages/Login_page";
import {Route,Switch,BrowserRouter as Router} from "react-router-dom";
import SignupPage from "./Pages/signup_page";
import Noting_page from "./Pages/home_notingPage";
import INdividualNotes from './Pages/allNotesOfUser';
import Editing_page from './Pages/editingPage';
import PrivateRoute from './components/private';

ReactDOM.render(
  <Router>
    <Switch>
    <Route exact path="/"><LoginPage/></Route>
    <Route exact path="/login"><LoginPage/></Route>
    <Route exact path="/signup"><SignupPage/></Route>
    <PrivateRoute exact path="/notes" component={INdividualNotes}/>
    <PrivateRoute exact path="/home" component={Noting_page}/>
    <PrivateRoute path="/login/edit" component={Editing_page}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
