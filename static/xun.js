// Load the audio files
var sideSound = new Audio('sounds/side-bell.mp3');
var centerSound = new Audio('sounds/center-bell.mp3');

// Get the bell image and clickable areas
var bell = document.getElementById('bell');
var topLeftArea = document.querySelector('.top-left-area');
var topRightArea = document.querySelector('.top-right-area');
var middleLeftArea = document.querySelector('.middle-left-area');
var middleRightArea = document.querySelector('.middle-right-area');
var bottomLeftArea = document.querySelector('.bottom-left-area');
var bottomRightArea = document.querySelector('.bottom-right-area');

topLeftArea.addEventListener('click', function () {
    // Play the center bell sound
    centerSound.play();
});

topRightArea.addEventListener('click', function () {
    // Play the center bell sound
    sideSound.play();
});

middleLeftArea.addEventListener('click', function () {
    // Play the center bell sound
    centerSound.play();
});

middleRightArea.addEventListener('click', function () {
    // Play the center bell sound
    sideSound.play();
});

bottomLeftArea.addEventListener('click', function () {
    // Play the center bell sound
    centerSound.play();
});

bottomRightArea.addEventListener('click', function () {
    // Play the center bell sound
    sideSound.play();
});