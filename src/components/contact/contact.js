import Container from '../container';

import './contact.css';

export default function Contact() {
  const contact = document.createElement('div');
  const container = Container();
  const contactInfo = document.createElement('div');
  const contactForm = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const form = document.createElement('form');
  
  const nameGroup = document.createElement('div');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  
  const emailGroup = document.createElement('div');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  
  const textAreaGroup = document.createElement('div');
  const textAreaLabel = document.createElement('label');
  const textArea = document.createElement('textarea');

  const submit = document.createElement('button');

  contact.classList.add('contact');

  h1.textContent = 'Contact Us';
  p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus nisi, gravida ut magna non, ullamcorper ornare augue. Vivamus porta libero id lacus ultrices dignissim. Aenean ac nunc quis nisl tristique faucibus.';

  nameInput.name = 'name';
  nameInput.id = 'name';
  nameInput.placeholder = 'John Doe';
  nameLabel.htmlFor = 'name';
  nameLabel.textContent = 'Full Name';
  nameGroup.classList.add('form-group');
  nameGroup.appendChild(nameLabel);
  nameGroup.appendChild(nameInput);

  
  emailInput.name = 'email';
  emailInput.id = 'email';
  emailInput.placeholder = 'jdoe@gmail.com';
  emailLabel.htmlFor = 'email';
  emailLabel.textContent = 'E-mail Address';
  emailGroup.classList.add('form-group');
  emailGroup.appendChild(emailLabel);
  emailGroup.appendChild(emailInput);

  textArea.name = 'message';
  textArea.id = 'message';
  textArea.placeholder = 'Enter your message here.';
  textArea.rows = 8;
  textAreaLabel.htmlFor = 'message';
  textAreaLabel.textContent = 'Message';
  textAreaGroup.classList.add('form-group');
  textAreaGroup.appendChild(textAreaLabel);
  textAreaGroup.appendChild(textArea);

  submit.textContent = 'Send Message';

  form.appendChild(nameGroup);
  form.appendChild(emailGroup);
  form.appendChild(textAreaGroup);
  form.appendChild(submit);

  contactInfo.classList.add('contact-info');
  contactForm.classList.add('contact-form');

  contactInfo.appendChild(h1);
  contactInfo.appendChild(p);
  contactForm.appendChild(form);
  container.appendChild(contactInfo);
  container.appendChild(contactForm);
  contact.appendChild(container);

  return contact;
}
