//Create empty array
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    const testBook = new Book("test", "yo", "3", "yes");
    myLibrary.push(testBook);
    console.log(myLibrary);
}

addBook();
