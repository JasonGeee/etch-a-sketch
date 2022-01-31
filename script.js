const container = document.getElementById("container");

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
    console.log(e.target);
    if (e.target.className == "grid-item") {
        e.target.style.backgroundColor = "black";
    }
});