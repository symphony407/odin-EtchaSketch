const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
const resizeButton = document.querySelector("#resize");
const eraserButton = document.querySelector("#eraser");
const colorButton = document.querySelector("#color");

// Mode flags
let eraserOn = false;
let colorMode = false;
let shadingMode = true; // default to shading mode

function createGrid(size) {
  container.innerHTML = ''; 
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");

    cell.addEventListener("mouseover", () => {
      if (eraserOn) {
        // Eraser clears the cell
        cell.style.backgroundColor = "";
      } else if (colorMode) {
        // Random colors
        cell.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } else if (shadingMode) {
        // Shading effect
        let currentColor = cell.style.backgroundColor;
        if (!currentColor) {
          cell.style.backgroundColor = "rgba(0,0,0,0.1)";
        } else {
          let opacity = parseFloat(currentColor.split(",")[3]) || 0.1;
          if (opacity < 1) {
            opacity += 0.1;
            cell.style.backgroundColor = `rgba(0,0,0,${opacity})`;
          }
        }
      } else {
        // Default black drawing
        cell.style.backgroundColor = "black";
      }
    });

    container.appendChild(cell);
  }
}

// Default grid
createGrid(16);

// Reset button
resetButton.addEventListener("click", () => {
  createGrid(16);
});

// Resize button
resizeButton.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter new grid size (max 100):"));
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Invalid size. Please enter a number between 1 and 100.");
  }
});

// Eraser toggle
eraserButton.addEventListener("click", () => {
  eraserOn = !eraserOn;
  eraserButton.textContent = eraserOn ? "Drawing Mode" : "Eraser Mode";
});

// Random color toggle
colorButton.addEventListener("click", () => {
  colorMode = !colorMode;
  colorButton.textContent = colorMode ? "Black Mode" : "Random Colors";
});