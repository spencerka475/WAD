// Kael Spencer
// 5/13/2024
// JS Arrow Functions Practice

// Function 1
const studentBio = (firstName, schoolName) => `Hello! My name is ${firstName} and I go to ${schoolName}.`;

const fName = prompt('What is your name:\n');
const schoolName = prompt('What is your school name:\n');
console.log(studentBio(fName, schoolName));

// Function 2
const totalCost = (cost1, cost2, cost3, grandTotal) => `Item One: ${cost1} | Item Two: ${cost2} | Item Three ${cost3} = ${grandTotal}`;
const cost1 = parseFloat(prompt('Cost of burger king :\n'));
const cost2 = parseFloat(prompt('Cost of subway: \n'));
const cost3 = parseFloat(prompt('Cost of mcdonalds: \n'));
const grandTotal = (cost1 + cost2 + cost3).toFixed(2);
console.log(totalCost(cost1, cost2, cost3, grandTotal));

// Function 3
const squareRoot = (num) => `The Square Root of ${num} is ${Math.sqrt(num)}.`;
const num = parseInt(prompt('Enter a number to square root:\n'));
console.log(squareRoot(num));