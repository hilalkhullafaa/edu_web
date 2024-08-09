// "use strict";

// // navbar toggle
// const navbar = document.getElementById("navbar");
// const openMenu = document.getElementById("open-menu");
// const closeMenu = document.getElementById("close-menu");
// const overlay = document.querySelector(".overlay");

// openMenu.addEventListener("click", () => {
//   navbar.classList.toggle("active");
//   overlay.classList.toggle("active");
// });

// closeMenu.addEventListener("click", () => {
//   navbar.classList.remove("active");
//   overlay.classList.remove("active");
// });

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggle]");
const navlinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navlinks, "click", closeNavbar);
