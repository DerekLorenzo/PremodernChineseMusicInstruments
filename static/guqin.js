const timelineItems = document.querySelectorAll('.timeline-item');

function activateItem() {
  timelineItems.forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight * 0.8 && item.getBoundingClientRect().bottom > window.innerHeight * 0.2) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', activateItem);

activateItem();