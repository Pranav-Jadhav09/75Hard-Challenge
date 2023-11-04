"use strict";

// Selecting Elements
const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");

// Ready For Input
textArea.focus();

// Trigger Event on user Input
textArea.addEventListener("keyup", (e) => {
  // Create Tag
  createTags(e.target.value);

  // If the user presses Enter, empty the textarea and randomly select a tag
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

// Create The Tags
function createTags(input) {
  // Example
  // const input =
  //   "apple, banana, cherry, date, elderberry, fig, grape, honeydew, ice cream, jujube, kiwi, lemon, mango, nectarine, orange, pineapple, quince, raspberry, strawberry, tangerine, ugli fruit, watermelon, ximenia, yellow passion fruit, zucchini";

  // Splitting the Input
  const tags = input
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");

  // Clearing tagsEl Container
  tagsEl.innerHTML = "";

  // Append Child inside tagsEl
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.textContent = tag;

    // Append child inside tagsEl container
    tagsEl.appendChild(tagEl);
  });
}

// Randomly Select a tag
function randomSelect() {
  const times = 30;

  // Go Through All - blink
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    // Check if a valid tag exists
    if (randomTag) {
      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);

  // Pick The Final One
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

// Pick Random Tag - Math.random()
function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  const randomIndex = Math.floor(Math.random() * tags.length);
  return tags[randomIndex];
}

// Add Highlight Class
function highlightTag(tag) {
  tag.classList.add("highlight");
}

// Remove Highlight Class
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
