const links = [
    {
      title: "Guqin",
      image: "images/guqin.jpg",
      link: "guqin.html"
    },
    {
      title: "Bells",
      image: "images/bells.jpg",
      link: "bells.html"
    },
    {
      title: "Pipa",
      image: "images/guqin.jpg",
      link: "pipa.html"
    },
    {
      title: "Dizi",
      image: "images/bells.jpg",
      link: "dizi.html"
    },
    {
      title: "Placeholder",
      image: "images/guqin.jpg",
      link: "guqin.html"
    }
];

const wheel = document.querySelector(".wheel");
const totalLinks = links.length;
const degrees = 360 / totalLinks;
let currentRotation = 0;

links.forEach((link, index) => {
  const linkElement = document.createElement("a");
  linkElement.classList.add("link");
  linkElement.style.transform = `rotate(${degrees * index}deg)`;

  const imgElement = document.createElement("img");
  imgElement.src = link.image;
  imgElement.classList.add("link-image");

  const titleElement = document.createElement("p");
  titleElement.classList.add("link-title");
  titleElement.innerText = link.title;

  linkElement.appendChild(imgElement);
  linkElement.appendChild(titleElement);
  wheel.appendChild(linkElement);
});

function rotateWheel(deg) {
  currentRotation += deg;
  wheel.style.transform = `rotate(${currentRotation}deg)`;

  const links = document.querySelectorAll(".link");
  links.forEach((link) => {
    const linkRect = link.getBoundingClientRect();
    const wheelRect = wheel.getBoundingClientRect();
    const centerX = wheelRect.left + wheelRect.width / 2;
    const linkCenterX = linkRect.left + linkRect.width / 2;
    const distanceFromCenter = Math.abs(centerX - linkCenterX);
    const maxDistanceFromCenter = wheelRect.width / 2 - linkRect.width / 2;
    const distanceRatio = distanceFromCenter / maxDistanceFromCenter;
    const scale = 1 - distanceRatio * 0.5;
    link.style.transform = `scale(${scale})`;
  });
}

document.addEventListener("mousemove", (event) => {
  const wheelRect = wheel.getBoundingClientRect();
  const centerX = wheelRect.left + wheelRect.width / 2;
  const mouseY = event.clientY;
  
  const degPerPixel = 360 / wheelRect.height;
  const degToRotate = (mouseY - centerX) * degPerPixel;
  
  rotateWheel(degToRotate);
});

document.addEventListener("mouseleave", () => {
  rotateWheel(-currentRotation);
  currentRotation = 0;
});