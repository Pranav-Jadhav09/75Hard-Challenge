"use strict";

// Selecting Elements
const btn = document.getElementById("button");
const toasts = document.getElementById("toasts");

// Required Messages
const messages = [
  "Random Message One",
  "Random Message Two",
  "Random Message Three",
  "Random Message Four",
];
const types = ["info", "success", "error"];

// Random Message & Type
const getRandomMessage = () =>
  messages[Math.floor(Math.random() * messages.length)];

const getRandomType = () => types[Math.floor(Math.random() * types.length)];

// CreateNotification
const createNotification = (message = null, type = null) => {
  const notify = document.createElement("div");
  notify.classList.add("toast", type ? type : getRandomType());

  notify.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notify);

  setTimeout(() => {
    notify.remove();
  }, 3000);
};

// Event on Show notification btn
btn.addEventListener("click", (event) => {
  event.preventDefault();
  createNotification();
});
