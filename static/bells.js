const bellAreas = document.querySelectorAll('.bell-area');
const bellIndicators = [];

for (let i = 0; i < bellAreas.length; i++) {
  const area = bellAreas[i];
  const coords = area.coords.split(',').map(coord => parseInt(coord));
  const x = coords.filter((coord, index) => index % 2 === 0);
  const y = coords.filter((coord, index) => index % 2 !== 0);
  const minX = Math.min(...x);
  const minY = Math.min(...y);
  const maxX = Math.max(...x);
  const maxY = Math.max(...y);
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;

  const indicator = document.createElement('div');
  indicator.classList.add('bell-indicator');
  indicator.style.left = `${centerX}px`;
  indicator.style.top = `${centerY}px`;
  area.parentNode.appendChild(indicator);
  bellIndicators.push(indicator);

  area.addEventListener('click', event => {
    const soundId = event.target.dataset.sound;
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
  });
}
