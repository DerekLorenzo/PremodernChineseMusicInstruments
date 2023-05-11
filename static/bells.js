console.log("loaded bells.js")
const bellAreas = document.querySelectorAll('.bell-area');
const bellIndicators = [];
console.log(bellAreas.length)

window.onload = function () {
    var ImageMap = function (map) {
            var n,
                areas = map.getElementsByTagName('area'),
                len = areas.length,
                coords = [],
                previousWidth = 550;
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
            }
            this.resize = function () {
                var n, m, clen,
                    x = document.body.clientWidth / previousWidth;
                for (n = 0; n < len; n++) {
                    clen = coords[n].length;
                    for (m = 0; m < clen; m++) {
                        coords[n][m] *= x;
                    }
                    areas[n].coords = coords[n].join(',');
                }
                previousWidth = document.body.clientWidth;
                return true;
            };
            window.onresize = this.resize;
        },
        imageMap = new ImageMap(document.getElementById('map_ID'));
    imageMap.resize();
}

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
