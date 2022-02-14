import {inputTitle, inputAuthor, bookList, booksSection, inputAdd} from '../modules/selectors.js'

// import {listBooks} from '../index.js';

export class ReplaceBooks {
  replacebooks(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  generateContent(details) {
    const template = `
    <div id="book${details.id}">
        <p id="book${details.id}-details">${details.title} by ${details.author}</p>
        <button id="book${details.id}-remove" data-id='${details.id}' class='remove-book'>Remove</button>
    </div>
    `;
    return template;
  }

  addBook(listBooks) {
    booksSection.innerHTML = '';
    listBooks.forEach((book) => {
      const HTMLElement = document.createElement('div');
      HTMLElement.innerHTML = this.generateContent(book);
      booksSection.appendChild(HTMLElement);
    });
    // Updating local storage for books
    localStorage.setItem('listBooks', JSON.stringify(listBooks));
  }

  deleteBook(listBooks) {
    console.log(listBooks);
    booksSection.innerHTML = '';
    listBooks.forEach((book) => {
      const HTMLElement = document.createElement('div');
      HTMLElement.innerHTML = this.generateContent(book);
      booksSection.appendChild(HTMLElement);
    });
    // Updating local storage for books
    localStorage.setItem('listBooks', JSON.stringify(listBooks));
  }
}
