// Load the audio files
var sideSound = new Audio('sounds/bells-1.mp3');
var centerSound = new Audio('sounds/bells-2.mp3');

// Get the bell image and clickable areas
var bell = document.getElementById('bell');
var sideAreas = document.querySelectorAll('.side-area');
var centerArea = document.querySelector('.center-area');

// Add click event listeners to the clickable areas
sideAreas.forEach(function (area) {
  area.addEventListener('click', function () {
    // Play the side bell sound
    sideSound.play();
  });
});

centerArea.addEventListener('click', function () {
  // Play the center bell sound
  centerSound.play();
});
