"use strict";

// Select The Elements
const prev = document.getElementById("prev");
const nxt = document.getElementById("nxt");
const circles = document.querySelectorAll(".circle");
const progressBar = document.getElementById("progress");

let currentActive = 1;

// Next Btn Event
nxt.addEventListener("click", () => {
  currentActive = Math.min(currentActive + 1, circles.length);
  update();
});

// Previous Btn Event
prev.addEventListener("click", () => {
  currentActive = Math.max(currentActive - 1, 1);
  update();
});

// Update Function
function update() {
  // Updating Circle Display
  circles.forEach((circle, index) => {
    index < currentActive
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });

  // Updating Progress Bar
  const actives = document.querySelectorAll(".active");
  progressBar.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  // Enabling/Disabling Btn's
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    nxt.disabled = true;
  } else {
    prev.disabled = false;
    nxt.disabled = false;
  }
}
