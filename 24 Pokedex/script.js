"use strict";

// Selecting Elements and Required Variables
const pokeContainer = document.getElementById("container");
const pokemonCount = 100;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

// Object for main types -> Retrive Array of Colors -> Object.keys
const mainTypes = Object.keys(colors);

// Fetch Pokemon for a given count
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i);
  }
};

// Get Pokemon data by ID
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const result = await fetch(url);
  const data = await result.json();
  createPokemonCard(data);
};

// Create a card for a Pokemon
const createPokemonCard = (pokemon) => {
  // Create a new Pokemon element
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  // Capitalize the first letter of the Pokemon name
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, "0");

  // Extract the types of the Pokemon
  const pokemonTypes = pokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokemonTypes.indexOf(type) > -1);
  const color = colors[type];

  // Set the background color based on the Pokemon's type
  pokemonEl.style.backgroundColor = color;

  // Create the HTML content for the Pokemon card
  const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
  `;

  // Set the inner HTML of the Pokemon element
  pokemonEl.innerHTML = pokemonInnerHTML;

  // Append the Pokemon element to the container
  pokeContainer.appendChild(pokemonEl);
};

// Start fetching Pokemon data
fetchPokemons();
