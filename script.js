//Task 1

let count; 

for (let i = 0; i < 11; i++){
    count = i;
if (i % 2 === 0) {
console.log ("Count " + count + " is even");
} else {
    console.log("Count " + count + " is odd");
}
}


//Task 2

let myNum = prompt("Pick a number between 5 and 20");
if (myNum > 20 || myNum < 5) {
  console.log("Invalid input");
} else {
  let counter = 1;
  do {
    console.log(counter);
    counter++;
  } while (counter <= myNum);
}


//Task 3

const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

subjects.forEach(function(subject) {
    console.log(subject);
});

console.log(subjects.join(", "));


