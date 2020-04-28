const myLibrary = [];

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

function addBookToLibrary() {
    
}