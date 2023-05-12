// Get all the clickable points on the image
const instrumentPoints = document.querySelectorAll('.instrument-point');

// Loop through the clickable points and add a click event listener to each of them
instrumentPoints.forEach(point => {
  point.addEventListener('click', () => {
    // Get the corresponding label element for the clicked point
    const label = document.getElementById(point.dataset.label);

    // If the label element is hidden, show it
    if (label.style.display === 'none') {
      label.style.display = 'block';
    }
    // Otherwise, hide it
    else {
      label.style.display = 'none';
    }
  });
});