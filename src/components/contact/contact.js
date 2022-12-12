export default function Contact() {
  const contact = document.createElement('div');
  const h1 = document.createElement('h1');

  h1.textContent = 'Contact Page';

  contact.appendChild(h1);

  return contact;
}
