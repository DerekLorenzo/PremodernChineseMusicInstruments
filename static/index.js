const links = document.querySelectorAll('.link');

links.forEach((link) => {
    const title = link.querySelector('.link-title');
    const image = link.querySelector('.link-image');

    image.addEventListener('load', () => {
        title.style.top = `${image.offsetHeight - title.offsetHeight}px`;
    });
});

  