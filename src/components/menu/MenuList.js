import MenuItem from "./MenuItem";

export default function MenuList(title, list) {
  const h2 = document.createElement('h2');
  const menuList = document.createElement('ul');
  
  h2.textContent = title;

  menuList.appendChild(h2);

  Array.from(list?.list).forEach(item => {
    menuList.appendChild(
      MenuItem(item.title, item.desc, item.price)
    );
  });

  return menuList;
}
