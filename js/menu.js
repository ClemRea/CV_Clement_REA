const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".menu_dropdown");
const menuLien = document.querySelectorAll(".menu_dropdown_lien");

hamburgerButton.addEventListener("click", toggleNav);

menuLien.forEach((link) => {
  // Ajoutez un gestionnaire d'événements aux liens du menu
  link.addEventListener("click", toggleNav);
});

function toggleNav() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}
