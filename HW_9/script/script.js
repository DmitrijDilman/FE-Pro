// сохранение объекта в localStorage
function setObject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

// получение объекта из localStorage
function getObject(key) {
    const object = localStorage.getItem(key);
    return JSON.parse(object);
}

// Массив для хранения книг
let books = [];


function addBook(title, author, year, pages) {
    const id = Date.now(); 
    const newBook = { id, title, author, year, pages };
    books.push(newBook); 
}


const bookForm = document.querySelector("form");
const titleInput = document.querySelector("#bookTitle");
const authorInput = document.querySelector("#bookAuthor");
const yearInput = document.querySelector("#bookYear");
const pagesInput = document.querySelector("#bookPages");



bookForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const title = titleInput.value;
    const author = authorInput.value;
    const year = +yearInput.value;
    const pages = +pagesInput.value;

     addBook(title, author, year, pages);

    setObject("books", books); 

    renderBooks();

   
    bookForm.reset();
});

const bookList = document.querySelector("#bookList");


function renderBooks(booksArray = books) {
    bookList.innerHTML = ""; 

    booksArray.forEach((book) => {
        const item = document.createElement("li");
        item.innerText = `${book.title} - ${book.author}, ${book.year} год, ${book.pages} стр.`;
       
  

    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Удалить";
    deleteButton.addEventListener("click", () => {
        deleteBook(book.id); 
    });

    item.append(deleteButton); 
    bookList.append(item); 
});
}


function deleteBook(bookId) {
    books = books.filter((book) => book.id !== bookId); 

    setObject("books", books); 
    renderBooks(); 
}



const storedBooks = getObject("books");
if (storedBooks) {
    books = storedBooks; 
}


if (books.length > 0) {
    renderBooks();
}


const searchInput = document.querySelector("#searchInput");


searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase(); 

   
    const filteredBooks = books.filter((book) => {
        return book.title.toLowerCase().includes(searchValue);
    });

    
    renderBooks(filteredBooks);
});

// switch case


const sortSelect = document.querySelector("#sortSelect");


sortSelect.addEventListener("change", () => {
    switch (sortSelect.value) {
        case "title":
            books.sort((a, b) => a.title.localeCompare(b.title)); 
            break;
        case "bookAuthor":
            books.sort((a, b) => a.author.localeCompare(b.author)); 
            break;
        case "yearUp":
            books.sort((a, b) => a.year - b.year); 
            break;
        case "yearDown":
            books.sort((a, b) => b.year - a.year); 
            break;
    }

    renderBooks(); 
});