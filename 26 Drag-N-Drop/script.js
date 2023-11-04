// Select the element to be dragged
const fill = document.querySelector(".fill");

// Select all the potential drop targets
const empties = document.querySelectorAll(".empty");

// Add an event listener for when the drag operation starts
fill.addEventListener("dragstart", dragStart);

// Add an event listener for when the drag operation ends
fill.addEventListener("dragend", dragEnd);

// Loop through all the potential drop targets
for (const empty of empties) {
  // Add an event listener for when an item is dragged over a drop target
  empty.addEventListener("dragover", dragOver);

  // Add an event listener for when an item enters a drop target
  empty.addEventListener("dragenter", dragEnter);

  // Add an event listener for when an item leaves a drop target
  empty.addEventListener("dragleave", dragLeave);

  // Add an event listener for when an item is dropped onto a drop target
  empty.addEventListener("drop", dragDrop);
}

// Function to handle the dragstart event
function dragStart() {
  // Add the "hold" class to the dragged item
  this.classList.add("hold");

  // Add a short delay to make the dragged item invisible (0ms delay)
  setTimeout(() => this.classList.add("invisible"), 0);
}

// Function to handle the dragend event
function dragEnd() {
  // Reset the class of the dragged item to "fill"
  this.className = "fill";
}

// Function to handle the dragover event (prevents the default behavior)
function dragOver(e) {
  e.preventDefault();
}

// Function to handle the dragenter event
function dragEnter(e) {
  e.preventDefault();

  // Add the "hovered" class to the drop target
  this.classList.add("hovered");
}

// Function to handle the dragleave event
function dragLeave() {
  // Reset the class of the drop target to "empty"
  this.className = "empty";
}

// Function to handle the drop event
function dragDrop() {
  // Reset the class of the drop target to "empty"
  this.className = "empty";

  // Append the dragged item to the drop target
  this.appendChild(fill);
}
