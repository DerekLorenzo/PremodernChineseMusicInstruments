// Get all timeline items
var timelineItems = document.querySelectorAll('.timeline-item');

// Iterate over each item and add click event listener
timelineItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Do something when item is clicked
    console.log('Clicked on timeline item ' + item.id);
  });
});
