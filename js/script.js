// toggle menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// nav add remove class
let nav1 = document.querySelector(".nav1");
let nav2 = document.querySelector(".nav2");
let nav3 = document.querySelector(".nav3");
let nav4 = document.querySelector(".nav4");
let nav5 = document.querySelector(".nav5");

function navLink1() {
  nav1.classList.add("active");
  nav2.classList.remove("active");
  nav3.classList.remove("active");
  nav4.classList.remove("active");
  nav5.classList.remove("active");
}

function navLink2() {
  nav1.classList.remove("active");
  nav2.classList.add("active");
  nav3.classList.remove("active");
  nav4.classList.remove("active");
  nav5.classList.remove("active");
}

function navLink3() {
  nav1.classList.remove("active");
  nav2.classList.remove("active");
  nav3.classList.add("active");
  nav4.classList.remove("active");
  nav5.classList.remove("active");
}

function navLink4() {
  nav1.classList.remove("active");
  nav2.classList.remove("active");
  nav3.classList.remove("active");
  nav4.classList.add("active");
  nav5.classList.remove("active");
}

function navLink5() {
  nav1.classList.remove("active");
  nav2.classList.remove("active");
  nav3.classList.remove("active");
  nav4.classList.remove("active");
  nav5.classList.add("active");
}

// scroll page add class
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var scroll = window.scrollY || document.documentElement.scrollTop;

    var header = document.querySelector("header");
    var logo = document.querySelector(".logo");

    if (scroll > 20) {
      header.classList.add("add-me");
      logo.classList.add("add-size");
    } else {
      header.classList.remove("add-me");
      logo.classList.remove("add-size");
    }
  });
});

// swiper slider js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
