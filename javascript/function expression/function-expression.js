// Kael Spencer
// 05/6/2024
// JS Function Expression Example


// part  1
const welcomeUser = function (fName) {
    // Welcome the user by their first name
    return `Welcome to Career Tech, ${fName}!`;
}
// Call the welcomeUser function and use the alert ( ) method to display the welcome message in an alert box
const firstName = 'kael';
alert(welcomeUser(firstName));


//part 2
const showBiography = function (fName, lName, userAge) {
    // Build a template string containing the user's full name and age
    return `Hello! My name is ${fName} ${lName} and I am ${userAge} years old.`;
}
// Call the showBiography function and display the info
// about the user in the browser console
const firstName2 = 'Kael';
const lastName = 'Spencer';
const age = 18;
console.log(showBiography(firstName, lastName, age));