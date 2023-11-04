"use strict";

// Select Elements
const toggleBtn = document.getElementById("toggle");
const nav = document.getElementById("nav");

// Toggle Class
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
