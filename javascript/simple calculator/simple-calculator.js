//Kael Spencer
//4/19/24
//simple calculator



// input
const num1 = parseFloat(prompt("enter your first number"));
const num2 = parseFloat(prompt('enter your second number'));


//process
const mtotal = num1 * num2;
const atotal = num1 + num2;
const stotal = num1 - num2;
const dtotal = num1 / num2; 

const msg = `Multiply = ${mtotal} 
Add = ${atotal}
Subtract = ${stotal}
Divide = ${dtotal}`;
//output 
alert(msg);
