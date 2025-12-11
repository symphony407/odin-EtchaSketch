const container = document.querySelector(".container");

function createGrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        container.appendChild(cell);
    }
}
createGrid(16); // Default grid size 16x16