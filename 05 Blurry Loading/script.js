"use strict";

const background = document.querySelector(".background");
const loadingTxt = document.querySelector(".loading-text");

let load = 0;
const interval = setInterval(blurring, 35);

function blurring() {
  load++;

  // If the loading progress (load) is greater than 99 (indicating 100% completion), the clearInterval function is called to stop the interval, preventing further updates.
  if (load > 99) {
    clearInterval(interval);
  }

  // Updates the text content of the loading element to display the current loading percentage.
  loadingTxt.innerText = `${load}%`;

  // Uses the scale function to adjust the opacity of the loading text based on the loading progress (load). As the loading progresses from 0% to 100%, the opacity transitions from 1 (fully visible) to 0 (completely transparent).
  loadingTxt.style.opacity = scale(load, 0, 100, 1, 0);

  // Utilizes the scale function to adjust the blur effect on the background based on the loading progress (load). As the loading progresses from 0% to 100%, the blur effect transitions from 30px to 0px, creating a gradual reduction in blurriness.
  background.style.filter = `blur(${scale(load, 0, 100, 35, 0)}px)`;
}

/*Certainly! The `scale` function takes a number (`num`) and scales it from one range to another. Here's a simple breakdown of how it works:

1. Input and Output Ranges:
- num: The number you want to scale.
- in_min and in_max: The input range within which `num` falls.
- out_min and out_max: The desired output range to scale `num` into.

2. Calculating the Scaled Value:
- (num - in_min): This finds how far `num` is from the lower end of the input range.
- (out_max - out_min): This calculates the total span of the output range.
- (in_max - in_min): This calculates the total span of the input range.

3. Scaling Formula:
- ((num - in_min) * (out_max - out_min)) / (in_max - in_min): This formula scales `num` proportionally based on the spans of the input and output ranges.
- + out_min: This adjusts the scaled value to fit within the desired output range.

In simpler terms, the `scale` function takes a number (`num`) and adjusts it to fit within a different range specified by `out_min` to `out_max`, based on its position in the original range (`in_min` to `in_max`). It's like mapping a value from one range to another, keeping the proportional relationship intact.

*/
const scale = (num, inMin, inMax, outMin, outMax) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
