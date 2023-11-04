"use strict";

// Selecting Elements
const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

// Called When Site is Live
updateBigCup();

// Small Cups
smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    highLightCup(index);
  });
});

// Highlight The Small Cups
function highLightCup(index) {
  // Start Descreasing once reached max i.e, 8th bottle also when you want to move backward
  if (index === 7 && smallCups[index].classList.contains("full")) {
    index--;
  } else if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  // Toggle 'full' class inside a small cup
  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

// Updating Big Cup
function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${4 - (500 * fullCups) / 1000}L`;
  }
}
