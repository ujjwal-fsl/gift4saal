document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  // Toggle the "show-menu" class on click
  menuToggle.addEventListener('click', function() {
      menu.classList.toggle('show-menu');
  });
});
