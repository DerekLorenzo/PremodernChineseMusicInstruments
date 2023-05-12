// Get the instrument image element and all label elements
const instrumentImage = document.getElementById("pipa");
const labels = document.querySelectorAll(".label");

// Loop through each label element and add a click event listener to it
labels.forEach((label) => {
  const point = document.createElement("div");
  point.classList.add("point");
  instrumentImage.appendChild(point);

  point.style.top = label.dataset.top + "px";
  point.style.left = label.dataset.left + "px";
  
  point.addEventListener("click", () => {
    if (label.style.display === "none") {
      // Show the label if it's hidden
      label.style.display = "block";
    } else {
      // Hide the label if it's visible
      label.style.display = "none";
    }
  });
});
