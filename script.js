const container = document.querySelector(".container");

function createGrid(size) {
  const container = document.querySelector("#container"); // make sure your HTML has id="container"
  container.innerHTML = ''; 
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    container.appendChild(cell);
  }
}

createGrid(16); // Default grid size 16x16