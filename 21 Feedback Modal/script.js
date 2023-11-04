"use strict";

// Select Elements
const ratingsContainer = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

// Required Variable
let selectedRating = "Satisfied";

// User Selecting the ratings
ratingsContainer.addEventListener("click", (e) => {
  if (e.target.closest(".rating")) {
    // Code to handle rating selection
    removeActive();
    const ratingElement = e.target.closest(".rating");
    if (ratingElement.querySelector("img")) {
      // Code for image-based rating
      ratingElement.classList.add("active");
      selectedRating =
        ratingElement.querySelector("img").nextElementSibling.textContent;
    } else {
      // Code for text-based rating
      ratingElement.classList.add("active");
      selectedRating = ratingElement.textContent;
    }
  }
});

// Onclicking sendBtn Modal Popup
sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Thank You!</strong>
  <br />
  <strong class="mb-20">Feedback: ${selectedRating}</strong>
  <p>We'll use your feedback to improve our customer support.</p>`;
});

// Remove Active Class from Rating Cards
function removeActive() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}
