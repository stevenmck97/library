//Create empty array
let myLibrary = [];
const booksContainer = document.querySelector(".display-container");
const addBookBtn = document.querySelector("#addBtn");
const modal = document.getElementById("myModal");
const btn = document.getElementById("modalBtn");
const span = document.getElementsByClassName("close")[0];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBooks() {
    element = myLibrary.length - 1;
    createBookCard(myLibrary[element]);
}

function addBookToLibrary() {
    const bookTitle = document.querySelector("#title").value;
    const bookAuthor = document.querySelector("#author").value;
    const bookPages = document.querySelector("#pages").value;
    const bookRead = document.querySelector("#read").value;
    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);
    displayBooks();
    console.log(myLibrary);
}

function createBookCard(book) {
    const bookCard = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    bookCard.classList.add("book-card");

    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    read.textContent = book.read;

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);

    booksContainer.appendChild(bookCard);
}

btn.addEventListener("click", () => {
    modal.style.display = "block";
});

span.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});
