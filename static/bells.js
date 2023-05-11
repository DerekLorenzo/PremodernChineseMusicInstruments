console.log("loaded bells.js")
const bellAreas = document.querySelectorAll('.bell-area');
const bellIndicators = [];
console.log(bellAreas.length)

for (let i = 0; i < bellAreas.length; i++) {
  const area = bellAreas[i];
  const coords = area.coords.split(',').map(coord => parseInt(coord));
  const x = coords[0];
  const y = coords[1];

  const indicator = document.createElement('div');
  indicator.classList.add('bell-indicator');
  indicator.style.left = `${x}px`;
  indicator.style.top = `${y}px`;
  area.parentNode.appendChild(indicator);
  bellIndicators.push(indicator);

  area.addEventListener('click', event => {
    const soundId = event.target.dataset.sound;
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
  });
  console.log("done")
}
