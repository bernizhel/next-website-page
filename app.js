const menu = document.querySelector('div#mobile-menu');
const menuLinks = document.querySelector('ul.navbar__menu');
menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})
