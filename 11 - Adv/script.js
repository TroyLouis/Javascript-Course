"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

console.log(document.head);
const header = document.querySelector(".header");
document.querySelectorAll(".section");
const allSectinos = document.querySelectorAll(".section");

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);
console.log(document.getElementsByClassName("btn"));

//creating and inserting elements
//  .insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie"> Got it!</button>';
header.prepend(message);

document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  message.remove();
  // old method instead of .remove()
  // message.parentElement.removeChild(message);
});

// styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";
console.log(message.style.height);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";
console.log(getComputedStyle(message).height);

const logo = document.querySelector(".nav__logo");
console.log(logo.className);
logo.alt = "Beautiful Minimulist Logo";
console.log(logo.alt);

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  // only works in modern browsers
  section1.scrollIntoView({ behavior: "smooth" });
});

const h1 = document.querySelector("h1");
const alertH1 = (e) => {
  alert("addEventListener: alert");
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
