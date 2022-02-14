import {
  bookshelf, addBook, contactInfo, menuList,
} from './selectors.js';

export default function handleNavigation(index) {
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
