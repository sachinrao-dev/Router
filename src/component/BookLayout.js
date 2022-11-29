import React from "react";
import { Link, Outlet } from "react-router-dom"

function BookLayout() {
    return(
        <div>
             <>
        <div>BookLIst page</div>
        <Link to="/books/1">Book 1</Link>
        <Link to="/books/2">Book 2</Link>
        <Outlet/>

        
        </>
        </div>
    )
}

export default BookLayout;