//pizza order

//event listener
document.getElementById("btn").addEventListener("click", placeOrder);
// store order code in function
function placeOrder() {
// input
const size = prompt("Enter pizza size (small, med,large");
const topping1 = prompt('enter topping #1:');
const topping2 = prompt('enter topping #2:');

//process

const msg = ` your ${size} pizza  with ${topping1} and ${topping2} is on it's way!`;
//output 
alert(msg);
}
