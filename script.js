let output = document.getElementById("demo").textContent += " 16";

function buildGrid(x, y, cellSize, gridElement) {
    gridElement.style.display = "grid";
    gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
    gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;
   
    let container = new DocumentFragment();
  
    for (let i = 0; i < x * y; i++) {
      let box = document.createElement('div');
      box.className = 'box';
      container.appendChild(box);
    }

    gridElement.appendChild(container);

  }

  buildGrid(20, 20, 25,  document.querySelector("#grid"));
  

 function changeGridButton () {
    let answer = prompt("Enter a number between 1 and 64");
    if (answer => 1 || answer <= 64){
        console.log("yes!");
    }else {console.log("try again")};
 }



 // for (let i = 0; i < defaultGrid; i++){
//     const boxes = document.createElement('div');
//     boxes.className = "box";
//     boxes.id = i+1 < 9 ? "0" + (i+1) : i+1;
//     container.appendChild(boxes);
//     let example = document.querySelectorAll(".box").textContent = `${boxes.id}`;
//     boxes.append(example);
//  }