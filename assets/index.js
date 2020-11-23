let menuIcon = document.querySelector('.navbar-burger')
let dropdown = document.querySelector('#nav-links');
menuIcon.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});