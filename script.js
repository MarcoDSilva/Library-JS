//needed variables
const myLibrary = [];
const bookTitle = document.querySelector('#bookName').value;
const bookAuthor = document.querySelector('#bookAuthor').value;
const bookPages = document.querySelector('#bookPages').value;
const bookRead = document.querySelector('#bookRead').value;
const btnAddBook = document.querySelector('#btnAddBook');
const tableRow = document.querySelector('#table-rows');
const bookForm = document.querySelector('#newBook-form');

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
}

function resetForm() {
    bookTitle.value = "";
    bookPages.value = "";
    bookRead.value = false;
    bookAuthor.value = "";
}