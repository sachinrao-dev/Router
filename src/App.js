import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import BookList from "./component/BookList";
import Home from "./component/Home";
import Book from "./component/Book"; 

function App() {
  return (
    <div className="App">
      <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/books">Books</Link></li>
      </nav>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/books" element= {<BookList />}/>
        <Route path="/books/:id" element= {<Book />}/>


      </Routes>
      
    </div>
  );
}

export default App;
