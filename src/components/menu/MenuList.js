import MenuItem from "./MenuItem";

export default function MenuList(list) {
  const menuList = document.createElement('ul');

  Array.from(list?.list).forEach(item => {
    menuList.appendChild(
      MenuItem(item.title, item.desc, item.price)
    );
  });

  return menuList;
}
