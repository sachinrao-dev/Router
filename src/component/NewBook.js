import React from "react";
import { Outlet } from "react-router-dom";

const NewBook = () =>{
    return(
        <div>
            <h1>NewBook</h1>
            <Outlet />
        </div>
    )
}
export default NewBook;