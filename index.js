function addPixel() {
  const grid = document.getElementById("grid");
  const pixel = document.createElement("div");
  pixel.addEventListener("mouseover", function (event) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = "#" + randomColor;
  });
  grid.appendChild(pixel);
}

function addMultiplePixels(number) {
  const numberOfPixels = number * number;
  const grid = document.getElementById("grid");
  grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  for (let i = 0; i < numberOfPixels; i++) {
    addPixel();
  }
}

function choosePixels() {
  const number = parseInt(
    prompt("Plase enter NxN size of sketch box (no more than 64)")
  );
  if (number > 64) {
    return;
  }
  addMultiplePixels(number);
}

function chooseColors() {
  const pixels = document.getElementById("grid").getElementsByTagName("div");
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
  }
}

function chooseRandom() {
  const pixels = document.getElementById("grid").getElementsByTagName("div");
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", function (event) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      event.target.style.backgroundColor = "#" + randomColor;
    });
  }
}

function chooseEraser() {
  const pixels = document.getElementById("grid").getElementsByTagName("div");
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "white";
    });
  }
}

addMultiplePixels(16);
const buttonChoose = document.getElementById("choose");
const buttonColors = document.getElementById("colors");
const buttonRandom = document.getElementById("random");
const buttonEraser = document.getElementById("eraser");

buttonRandom.addEventListener("click", () => chooseRandom());
buttonEraser.addEventListener("click", () => chooseEraser());
buttonColors.addEventListener("click", () => chooseColors());
buttonChoose.addEventListener("click", () => choosePixels());
console.log(100 / 8);
