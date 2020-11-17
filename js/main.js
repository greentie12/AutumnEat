// Select element function
const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1500,
  distance: "25rem",
  delay: 200,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1500,
  distance: "25rem",
  delay: 400,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1500,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1500,
  distance: "25rem",
  delay: 800,
});
