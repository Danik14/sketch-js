function addPixel(number) {
  const grid = document.getElementById("grid");
  const pixel = document.createElement("div");
  const width = 100 / number;
  const height = width;
  pixel.classList.add("pixel");
  pixel.addEventListener("mouseover", function (event) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = "#" + randomColor;
  });
  pixel.style.width = width + "vh";
  pixel.style.height = height + "vh";

  grid.appendChild(pixel);
}

function addMultiplePixels(number) {
  const grid = number * number;
  for (let i = 0; i < grid; i++) {
    addPixel(number);
  }
}

function choosePixels() {
  const number = parseInt(
    prompt("Plase enter NxN size of sketch box (no more than 20)")
  );
  if (number > 40) {
    return;
  }
  addMultiplePixels(number);
}

const button = document.getElementById("btn");
button.addEventListener("click", () => choosePixels());
console.log(100 / 8);
