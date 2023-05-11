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
    const linkElement = document.createElement("div");
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