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
}

function createBookCard(book) {
    const bookCard = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const removeBtn = document.createElement("button");

    bookCard.classList.add("book-card");

    bookCard.dataset.cardnumber = myLibrary.length - 1;
    removeBtn.addEventListener("click", () => {
        bookIndex = parseInt(bookCard.dataset.cardnumber);
        myLibrary.splice(bookIndex, 1);
        removeBtn.parentNode.parentNode.removeChild(bookCard);
        // removeBtn.parentElement.remove(bookCard);
    });

    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    read.textContent = book.read;
    removeBtn.textContent = "Remove";

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(removeBtn);
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
