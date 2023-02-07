const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", function () {
  navLinks.classList.toggle("show");
  burger.classList.toggle("change");
});
