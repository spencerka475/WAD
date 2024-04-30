// simple addition

//btn event listener

document.getElementById("btn").addEventListener("click" , btnClicked);

function btnClicked() {

//input
const num1 = +document.getElementById("num1in").value;
const num2 = +document.getElementById("num2in").value;

//process
const total = num1 + num2;

// output
document.getElementById("output").innerHTML = total;
}