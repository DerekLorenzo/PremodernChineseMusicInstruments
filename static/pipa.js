// Get the label and overlay elements
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const overlay = document.getElementById('overlay');

// Add event listeners to the overlay
overlay.addEventListener('mouseover', () => {
  // Show the appropriate label based on which part of the overlay was clicked
  if (event.offsetX < overlay.offsetWidth / 2) {
    label1.classList.add('active');
  } else {
    label2.classList.add('active');
  }
});

overlay.addEventListener('mouseout', () => {
  // Hide both labels when the mouse moves away from the overlay
  label1.classList.remove('active');
  label2.classList.remove('active');
});