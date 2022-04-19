export default function initMobileMenu() {
  const btnMenu = document.querySelector('[data-menu="hamburguer"]');
  const menuItems = document.querySelector('[data-menu="items"]');

  if(btnMenu) {
    function toggleMenu(event) {
      if(event.type === 'touchstart') event.preventDefault();
      btnMenu.classList.toggle('ativo');
      menuItems.classList.toggle('ativo');

      const ativo = btnMenu.classList.contains('ativo')
      event.currentTarget.setAttribute('aria-expanded', ativo)
      if (ativo) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
      } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
      }
    }

    ['click', 'touchstart'].forEach(eventUser => {
      btnMenu.addEventListener(eventUser, toggleMenu);
    })
  }
}