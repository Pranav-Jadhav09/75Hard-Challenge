// Select all elements with the class "box" and store them in the boxes variable
const boxes = document.querySelectorAll(".box");

// Add an event listener to the window that listens for the scroll event
window.addEventListener("scroll", () => {
  // Calculate the trigger point as 80% of the window's height
  const triggerBottom = window.innerHeight * 0.8;

  // Iterate through each box in the boxes array
  boxes.forEach((box) => {
    // Get the distance from the top of the box to the top of the viewport
    const boxTop = box.getBoundingClientRect().top;

    // Check if the box is near the trigger point
    const shouldShow = boxTop < triggerBottom;

    // Toggle the "show" class for the box based on whether it should be shown or not
    box.classList.toggle("show", shouldShow);
  });
});
