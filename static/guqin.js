var timelineItems = document.querySelectorAll('.timeline-item');

function isInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateTimelineItems() {
  for (var i = 0; i < timelineItems.length; i++) {
    if (isInViewport(timelineItems[i])) {
      timelineItems[i].classList.add('animate');
    }
  }
}

animateTimelineItems();

window.addEventListener('scroll', function() {
  animateTimelineItems();
});
