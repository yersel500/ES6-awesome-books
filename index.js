import {ReplaceBooks} from '../modules/classes.js';
import {inputTitle, inputAuthor, bookList, inputAdd, booksSection, menuList} from '../modules/selectors.js';
import {handleNavigation} from '../modules/nav.js';

const book2 = new ReplaceBooks();

// Create a collection that keeps a list of books (hint: you can use an array of objects for that).
let listBooks = [];

// Function to create object
inputAdd.addEventListener('click', () => {
  const book3 = new ReplaceBooks();
  book3.title = inputTitle.value;
  book3.author = inputAuthor.value;
  book3.id = listBooks.length + 1;
  listBooks.push(book3);
  book3.addBook(listBooks);
  console.log(listBooks);
});


// Removing books
bookList.addEventListener('click', (e) => {
  console.log(listBooks);
  let deleteBook = e.target.getAttribute('data-id');
  deleteBook = parseInt(deleteBook.replace(/\D/g, ''), 10);
  console.log(deleteBook);
  listBooks = listBooks.filter((book) => book.id !== deleteBook);
  book2.deleteBook(listBooks, deleteBook);
});

menuList.forEach((element, index) => {
  element.addEventListener('click', () => {
    handleNavigation(index);
  });
});


// Data is preserved in localStorage
window.onload = function storeData() {
  // Mantain data on the form
  let dataStored = {};
  inputTitle.addEventListener('change', (event) => {
    dataStored = { ...dataStored, inputTitle: event.target.value };
    localStorage.setItem('dataStored', JSON.stringify(dataStored));
  });

  inputAuthor.addEventListener('change', (event) => {
    dataStored = { ...dataStored, inputAuthor: event.target.value };
    localStorage.setItem('dataStored', JSON.stringify(dataStored));
  });

  if (localStorage.getItem('dataStored')) {
    dataStored = JSON.parse(localStorage.getItem('dataStored'));

    inputTitle.value = dataStored.inputTitle;
    inputAuthor.value = dataStored.inputAuthor;
  }

  // Mantain data on the book container
  if (localStorage.getItem('listBooks')) {
    listBooks = JSON.parse(localStorage.getItem('listBooks'));
    listBooks.forEach((book) => {
      const HTMLElement = document.createElement('div');
      HTMLElement.innerHTML = book2.generateContent(book);
      booksSection.appendChild(HTMLElement);
    });
  }
};



