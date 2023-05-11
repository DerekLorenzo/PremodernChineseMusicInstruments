// Add a click event listener to flip the card on click
var flipCard = document.querySelector('.flip-card');
flipCard.addEventListener('click', function() {
  this.classList.toggle('flip');
});
