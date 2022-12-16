import Menu from '../menu/menu';
import Container from '../container';
import './home.css';

export default function Home(action) {
  const home = document.createElement('div');
  const container = Container();
  const overlay = document.createElement('div');
  const greeting = document.createElement('i');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const btn = document.createElement('button');

  home.classList.add('home');
  overlay.classList.add('overlay');

  greeting.textContent = 'Welcome to,';
  h1.textContent = 'Ristorante Gustosa';
  p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  btn.textContent = 'Menu';
  btn.onclick = () => action(Menu());

  container.appendChild(greeting);
  container.appendChild(h1);
  container.appendChild(p);
  container.appendChild(btn);
  home.appendChild(overlay);
  home.appendChild(container);
  
  return home;
}
