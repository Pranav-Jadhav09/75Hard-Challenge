"use strict";

// Selecting Elements
const jokeEl = document.getElementById("joke");
const jokeImageEl = document.getElementById("jokeImage");
const jokeBtn = document.getElementById("jokeBtn");

let laughSound;

// Accessing The Joke and Image
const getJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();

    // Set joke text
    jokeEl.innerHTML = data.joke;
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
};

// Load the laugh sound
laughSound = new Audio("./Sound/laugh1.mp3");
laughSound.autoplay = false;

// Event on Btn and Default
jokeBtn.addEventListener("click", getJoke);

// Play the laugh sound on button click
jokeBtn.addEventListener("click", () => {
  if (laughSound) {
    laughSound.play();
  }
});

// Initially load a joke
getJoke();
