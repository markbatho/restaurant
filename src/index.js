import Home from './components/home/home';
import Contact from './components/contact/contact';
import Menu from './components/menu/menu';

import './style.css';

const app = (content) => {
  let activePage = Home();

  const nav = document.createElement('nav');
  const homeLink = document.createElement('a');
  const contactLink = document.createElement('a');
  const menuLink = document.createElement('a');

  homeLink.textContent = 'Home';
  contactLink.textContent = 'Contact';
  menuLink.textContent = 'Menu';

  nav.appendChild(homeLink);
  nav.appendChild(contactLink);
  nav.appendChild(menuLink);

  Array.from(nav.childNodes).forEach(link => {
    link.addEventListener('click', () => {
      let page;
      switch(link.textContent) {
      case 'Home':
        page = Home();
        break;
      case 'Contact':
        page = Contact();
        break;
      case 'Menu':
        page = Menu();
        break;
      default:
        page = Home();
      }

      setActivePage(page);
    })
  });

  content.appendChild(nav);
  content.appendChild(activePage);

  function setActivePage(page) {
    content.replaceChild(page, activePage);
    activePage = page;
  }
}

const content = document.getElementById('content');
app(content);
