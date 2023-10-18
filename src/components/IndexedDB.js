    // Variables de la BDD
    const dbName = 'LibraryDB'; // Nom
    const dbVersion = 1; // Version
    const storeName = 'books'; // Nom du store

    // Ouverture de la BDD
    export function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, dbVersion);

        request.onerror = (event) => {
        reject(event.target.error);
        };

        request.onsuccess = (event) => {
        const db = event.target.result;
        resolve(db);
        };

        // Pour actualiser
        request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore(storeName, { keyPath: 'id' });
        };
    });
    }

    // Fonction pour enregistrer les livres dans la BDD
    export function saveBooksToDB(books) {
    openDB().then((db) => {
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);

        books.forEach((book) => {
        store.add(book);
        });
    });
    }

    // Fonction pour récupérer les livres de la BDD
    export function getBooksFromDB() {
    return new Promise((resolve, reject) => {
        openDB().then((db) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.getAll();

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
        });
    });
    }
