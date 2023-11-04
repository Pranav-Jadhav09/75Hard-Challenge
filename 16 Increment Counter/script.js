"use strict";

// Select Element
const counters = document.querySelectorAll(".counter");

// Increment Count for each counter
counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    // The '+' before counter.getAttribute is used to convert the attribute value to a number. 👉🏻 Type Coercion
    const target = +counter.getAttribute("data-target");
    const currentValue = +counter.innerText;

    // Dividing by 200 is used to make the counter animation smoother and more gradual. By spreading the target value into 200 smaller steps, each step is a smaller increment, creating the appearance of a smoother transition. It's like breaking down a big jump into smaller hops, making it feel less jumpy and more fluid as the counter value increases towards its target.
    const increment = target / 200;

    if (currentValue < target) {
      counter.innerText = `${Math.ceil(currentValue + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
