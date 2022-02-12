// DOM selectors
const container = document.getElementById("container");
const reset = document.querySelector('.reset');
const removeStyle = document.querySelector('.grid-item');

// Creates a 16x16 row and column
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

//Creates a new grid on the webpage
function makeGrid() {
  let newGrid = prompt("Enter a number for a new grid from 0 - 64!", 16);
  if (newGrid > 0 && newGrid < 64) {
    makeRows(newGrid, newGrid);
  } else {
    do {
      newGrid = prompt("Invalid answer, please enter number from 1 - 64", 16);
    } while (newGrid < 1 || newGrid > 65);
    makeRows(newGrid, newGrid);
  }
}

//Event listener for hovering over grid to change color
container.addEventListener('mouseover', (e) => {
  console.log(e.target.value);
  if (e.target.className == "grid-item") {
    e.target.style.backgroundColor = "black";
  }
});

//Event listener for resetting the grid
reset.addEventListener('click', () => {
  window.location.reload(); //reloads webpage to allow reset of Etch
});

makeGrid();
