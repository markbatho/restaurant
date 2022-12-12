import Hero from './hero';

export default function Home() {
  const home = document.createElement('div');
  home.appendChild(Hero());
  return home;
}
