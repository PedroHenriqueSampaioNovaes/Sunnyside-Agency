export default function initMobileMenu() {
  const btnMenu = document.querySelector('[data-menu="hamburguer"]');
  const menuItems = document.querySelector('[data-menu="items"]');

  if(btnMenu) {
    function toggleMenu(event) {
      if(event.type === 'touchstart') event.preventDefault();
      btnMenu.classList.toggle('ativo');
      menuItems.classList.toggle('ativo');
    }

    ['click', 'touchstart'].forEach(eventUser => {
      btnMenu.addEventListener(eventUser, toggleMenu);
    })
  }
  
}