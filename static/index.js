document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const url = link.dataset.url;
      window.location.href = url;
    });
  });
  