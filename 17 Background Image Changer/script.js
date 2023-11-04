"use strict";

// Selecting Elements
const body = document.body;
const slides = Array.from(document.querySelectorAll(".slide"));
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// Variables
let activeSlide = 0;

// Event - RightBtn

// Here's how it works:

// If activeSlide is less than slides.length - 1, incrementing it by 1 moves to the next slide as expected.

// If activeSlide is equal to slides.length - 1, incrementing it by 1 would make it equal to slides.length, which is one past the last index in the array. Using modulo ensures that it "wraps around" to 0, effectively looping back to the first slide.

rightBtn.addEventListener("click", () => {
  activeSlide = (activeSlide + 1) % slides.length;
  updateSlider();
});

// Event - LeftBtn

// Now, let's look at different scenarios:

// If activeSlide is greater than 0, decrementing it by 1 moves to the previous slide as expected.

// If activeSlide is equal to 0 (the first slide), decrementing it by 1 would make it -1. However, using (activeSlide - 1 + slides.length) ensures that it "wraps around" to the last index (i.e., slides.length - 1), effectively looping back to the last slide.

leftBtn.addEventListener("click", () => {
  activeSlide = (activeSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

// Update Slider
function updateSlider() {
  setBodyBg();
  setActiveSlide();
}

// Background Of Body
function setBodyBg() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// Active Class Toggle
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
}

// Initial setup
updateSlider();
