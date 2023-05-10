const container = document.querySelector('#grid');
let output = document.getElementById("demo").textContent += " 16";

const defaultGrid = 16;

for (let i = 0; i < defaultGrid; i++){
    const boxes = document.createElement('div');
    boxes.className = "box";
    boxes.id = i+1 <= 9 ? "0" + (i+1) : i+1;
    container.appendChild(boxes);
    let example = document.querySelectorAll(".box").textContent = `${boxes.id}`;
    boxes.append(example);}

 function changeGridButton () {
    let answer = prompt("Enter a number between 1 and 64");
    if (answer => 1 || answer <= 64){
        console.log("yes!");
    }else {console.log("try again")};
 }



 //Study and implement

//  function buildGrid(x, y, cellSize, gridElement) {
//     gridElement.style.display = "grid";
//     gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
//     gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;
   
//     let squares = new DocumentFragment();
  
//     for (let i = 0; i < x * y; i++) {
//       let square = document.createElement('div');
//       square.className = 'square';
//       squares.appendChild(square);
//     }
  
//     gridElement.appendChild(squares);
//   }
  
  
//   buildGrid(15, 15, 20,  document.querySelector(".grid"));
  