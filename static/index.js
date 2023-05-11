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

links.forEach((link, index) => {
  const linkElement = document.createElement("a");
  linkElement.classList.add("link");
  linkElement.style.transform = `rotate(${degrees * index}deg)`;

  const imgElement = document.createElement("img");
  imgElement.src = link.image;

  const titleElement = document.createElement("p");
  titleElement.classList.add("link-title");
  titleElement.innerText = link.title;

  linkElement.appendChild(imgElement);
  linkElement.appendChild(titleElement);
  wheel.appendChild(linkElement);

  linkElement.addEventListener("click", () => {
    const activeLink = document.querySelector(".link.active");
    if (activeLink) {
      activeLink.classList.remove("active");
    }
    linkElement.classList.add("active");
  });
});

let activeLinkIndex = 0;

function updateWheel() {
  const currentActiveLink = document.querySelector(".link.active");
  if (currentActiveLink) {
    currentActiveLinkIndex = Array.from(wheel.children).indexOf(currentActiveLink);
    activeLinkIndex = currentActiveLinkIndex;
  }

  const nextActiveLinkIndex = (activeLinkIndex + 1) % totalLinks;
  const nextActiveLink = wheel.children[nextActiveLinkIndex];

  for (let i = 0; i < totalLinks; i++) {
    const link = wheel.children[i];
    const linkRotation = link.style.transform.replace("rotate(", "").replace("deg)", "");
    const newRotation = parseInt(linkRotation) - degrees;

    link.style.transform = `rotate(${newRotation}deg)`;

    if (link === nextActiveLink) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  }

  activeLinkIndex = nextActiveLinkIndex;
}

setInterval(updateWheel, 3000);