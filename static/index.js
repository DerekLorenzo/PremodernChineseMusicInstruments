const links = document.querySelectorAll('.link');
let centerLink = Math.floor(links.length / 2);

function setCenterLink(index) {
  links[centerLink].classList.remove('center');
  centerLink = index;
  links[centerLink].classList.add('center');
}

function moveLinks(event) {
  const direction = event.deltaY > 0 ? 1 : -1;
  const newCenterLink = centerLink + direction;
  if (newCenterLink >= 0 && newCenterLink < links.length) {
    setCenterLink(newCenterLink);
  }
}

links[centerLink].classList.add('center');
document.querySelector('.scroller').addEventListener('wheel', moveLinks);
