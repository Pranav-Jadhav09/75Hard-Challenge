"use strict";

// Selecting Elements
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound.toUpperCase();

  btn.addEventListener("click", () => {
    stop();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stop() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
