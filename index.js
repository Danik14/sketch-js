function addPixel() {
  const grid = document.getElementById("grid");
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  grid.appendChild(pixel);
}

function addMultiplePixels() {
  const number = 25;
  for (let i = 0; i < number; i++) {
    addPixel();
  }
}

addMultiplePixels();
console.log(1);
