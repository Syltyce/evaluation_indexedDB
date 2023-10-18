import React from 'react';

    // Contenu de l'objet Livre
    const Book = ({ title, category, description }) => {
    return (
        <div>
        <h3>{title}</h3>
        <p>Catégorie : {category}</p>
        <p>Description : {description}</p>
        </div>
    );
    };

export default Book;
