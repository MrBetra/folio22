import { MenuItem } from '~/plugins/menu/menuItem';

export const Menu = function(el) {
  let DOM = {el: el} 
  DOM.menuItems = DOM.el.querySelectorAll('.menu__item');

  let animatableProperties = {
    tx: {previous: 0, current: 0, amt: 0.08},
    ty: {previous: 0, current: 0, amt: 0.08},
    rotation: {previous: 0, current: 0, amt: 0.08}
  }
  
  let menuItems = [];
  
  [...DOM.menuItems].forEach((item, pos) => {
    menuItems.push(new MenuItem(item, pos, animatableProperties))
  });
}