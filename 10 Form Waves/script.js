"use strict";

const labels = document.querySelectorAll(".form-grp label");

// Typewriter Effect on the labels
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

// Validation and redirect
function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if email and password are filled
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Email validation (simple check for presence of @)
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }

  // Password validation (at least 6 characters)
  if (password.length < 6) {
    alert("Password should be at least 6 characters.");
    return;
  }

  // If validation passes, redirect to the desired URL
  window.location.href = "https://jrpranav.com";
}

// Example User Input -

// Email: example@example.com
// Password: password123
