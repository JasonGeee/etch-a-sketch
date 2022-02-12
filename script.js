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

// Function to create new grid with user input

//Event listener for hovering over grid to change color
container.addEventListener('mouseover', (e) => {
    if (e.target.className == "grid-item") {
        e.target.style.backgroundColor = "black";
    }
});

//Event listener for resetting the grid
reset.addEventListener('click', () => {
  window.location.reload(); //reloads webpage to allow reset of Etch
});


makeRows(16, 16);