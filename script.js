//needed variables
const myLibrary = [];
let bookTitle = document.querySelector('#bookName').value;
let bookAuthor = document.querySelector('#bookAuthor').value;
let bookPages = document.querySelector('#bookPages').value;
let bookRead = document.querySelector('#bookRead').value;
let btnAddBook = document.querySelector('#btnAddBook');
let tableRow = document.querySelector('#table-rows');
let bookForm = document.querySelector('#newBook-form');

btnAddBook.addEventListener('click', pushBook);

myLibrary.push(new Book('Lord of The Rings', 'JKK Tolkien', '1250', 'Yes'));
myLibrary.push(new Book('Battle of the middle earth', 'JKK Tolkien', '1333', 'No'));

//BOOK constructor
function Book(title, author, numPages, read) {
    this.title = title,
    this.author = author,
    this.numPages = numPages,
    this.read = read,
    this.info = () => {
        if (read === true) {
            return `${title} by ${author}, ${numPages} pages, already read`;
        } else {
            return `${title} by ${author}, ${numPages} pages, not read yet`;
        }
    };
}

//pushes the new book to library and renders the updated view
function addBookToLibrary(title, author, numPages, read) {
    myLibrary.push(new Book(title, author, numPages, read));
    render();
}

//calls the function that will push the new book to the library
function pushBook() {
    bookTitle = document.querySelector('#bookName').value;
    bookAuthor = document.querySelector('#bookAuthor').value;
    bookPages = document.querySelector('#bookPages').value;
    bookRead = document.querySelector('#bookRead').value;
    btnAddBook = document.querySelector('#btnAddBook');
    tableRow = document.querySelector('#table-rows');
    bookForm = document.querySelector('#newBook-form');

    if (bookRead === true) {
        addBookToLibrary(bookTitle, bookAuthor, bookPages, "Yes");
    } else {
        addBookToLibrary(bookTitle, bookAuthor, bookPages, "No");
    }
}

//renders the table division view required to show the info
function render() {
    tableRow.innerHTML = null;

    for (let i = 0; i < myLibrary.length; i++) 
    {
        let trBook = document.createElement('tr');

        trBook.innerHTML = `<td>${myLibrary[i].title}</td>
                            <td>${myLibrary[i].author}</td>
                            <td>${myLibrary[i].numPages}</td>
                            <td>${myLibrary[i].read}</td>`;

        tableRow.appendChild(trBook);
    }
    resetForm()
}

function resetForm() {
    bookTitle.value = "teste";
    bookPages.value = "teste";
    bookRead.value = false;
    bookAuthor.value = "teste";
}