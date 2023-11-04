"use strict";

// Selecting Elements
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// Toggle hover class for left and right sides
const toggleHoverClass = (side) => {
  container.classList.toggle(`hover-${side}`);
};

// Left Side
left.addEventListener("mouseenter", () => {
  toggleHoverClass("left");
});
left.addEventListener("mouseleave", () => {
  toggleHoverClass("left");
});

// Right Side
right.addEventListener("mouseenter", () => {
  toggleHoverClass("right");
});
right.addEventListener("mouseleave", () => {
  toggleHoverClass("right");
});
