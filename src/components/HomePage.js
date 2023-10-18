import BookList from './BookList';

// Affichage de ma page d'accueil

const HomePage = () => {

    return (
        <div>
            <h1>Page d'accueil</h1>
            <BookList /> {/* Composant de ma liste de livres */}
        </div>
    );
};


export default HomePage;
