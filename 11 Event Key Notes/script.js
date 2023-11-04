"use strict";

// Select Elements
const insert = document.getElementById("insert");

// Logic To Get Key Code
window.addEventListener("keydown", (event) => {
  const { key, keyCode, code } = event;

  insert.innerHTML = `
    <div class="key">${
      key === " " ? "Space" : key
    }<small>event.key</small></div>
    <div class="key">${keyCode}<small>event.keyCode</small></div>
    <div class="key">${code}<small>event.code</small></div>
  `;
});
