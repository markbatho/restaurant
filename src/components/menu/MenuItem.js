export default function MenuItem(title, desc, price) {
  const menuItem = document.createElement('li');
  const titleDiv = document.createElement('div');
  const descDiv = document.createElement('div');
  const priceDiv = document.createElement('div');
  
  titleDiv.textContent = title;
  descDiv.textContent = desc;
  priceDiv.textContent = price;

  menuItem.appendChild(titleDiv);
  menuItem.appendChild(descDiv);
  menuItem.appendChild(priceDiv);
    
  return menuItem;
}
