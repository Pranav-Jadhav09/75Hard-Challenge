"use strict";

// Slecting Elements
const body = document.querySelector("body");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const modeBtn = document.querySelector(".mode-switch");

// Check If Mode is already set to "Dark Mode" in localStorage
if (localStorage.getItem("mode") === "Dark Mode") {
  body.classList.add("dark");
  modeBtn.textContent = "Light Mode";
}

// Event on Mode Switch Btn
modeBtn.addEventListener("click", () => {
  // Toggle 'dark' class on body element
  body.classList.toggle("dark");

  // Check if "dark" is currently present in the body
  const isDarkMode = body.classList.contains("dark");

  // set modeSwitch text based on "dark" class presence
  modeBtn.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

  // set localStorage "mode" item based on "dark" class presence
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

// Time Show
const updateTime = () => {
  // Get current time and calculate degrees for clock hands
  let date = new Date();
  let secDeg = (date.getSeconds() / 60) * 360;
  let minDeg = (date.getMinutes() / 60) * 360;
  let hrDeg = (date.getHours() / 12) * 360;

  // Rotate the clock hands to the appropriate degree based on the current time
  secondEl.style.transform = `rotate(${secDeg}deg)`;
  minuteEl.style.transform = `rotate(${minDeg}deg)`;
  hourEl.style.transform = `rotate(${hrDeg}deg)`;
};

// Call function to set hands every second
setInterval(updateTime, 1000);

// Call function on page load
updateTime();

// Explanation of how the degree is set using example 👇🏻
/*

👉🏻 Let's assume the current time is 3:30:45 (3 hours, 30 minutes, and 45 seconds).

✅ Calculation for the Second Hand (secDeg):

- date.getSeconds() would be 45, as it's currently 45 seconds.
- (date.getSeconds() / 60) converts 45 seconds into a fraction of a minute, which is 45/60 or 0.75.
- 0.75 * 360 results in 270 degrees. So, the second hand should be rotated by 270 degrees.


✅ Calculation for the Minute Hand (minDeg):

- date.getMinutes() would be 30, as it's currently 30 minutes.
- (date.getMinutes() / 60) converts 30 minutes into a fraction of an hour, which is 30/60 or 0.5.
- 0.5 * 360 results in 180 degrees. So, the minute hand should be rotated by 180 degrees.


✅ Calculation for the Hour Hand (hrDeg):

- date.getHours() would be 3, as it's currently 3 hours.
- (date.getHours() / 12) converts 3 hours into a fraction of half a day (12 hours), which is 3/12 or 0.25.
- 0.25 * 360 results in 90 degrees. So, the hour hand should be rotated by 90 degrees.

So, based on the time 3:30:45, the analog clock hands should be positioned as follows:

- The second hand should be at 270 degrees.
- The minute hand should be at 180 degrees.
- The hour hand should be at 90 degrees.

👉🏻These rotations would accurately represent the time on the clock face.

*/
