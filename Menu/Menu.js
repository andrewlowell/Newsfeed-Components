
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.forEach(el => {
    el.classList.toggle('menu--open');
  });
}

// Start Here: Create a reference to the ".menu" class
const menu = Array.from(document.getElementsByClassName('menu'));
// create a reference to the ".menu-button" class
const menuButton = Array.from(document.getElementsByClassName('menu-button'));
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.forEach(el => {
  el.addEventListener('click', ev => {
    toggleMenu();
  });
});