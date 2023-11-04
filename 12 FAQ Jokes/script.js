"use strict";

// Selecting Elements
const toggles = document.querySelectorAll(".faq-toggle");
let laughSound;

laughSound = new Audio("./sound/laugh1.mp3");
laughSound.autoplay = false;

// Play the laugh sound on button click

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });

  toggle.addEventListener("click", () => {
    if (laughSound) {
      laughSound.play();
    }
  });
});
