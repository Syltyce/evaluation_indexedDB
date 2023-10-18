import React, { useState, useEffect } from 'react';
import { getBooksFromDB } from './IndexedDB';
import fetchedBooks from './booksData';

    // Définition de ma liste de livres
    const BookList = () => {
    const [books, setBooks] = useState([]);

    
    useEffect(() => {
        // Appel de la fonction pour récupérer les livres
        getBooksFromDB()
        .then((data) => {
            setBooks(data.length ? data : fetchedBooks); // Mets à jour les livres
        })
        // Si ça ne marche... message d'erreur
        .catch((error) => {
            console.error('Erreur IndexedDB:', error);
        });
    }, []);

    // Affichage de la liste de livres
    return (
        <div>
        <h2> Liste de Livres </h2>
        {books.map((book) => (

            <div key={book.id} className="card mb-3">
            <div className="row no-gutters">

                <div className="col-md-3">
                <img
                    src= 'https://static.vecteezy.com/ti/vecteur-libre/p3/263280-livre-ouvert-vectoriel.jpg'
                    alt={book.title}
                    className="card-img"
                />
                </div>

                <div className="col-md-9">
                <div className="card-body">

                    <h5 className="card-title">{book.title}</h5>

                    <p className="card-text">
                    <strong>Catégorie :</strong> {book.category}
                    </p>
                    <p className="card-text">
                    <strong>Description :</strong> {book.description}
                    </p>

                    <div className="float-right">
                    <button className="btn btn-primary mr-2"> Éditer </button>
                    <button className="btn btn-danger"> Supprimer </button>
                    </div>

                </div>
                </div>

            </div>
            </div>

        ))}

        </div>
        
    );
    };

export default BookList;
