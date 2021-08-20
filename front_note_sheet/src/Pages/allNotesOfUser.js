import  React, { useState } from "react";
import axios from "axios";
import App from "../App";
import NotesOfUser from "../components/notes";

function INdividualNotes(){
    return(
    <App>
        <NotesOfUser/>
    </App>)
}
export default INdividualNotes;