import "./../assets/styles/style.sass";

// menu adaptativo a movil
const menuToggle = document.querySelector('.menu-toggle');
const screenNav = document.querySelector('.screen');

menuToggle.addEventListener('click', () => {
  screenNav.classList.toggle('open');
});
