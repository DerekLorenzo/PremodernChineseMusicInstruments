const links = document.querySelectorAll('.link');
let centerLink = Math.floor(links.length / 2);

function setCenterLink(index) {
  links[centerLink].classList.remove('center');
  centerLink = index;
  links[centerLink].classList.add('center');
}

function moveLinks(event) {
  const containerWidth = event.currentTarget.offsetWidth;
  const mousePosition = event.clientX - event.currentTarget.offsetLeft;
  const linkWidth = links[0].offsetWidth;
  const linkCenter = linkWidth / 2;

  let newCenterLink = centerLink;
  if (mousePosition < centerLink * linkWidth + linkCenter) {
    newCenterLink--;
  } else if (mousePosition > centerLink * linkWidth + linkCenter) {
    newCenterLink++;
  }

  if (newCenterLink >= 0 && newCenterLink < links.length) {
    setCenterLink(newCenterLink);
  }
}

links[centerLink].classList.add('center');
document.querySelector('.container').addEventListener('mousemove', moveLinks);
