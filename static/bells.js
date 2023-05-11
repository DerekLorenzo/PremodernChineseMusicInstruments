const areas = document.querySelectorAll('area');
const audio = document.getElementById('audio');
const indicators = document.querySelectorAll('.indicator');

areas.forEach((area, index) => {
  area.addEventListener('click', () => {
    audio.src = area.dataset.sound;
    audio.play();
    activateIndicator(index);
  });
});

function activateIndicator(index) {
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}
