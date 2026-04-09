const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItems = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

function toggleMenu() {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');

  const expanded = hamburger.classList.contains('active');
  hamburger.setAttribute('aria-expanded', expanded);
}

hamburger.addEventListener('click', toggleMenu);

hamburger.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    toggleMenu();
  }
});

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 250) {
    header.style.backgroundColor = '#1f2937';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
  }
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});