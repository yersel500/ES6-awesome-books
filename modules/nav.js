import {bookshelf, addBook, contactInfo, newDate, menuList} from '../modules/selectors.js';

// Setting the date
const d = new Date();
newDate.innerHTML = d.toUTCString();

 export function handleNavigation(index) {
  if (menuList[index].innerHTML === 'List') {
    bookshelf.style.display = 'flex';
    addBook.style.display = 'none';
    contactInfo.style.display = 'none';
  }
  if (menuList[index].innerHTML === 'Add new') {
    bookshelf.style.display = 'none';
    addBook.style.display = 'flex';
    contactInfo.style.display = 'none';
  }
  if (menuList[index].innerHTML === 'Contact') {
    bookshelf.style.display = 'none';
    addBook.style.display = 'none';
    contactInfo.style.display = 'flex';
  }
}

