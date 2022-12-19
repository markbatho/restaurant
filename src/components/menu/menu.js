import salads from './salads.json';
import pastas from './pastas.json';
import desserts from './desserts.json';
import Container from '../container';
import MenuList from './MenuList';

import './menu.css';

export default function Menu() {
  const menu = document.createElement('div');
  const h1 = document.createElement('h1');
  const container = Container();
  
  const saladList = MenuList('Salads', salads);
  const pastaList = MenuList('Pastas', pastas);
  const dessertList = MenuList('Desserts', desserts);

  h1.textContent = 'Discover Our Menu';

  menu.classList.add('menu');
  container.classList.add('menu-list');

  container.appendChild(h1);
  container.appendChild(saladList);
  container.appendChild(pastaList);
  container.appendChild(dessertList);
  menu.appendChild(container);

  return menu;
}
