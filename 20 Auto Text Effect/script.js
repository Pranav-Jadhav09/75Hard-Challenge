"use strict";

// Selecting Elements
const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = `सतयुग में गुस्सा होने पर श्राप दे देते थे....\n
कलियुग में गुस्सा होने पर....\n
ब्लॉक कर देते हैं।\n
डिजिटल श्राप`;

// Used in Functions
let index = 1;
let speed = 300 / speedEl.value;

// Calling when siet is live
writeText();

// Auto Write Effect Function
function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

// Setting Speed
speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
