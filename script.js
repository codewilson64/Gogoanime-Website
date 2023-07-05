const menuToggle = document.querySelector(".menu-toggle");
const hamburgerMenu = document.querySelector(".hamburger-menu");

menuToggle.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("slide");
});
