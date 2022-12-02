let burger = document.querySelector(".header__burger"),
  menu = document.querySelector(".header__menu"),
  body = document.querySelector("body");

burger.addEventListener("click", function () {
  burger.classList.toggle("header__burger-selected");
  menu.classList.toggle("header__menu-selected");
  body.classList.toggle("lock");
});
