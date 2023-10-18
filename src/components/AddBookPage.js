import React, { useState } from 'react';
import { saveBooksToDB } from './IndexedDB';
import { v4 as uuidv4 } from 'uuid'

    const AddBookPage = ( {onBookAdded} ) => {
        const [book, setBook] = useState({ id: uuidv4(), title: '', category: '', description: '' });

        const handleSubmit = (e) => {
            e.preventDefault();
            onBookAdded(book); // Appel à la fonction de la page d'accueil
            saveBooksToDB([book]); // Ajouter le livre à IndexedDB
            setBook({ id: uuidv4(), title: '', category: '', description: '' });
        };

        return (
            <div>
            <h2> Ajouter un livre </h2>

            {/* Formulaire d'ajout de livre */}
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                <label>Titre :</label>
                <input
                    type="text"
                    className="form-control"
                    value={book.title}
                    onChange={(e) => setBook({ ...book, title: e.target.value })}
                />
                </div>

                <div className="form-group">
                <label>Catégorie :</label>
                <select
                className="form-control"
                value={book.category}
                onChange={(e) => setBook({ ...book, category: e.target.value })}>
                <option value=""> Toutes les catégories </option>
                <option value="Romance"> Romance </option>
                <option value="Science-fiction"> Science-fiction </option>
                <option value="Histoire"> Histoire </option>
                <option value="Biographie"> Biographie </option>
                <option value="Roman"> Roman </option>
                <option value="Roman historique"> Roman historique </option>
                <option value="Roman social"> Roman social </option>
                <option value="Roman d'aventure"> Roman d'aventure </option>
                <option value="Série de romans"> Série de romans </option>
                <option value="Poésie"> Poésie </option>
                <option value="Conte philosophique"> Conte philosophique </option>

                </select>
                </div>

                <div className="form-group">
                <label>Description :</label>
                <textarea
                    className="form-control"
                    value={book.description}
                    onChange={(e) => setBook({ ...book, description: e.target.value })}
                />
                </div>

                <button type="submit" className="btn btn-primary"> Ajouter le livre </button>

            </form>
            
            </div>
        );
    };

export default AddBookPage;
