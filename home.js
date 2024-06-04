'use strict'

//menu de gêneros
function toggleGenresMenu() {
  var genresMenu = document.getElementById("genresMenu");
  genresMenu.classList.toggle("hidden");
}

//menu do perfil
document.addEventListener('DOMContentLoaded', function () {
  const profileIcon = document.getElementById('profile-icon');
  const dropdownMenu = document.getElementById('dropdown-menu');

  profileIcon.addEventListener('click', function () {
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
  });

  document.addEventListener('click', function (event) {
    const isClickInside = profileIcon.contains(event.target) || dropdownMenu.contains(event.target);
    if (!isClickInside) {
      dropdownMenu.style.display = 'none';
    }
  });
});