let Fname = prompt("What is your first name?");

// Display a welcome message with name they entered.
console.log(`Hello ${Fname}, welcome to my webpage!`);

// Create the constant piValue to store the value of Pi to 7 significant digits.
const piValue = 3.1415926;

// Ask the user to input their favorite number and store the value in a variable myFavNum.
let myFavNum = prompt("What is your favorite number?");

// Calculate the area of a circle using the user's favorite number as the radius (r).
// Store the result in a new variable myArea.
let myArea = piValue * Math.pow(myFavNum, 2);

// Display the contents of each variable to the webpage in a message with each variable and text describing the variable.
console.log(`You entered ${myFavNum} as your favorite number.`);
console.log(`If that was the radius of a circle, the circle's area would be ${myArea.toFixed(6)}.`);
