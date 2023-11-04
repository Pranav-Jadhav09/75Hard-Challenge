"use strict";

// Select Elements
const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const sqCount = 500;

// Function to create and set up each square element.
const createSquare = () => {
  // Create a new square div element.
  const square = document.createElement("div");
  square.classList.add("square");

  // Add event listeners for mouseover and mouseout.
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  // Add touch event for mobile users
  square.addEventListener("touchstart", () => setColor(square));
  square.addEventListener("touchend", () => removeColor(square));

  // Append the square to the container.
  container.appendChild(square);
};

// Function to set the color and box shadow of a square.
const setColor = (element) => {
  const color = getRandomColor();

  // Change the background color and add a box shadow.
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

// Function to remove color and box shadow from a square.
const removeColor = (element) => {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
};

// Function to get a random color from the colors array.
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

// Create and configure the specified number of squares.
for (let i = 0; i < sqCount; i++) {
  createSquare();
}
