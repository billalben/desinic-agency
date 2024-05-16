"use strict";

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

function setupNavbarToggle() {
  const elemArr = [navCloseBtn, overlay, navOpenBtn];

  for (let i = 0; i < elemArr.length; i++) {
    elemArr[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");

      navbar.classList.contains("active") &&
      overlay.classList.contains("active")
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    });
  }
}

window.addEventListener("resize", function () {
  if (window.innerWidth <= 992) setupNavbarToggle();
});

// Call setupNavbarToggle initially if the window width is already less than or equal to 992px
if (window.innerWidth <= 992) setupNavbarToggle();

/**
 * toggle navbar & overlay when click any navbar-link
 */

function setupNavbarLinks() {
  const navbarLinks = document.querySelectorAll("[data-navbar-link]");

  for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
      navbar.classList.remove("active");
      overlay.classList.remove("active");

      document.body.style.overflow = "auto";
    });
  }
}

window.addEventListener("resize", function () {
  if (window.innerWidth <= 992) setupNavbarLinks();
});

// Call setupNavbarLinks initially if the window width is already less than or equal to 992px
if (window.innerWidth <= 992) setupNavbarLinks();

/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
