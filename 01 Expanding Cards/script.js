"use strict";

// Select all elements with the class "panel"
const panels = document.querySelectorAll(".panel");

// Function to toggle the "active" class for a given panel
function togglePanelActive(panel) {
  panels.forEach((p) => p.classList.remove("active"));
  panel.classList.add("active");
}

// Add click event listeners to each panel
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    togglePanelActive(panel);
  });
});
