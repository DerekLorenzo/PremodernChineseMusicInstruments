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
const radius = wheel.clientWidth / 2;

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

  linkElement.addEventListener("mouseenter", () => {
    const activeLink = document.querySelector(".link.active");
    if (activeLink) {
      activeLink.classList.remove("active");
    }
    linkElement.classList.add("active");
  });

  linkElement.addEventListener("click", () => {
    window.location.href = link.link;
  });
});

wheel.addEventListener("mousemove", (event) => {
  const rect = wheel.getBoundingClientRect();
  const x = event.clientX - rect.left - radius;
  const y = event.clientY - rect.top - radius;
  const theta = Math.atan2(y, x);
  let angle = theta * (180 / Math.PI) + 90;
  if (angle < 0) {
    angle = 360 + angle;
  }
  const index = Math.floor(angle / degrees);
  const activeLink = document.querySelector(".link.active");
  if (activeLink) {
    activeLink.classList.remove("active");
  }
  const newActiveLink = wheel.children[index];
  newActiveLink.classList.add("active");
});

wheel.addEventListener("mouseleave", () => {
  const activeLink = document.querySelector(".link.active");
  if (activeLink) {
    activeLink.classList.remove("active");
  }
});