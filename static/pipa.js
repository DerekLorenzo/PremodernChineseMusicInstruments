const labels = document.querySelectorAll('.label');

labels.forEach((label) => {
  label.addEventListener('click', () => {
    label.classList.toggle('active');
  });
});
