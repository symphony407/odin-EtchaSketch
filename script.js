const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
const resizeButton = document.querySelector("#resize");

function createGrid(size) {
  container.innerHTML = ''; 
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");

    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });

    container.appendChild(cell);
  }
}

// Default grid
createGrid(16);

// ✅ Reset button logic
resetButton.addEventListener("click", () => {
  createGrid(16); // rebuilds fresh grid
});

resizeButton.addEventListener("click", () => {
let newSize = parseInt(prompt("Enter new grid size (max 100):"));
if(newSize > 0 && newSize <= 100){
        createGrid(newSize);
    } else {
        alert("Invalid size. Please enter a number between 1 and 100.");
    }
});
