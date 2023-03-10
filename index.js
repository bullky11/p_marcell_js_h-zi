const images = document.querySelectorAll(".hoverable");

images.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.border = "5px solid lightgreen";
  });
  
  img.addEventListener("mouseout", () => {
    img.style.border = "none";
  });
});
