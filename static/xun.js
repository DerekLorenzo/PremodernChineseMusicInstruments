// Load the audio files
var firstSound = new Audio('sounds/xun-0.mp3');
var secondSound = new Audio('sounds/xun-1.mp3');
var thirdSound = new Audio('sounds/xun-2.mp3');
var fourthSound = new Audio('sounds/xun-3.mp3');
var fifthSound = new Audio('sounds/xun-4.mp3');
var sixthSound = new Audio('sounds/xun-5.mp3');

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
   thirdSound.play();
});

topRightArea.addEventListener('click', function () {
    // Play the center bell sound
    sixthSound.play();
});

middleLeftArea.addEventListener('click', function () {
    // Play the center bell sound
    secondSound.play();
});

middleRightArea.addEventListener('click', function () {
    // Play the center bell sound
    fifthSound.play();
});

bottomLeftArea.addEventListener('click', function () {
    // Play the center bell sound
    firstSound.play();
});

bottomRightArea.addEventListener('click', function () {
    // Play the center bell sound
    fourthSound.play();
});