const events = document.querySelectorAll('.event');

events.forEach(event => {
  event.addEventListener('click', () => {
    // Do something when event is clicked
    console.log(`Event ${event.id} clicked`);
  });
});
