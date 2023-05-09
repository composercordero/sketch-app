const container = document.querySelector('#grid');
let output = document.getElementById("demo").textContent += " 16";

const defaultGrid = 16;

for (let i = 0; i < defaultGrid; i++){
    const boxes = document.createElement('div');
    boxes.className = "box";
    boxes.id = i+1 < 9 ? "0" + (i+1) : i+1;
    container.appendChild(boxes);
    let example = document.querySelectorAll(".box").textContent = `${boxes.id}`;
    boxes.append(example);
 }

 function changeGridButton () {
    let answer = prompt("Enter a number between 1 and 64");
    if (answer => 1 || answer <= 64){
        console.log("yes!");
    }else {console.log("try again")};
 }