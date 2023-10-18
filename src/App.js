import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import AddBookPage from './components/AddBookPage';


function App() {

  const [books, setBooks] = useState([]);

  const addBookToList = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };
  
  return (
    <BrowserRouter>

      <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ajouter-livre" className="nav-link">
              Ajouter un livre
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" exact element={ <HomePage books={books} onBookAdded={addBookToList} />} />
        <Route path="/ajouter-livre" element={ <AddBookPage onBookAdded={addBookToList} /> } />
      </Routes>

    </BrowserRouter>
  );
}


export default App;
