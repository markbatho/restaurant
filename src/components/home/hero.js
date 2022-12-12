export default function Hero() {
  const hero = document.createElement('div');
  const heroDesc = document.createElement('div');
  const h1 = document.createElement('h1');

  h1.textContent = 'Home Page';

  heroDesc.appendChild(h1);
  hero.appendChild(heroDesc);

  return hero;
}
