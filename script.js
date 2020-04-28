const myLibrary = [];
const bookTitle = document.querySelector('#bookName').value;
const bookAuthor = document.querySelector('#bookAuthor').value;
const bookPages = document.querySelector('#bookPages').value;
const bookRead = document.querySelector('#bookRead').value;
const btnAddBook = document.querySelector('#btnAddBook');

btnAddBook.addEventListener('click', pushBook);

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = () => {
        if (read === true) {
            return `${title} by ${author}, ${numPages} pages, already read`;
        } else {
            return `${title} by ${author}, ${numPages} pages, not read yet`;
        }
    }
}

function addBookToLibrary(title, author, numPages, read) {
    let newBook = new Book(title, author, numPages, read);
    myLibrary.push(newBook);
}

function pushBook() {
    if (bookRead === true) {
        addBookToLibrary(bookTitle, bookAuthor, bookPages, "Yes");
    } else {
        addBookToLibrary(bookTitle, bookAuthor, bookPages, "No");
    }
}
