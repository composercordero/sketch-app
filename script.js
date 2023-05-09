const container = document.querySelector('#grid');
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    output.innerHTML = `${this.value} x ${this.value}`;
}

const rows = slider.value;
const columns = slider.value;

for (let i = 0; i < columns; i++){
    for (let i = 0; i < rows; i++){
    const boxes = document.createElement('div');
    boxes.className = "box";
    container.appendChild(boxes);
}
 }