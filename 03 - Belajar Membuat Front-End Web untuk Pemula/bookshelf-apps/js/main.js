const books = [];
const RENDER_EVENT = 'render-book';
const SAVED_EVENT = 'saved-book';
const STORAGE_KEY = 'BOOKSHELF_APPS';

const addBook = () => {
    const title = document.getElementById('inputBookTitle').value;
    const author = document.getElementById('inputBookAuthor').value;
    const year = document.getElementById('inputBookYear').value;
    const isComplete = document.getElementById('inputBookIsComplete').checked;

    const newBook = {
        id: +new Date(),
        title: title,
        author: author,
        year: year,
        isComplete: isComplete,
    };

    books.push(newBook);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
};


const makeBookElement = (book) => {
    const title = document.createElement('h3');
    title.innerText = book.title;

    const author = document.createElement('p');
    author.innerText = `Penulis: ${book.author}`;

    const year = document.createElement('p');
    year.innerText = `Tahun: ${book.year}`;

    const container = document.createElement('article');
    container.classList.add('book_item');
    container.append(title, author, year);

    if (book.isComplete) {
        const undoButton = document.createElement('button');
        undoButton.classList.add('green');
        undoButton.innerText =  'Belum Selesai Dibaca';

        undoButton.addEventListener('click', () => {
            setBookNotCompleted(book.id);
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.innerText = 'Hapus Buku';

        deleteButton.addEventListener('click', () => {
            removeBook(book.id);
        });


        const actionButton = document.createElement('div');
        actionButton.classList.add('action');
        actionButton.setAttribute('id', book.id);
        actionButton.append(undoButton, deleteButton);


        container.append(actionButton);
    } else {
        const undoButton = document.createElement('button');
        undoButton.classList.add('green');
        undoButton.innerText =  'Selesai Dibaca';

        undoButton.addEventListener('click', () => {
            setBookCompleted(book.id);
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.innerText = 'Hapus Buku';

        deleteButton.addEventListener('click', () => {
            removeBook(book.id);
        })

        const actionButton = document.createElement('div');
        actionButton.classList.add('action');
        actionButton.setAttribute('id', book.id);
        actionButton.append(undoButton, deleteButton);


        container.append(actionButton);
    }

    return container;
};


const findBook = (bookId) => {
    for (const book of books) {
        if (book.id === bookId) {
            return book;
        }
    }
    return null;
}


const findBookIndex = (bookId) => {
    for (const index in books) {
        if (books[index].id === bookId) {
            return index;
        }
    }

    return -1;
}

const setBookCompleted = (bookId) => {
    const book = findBook(bookId);

    if (book == null) return;

    book.isComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}


const setBookNotCompleted = (bookId) => {
    const book = findBook(bookId);

    if (book == null) return;

    book.isComplete = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}


const removeBook = (bookId) => {
    const book = findBookIndex(bookId);

    if (book === -1) return;

    books.splice(book, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}


// Web Storage
const isStorageExist = () => {
    if (typeof (Storage) === undefined) {
        alert('Browser anda tidak mendukung local storage!');
        return false;
    }
    return true;
};

const saveData = () => {
    if (isStorageExist()) {
        const parsed = JSON.stringify(books);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
};

const loadDataFromStorage = () => {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    if (data !== null) {
        for (const book of data) {
            books.push(book);
        }
    }

    document.dispatchEvent(new Event(RENDER_EVENT));
};


document.addEventListener(SAVED_EVENT, () => {
    console.log(localStorage.getItem(STORAGE_KEY));
});


document.addEventListener('DOMContentLoaded', () => {
    const submitForm = document.getElementById('inputBook');

    if (isStorageExist()) {
        loadDataFromStorage();
    }

    submitForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addBook();
    })
});


document.addEventListener(RENDER_EVENT, () => {
    const uncompletedBook = document.getElementById('incompleteBookshelfList');
    uncompletedBook.innerHTML = '';

    const completedBook = document.getElementById('completeBookshelfList');
    completedBook.innerHTML = '';

    for (const book of books) {
        const bookElement = makeBookElement(book);

        if (!book.isComplete) {
            uncompletedBook.append(bookElement);
        } else {
            completedBook.append(bookElement);
        }
    }
});