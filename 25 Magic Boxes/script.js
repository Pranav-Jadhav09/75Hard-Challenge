"use strict";

// Selecting Elements
const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

// Magic Button Event: When the button is clicked, it toggles the "big" class on the boxesContainer
btn.addEventListener("click", () => {
  boxesContainer.classList.toggle("big");
});

// Create Boxes: Generates a 4x4 grid of boxes and adds them to the boxesContainer
const createBoxes = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div"); // Create a new <div> element
      box.classList.add("box"); // Add the "box" class to the div
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`; // Set background position
      boxesContainer.appendChild(box); // Add the box to the boxesContainer
    }
  }
};
createBoxes(); // Call the createBoxes function to populate the grid
