const links = [
    {
      title: "Guqin",
      image: "PremodernChineseMusicInstruments/images/guqin.jpg",
      link: "guqin.html"
    },
    {
      title: "Bells",
      image: "PremodernChineseMusicInstruments/images/bells.jpg",
      link: "bells.html"
    },
    {
      title: "Pipa",
      image: "PremodernChineseMusicInstruments/images/guqin.jpg",
      link: "pipa.html"
    },
    {
      title: "Dizi",
      image: "PremodernChineseMusicInstruments/images/bells.jpg",
      link: "#"
    },
    {
      title: "Placeholder",
      image: "PremodernChineseMusicInstruments/images/guqin.jpg",
      link: "guqin.html"
    }
];

const wheelContainer = document.querySelector(".wheel-container");

links.forEach((link, index) => {
    const linkElement = document.createElement("a");
    linkElement.href = link.link;

    const imgElement = document.createElement("img");
    imgElement.src = link.image;
    imgElement.alt = link.title;
    imgElement.classList.add("link-image");
    linkElement.appendChild(imgElement);

    const titleElement = document.createElement("span");
    titleElement.textContent = link.title;
    titleElement.classList.add("link-title");
    linkElement.appendChild(titleElement);

    wheelContainer.appendChild(linkElement);
    console.log("done")
});
