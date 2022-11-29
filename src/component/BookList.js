import React from "react";
import { Link } from "react-router-dom";

function  BookList() {
    return(
        <>
        <div>BookLIst page</div>
        <Link to="/books/1">Book 1</Link>
        <Link to="/books/2">Book 2</Link>

        
        </>
    )
}

export default BookList;