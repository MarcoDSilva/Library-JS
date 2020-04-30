//needed variables
let myLibrary = [];
let bookTitle = document.querySelector('#bookName').value;
let bookAuthor = document.querySelector('#bookAuthor').value;
let bookPages = document.querySelector('#bookPages').value;
let bookRead = document.querySelector('#bookRead').checked;
let btnAddBook = document.querySelector('#btnAddBook');
let tableRow = document.querySelector('#table-rows');
let bookForm = document.querySelector('#newBook-form');

btnAddBook.addEventListener('click', pushBook);

//BOOK constructor
function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;

    Book.prototype.isRead = function () {
        this.read = !this.read;
        return;
    };
}


//pushes the new book to library and renders the updated view
function addBookToLibrary(title, author, numPages, read) {
    myLibrary.push(new Book(title, author, numPages, read));
    setLocalStorage();
    render();
}

//calls the function that will push the new book to the library
function pushBook() {
    bookTitle = document.querySelector('#bookName').value;
    bookAuthor = document.querySelector('#bookAuthor').value;
    bookPages = document.querySelector('#bookPages').value;
    bookRead = document.querySelector('#bookRead').checked;

    if (bookTitle === '' || bookAuthor === '' || bookPages === '') {
        alert('Please fill all fields.');
    } else {
        addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
    }
}


//renders the table division view required to show the info
function render() {

    //checking localStorage
    if (!localStorage.getItem('library')) {
        setLocalStorage();
    }

    createTableHeaders(tableRow);
    getLocalStorage();

    for (let i = 0; i < myLibrary.length; i++) {

        let trBook = document.createElement('tr');
        let tdRead = document.createElement('td');
        let tdBtn = document.createElement('td');

        let btnRemove = document.createElement('button');
        let btnBookRead = document.createElement('button');

        btnRemove.innerText = 'Delete Book';
        btnRemove.setAttribute('data-index', `${myLibrary.indexOf(myLibrary[i])}`);
        btnRemove.addEventListener('click', deleteBook);

        btnBookRead.addEventListener('click', function () {
            myLibrary[i].isRead;
            render();
        });

        btnBookRead.innerText = myLibrary[i].read;

        tdBtn.appendChild(btnRemove);
        tdRead.appendChild(btnBookRead);

        trBook.innerHTML = `<td>${myLibrary[i].title}</td>
                            <td>${myLibrary[i].author}</td>
                            <td>${myLibrary[i].numPages}</td>`;

        trBook.appendChild(tdRead);
        trBook.appendChild(tdBtn);
        tableRow.appendChild(trBook);
    }
    resetForm();
}

//resets the formulary after the book is added to the array
function resetForm() {
    bookForm.reset();
}

//creates the headers to be used on the table
function createTableHeaders(tr) {
    tr.innerHTML = null;

    let tableHeaders = document.createElement('tr');
    const headers = ['Title', 'Author', 'Pages', 'Read', 'Delete'];

    for (let h in headers) {
        tableHeaders.innerHTML += `<th>${headers[h]}</th>`;
    }

    tr.appendChild(tableHeaders);
}

//deletes the book and updates the localStorage
function deleteBook() {
    let index = this.getAttribute('data-index');
    myLibrary.splice(index, 1);
    setLocalStorage();
    render()
}

//setting the localStorage 
function setLocalStorage() {
    localStorage.setItem('library', JSON.stringify(myLibrary));
}

function getLocalStorage() {
    myLibrary = JSON.parse(localStorage.getItem('library'));
}

render();