import Container from './components/container';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Menu from './components/menu/menu';

import './style.css';

const app = (content) => {
  let activePage = Home(setActivePage);

  const nav = document.createElement('nav');

  const overlay = document.createElement('div');
  
  const container = Container();
  const navList = Container();

  const brandLink = document.createElement('a');
  const homeLink = document.createElement('a');
  const contactLink = document.createElement('a');
  const menuLink = document.createElement('a');

  overlay.classList.add('overlay');
  navList.classList.add('nav-list');
  container.classList.add('container');

  brandLink.textContent = 'Ristorante Gustosa';
  brandLink.href = '#';
  brandLink.onclick = () => setActivePage(Home(setActivePage));
  brandLink.classList.add('brand');

  homeLink.textContent = 'Home';
  contactLink.textContent = 'Contact';
  menuLink.textContent = 'Menu';

  navList.appendChild(homeLink);
  navList.appendChild(menuLink);
  navList.appendChild(contactLink);

  container.appendChild(brandLink);
  container.appendChild(navList);
  nav.appendChild(container);
  
  Array.from(navList.childNodes).forEach(link => {
    link.addEventListener('click', () => {
      let page;
      switch(link.textContent) {
      case 'Home':
        page = Home(setActivePage);
        break;
      case 'Contact':
        page = Contact();
        break;
      case 'Menu':
        page = Menu();
        break;
      default:
        page = Home(setActivePage);
      }

      setActivePage(page);
    });
  });

  content.appendChild(nav);
  content.appendChild(overlay);
  content.appendChild(activePage);

  function setActivePage(page) {
    content.replaceChild(page, activePage);
    activePage = page;
  }
}

const content = document.getElementById('content');
app(content);
