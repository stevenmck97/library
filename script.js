//Create empty array
let myLibrary = [];
const booksContainer = document.querySelector(".display-container");
const addBookBtn = document.querySelector("#addBtn");
const modal = document.getElementById("myModal");
const btn = document.getElementById("modalBtn");
const span = document.getElementsByClassName("close")[0];

class Book {
    constructor(
        title = "Unknown",
        author = "Unknown",
        pages = "0",
        read = "no"
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
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
    const removeBtn = document.createElement("button");
    const readBtn = document.createElement("button");

    bookCard.classList.add("book-card");

    bookCard.dataset.cardnumber = myLibrary.length - 1;
    removeBtn.addEventListener("click", () => {
        bookIndex = parseInt(bookCard.dataset.cardnumber);
        myLibrary.splice(bookIndex, 1);
        removeBtn.parentNode.parentNode.removeChild(bookCard);
        // removeBtn.parentElement.remove(bookCard);
    });

    readBtn.addEventListener("click", () => {
        if (book.read === "yes") {
            book.read = "no";
            read.textContent = "no";
        } else if (book.read === "no") {
            book.read = "yes";
            read.textContent = "yes";
        }
        console.log(myLibrary);
    });

    title.textContent = `Title: "${book.title}"`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages} pages`;
    read.textContent = `Finished Reading: ${book.read}`;
    removeBtn.textContent = "Remove";
    readBtn.textContent = "Read Status";

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(readBtn);
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
