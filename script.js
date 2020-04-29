//needed variables
const myLibrary = [];
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
    isRead = () => {
        if (this.read === false) {
            this.read = true;
        } else {
            this.read = false;
        }
    }
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
    bookRead = document.querySelector('#bookRead').checked;
    btnAddBook = document.querySelector('#btnAddBook');
    tableRow = document.querySelector('#table-rows');
    bookForm = document.querySelector('#newBook-form');

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);

}

//renders the table division view required to show the info
function render() {    
    createTableHeaders(tableRow);

    for (let i = 0; i < myLibrary.length; i++) {

        let trBook = document.createElement('tr');
        let tdRead = document.createElement('td');
        let tdBtn = document.createElement('td');

        let btnRemove = document.createElement('button');
        let btnBookRead = document.createElement('button');

        btnRemove.innerText = 'Delete Book';
        btnRemove.setAttribute('data-set', `${myLibrary.indexOf(myLibrary[i])}`);
        btnRemove.addEventListener('click', function() {
            let index = myLibrary.indexOf(this);
            myLibrary.slice(index,1);
            render()
        });

        btnBookRead.addEventListener('click', myLibrary[i].isRead);
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
}

function resetForm() {
    bookForm.reset();
}

function createTableHeaders(tr) {
    tr.innerHTML = null;

    let tableHeaders = document.createElement('tr');
    const headers = ['Title','Author','Pages','Read','Delete'];

    for(let h in headers) {
         tableHeaders.innerHTML += `<th>${headers[h]}</th>`;
    }

    tr.appendChild(tableHeaders);
}
