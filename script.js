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
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

function colorChange() {
    // grid.style.backgroundColor = "red";
}

//Event listener for hovering over grid to change color
container.addEventListener('mouseover', (e) => {
    if (e.target.className == "grid-item") {
        e.target.style.backgroundColor = "black";
    }
});

reset.addEventListener('click', () => {
  let remove = document.querySelector('#container'); //selecting id of container
  while (remove.firstChild) { //while is it true that container has a first child
    remove.removeChild(remove.firstChild); //remove child from container
  }
});