export default function Menu() {
  const menu = document.createElement('div');
  const h1 = document.createElement('h1');

  h1.textContent = 'Menu Page';

  menu.appendChild(h1);

  return menu;
}
