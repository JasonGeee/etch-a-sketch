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
  let newGrid = prompt("Enter a number for a new grid from 0 - 100!", 16);
  if (newGrid > 0 && newGrid < 101) {
    makeRows(newGrid, newGrid);
  } else {
      makeGrid();
    }
}

//Event listener for hovering over grid to change color
container.addEventListener('mouseover', (e) => {
  console.log(e.target.value);
  if (e.target.className == "grid-item") {
    e.target.style.backgroundColor = "black";
  }
});

//Event listener for resetting the grid and adding new grid
reset.addEventListener('click', () => {
  let remove = document.querySelector('#container'); //selecting id of container
  while (remove.firstChild) { //while is it true that container has a first child
    remove.removeChild(remove.firstChild); //remove child from container
  }
  makeGrid();
});

makeRows(16, 16); //default grid
