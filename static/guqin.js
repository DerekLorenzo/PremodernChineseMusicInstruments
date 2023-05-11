const events = document.querySelectorAll('.event');
const timelineIndicator = document.querySelector('.timeline-indicator');

let activeEventIndex = 0;

events.forEach((event, index) => {
  event.addEventListener('click', () => {
    activeEventIndex = index;
    updateActiveEvent();
  });
});

function updateActiveEvent() {
  events.forEach((event, index) => {
    if (index === activeEventIndex) {
      event.classList.add('active');
    } else {
      event.classList.remove('active');
    }
  });
  
  const timelineWidth = timelineIndicator.parentNode.clientWidth;
  const indicatorPosition = activeEventIndex / (events.length - 1) * timelineWidth;
  timelineIndicator.style.transform = `translateX(${indicatorPosition}px)`;
}

updateActiveEvent();
