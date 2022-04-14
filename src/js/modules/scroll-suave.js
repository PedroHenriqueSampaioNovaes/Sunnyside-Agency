export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="items"] li a[href^="#"]');
  const seta = document.querySelector('.seta');
  
  if(linksInternos) {
    function scrollSuave(event) {
      event.preventDefault();
  
      const section = document.querySelector(this.getAttribute('href'));
      if(section) section.scrollIntoView({behavior: "smooth", block: "start"});
    }
  
    ['click', 'touchstart'].forEach(eventUser => {
      linksInternos.forEach(link => {
        link.addEventListener(eventUser, scrollSuave);
      })
      seta.addEventListener(eventUser, scrollSuave);
    })
  }
}