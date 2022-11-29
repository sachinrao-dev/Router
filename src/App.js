import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import BookRoute from "./component/BookRoute";

function App() {
  return (
    <div className="App">
      <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/books">Books</Link></li>
      <li><Link to="/books">Books</Link></li>
      <li><Link to="/books/new">New Books</Link></li>
      </nav>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/books/*" element= {<BookRoute />}>
        </Route>
        {/* <Route path="/books" element= {<BookList />}/>
        <Route path="/books/:id" element= {<Book />}/>
        <Route path="/books/new" element= {< NewBook/>}/> */}


      </Routes>
      
    </div>
  );
}

export default App;
