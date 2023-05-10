//Variables
let output = document.getElementById("demo").textContent += " 16";
// let setCurrentMode = defaultMode;

//Buttons
const colorBtn = document.getElementById('color')
const rainbowBtn = document.getElementById('random-color')
const eraserBtn = document.getElementById('eraser')
const clearBtn = document.getElementById('clear')

//Constants
const grid = document.getElementById('grid')
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 20;

//Event Listeners
colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('random')
eraserBtn.onclick = () => setCurrentMode('eraser')
clearBtn.onclick = () => reloadGrid()
const changeBtn = document.getElementById("changeGrid");
changeBtn.addEventListener("click", changeGridButton);

//Functions
function setCurrentSize(newSize) {
    currentSize = newSize
  }

function changeSize(value) {
setCurrentSize(value);
output = document.getElementById("demo").textContent += `${value}`;
reloadGrid();
}

function updateSizeValue(value) {
sizeValue.innerHTML = `${value} x ${value}`
}

function reloadGrid() {
clearGrid()
setupGrid(currentSize)
}

function clearGrid() {
grid.innerHTML = ''
}

function setupGrid(size) {
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${size}, 20px)`;
    grid.style.gridTemplateRows = `repeat(${size}, 20px)`;
   
    let container = new DocumentFragment();
  
    for (let i = 0; i < size * size; i++) {
        let box = document.createElement('div');
        box.className = 'box';
        //   gridElement.addEventListener('mouseover', changeColor)
        //   gridElement.addEventListener('mousedown', changeColor)
      grid.appendChild(box);
    }
}

 function changeGridButton () {
    let answer = prompt("Enter a number between 16 and 48");
    if (answer >= 16 && answer <= 48){
        changeSize(answer);
    }else {alert("try again")};
 }

 //Window Load
setupGrid(DEFAULT_SIZE);

//My previous code
 // for (let i = 0; i < defaultGrid; i++){
//     const boxes = document.createElement('div');
//     boxes.className = "box";
//     boxes.id = i+1 < 9 ? "0" + (i+1) : i+1;
//     container.appendChild(boxes);
//     let example = document.querySelectorAll(".box").textContent = `${boxes.id}`;
//     boxes.append(example);
//  }