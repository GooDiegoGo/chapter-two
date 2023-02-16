//1
const readline= require("readline-sync");
let number = Number(readline.question("Enter a number: "));
let number1 = Number(readline.question("Enter a number: "));
let newSum = number + number1;
console.log(`Your sum is ${newSum.toFixed( 2)}`); 
//2
let number2 = Number(readline.question("Enter a number: "));
let number3 = Number(readline.question("Enter a number: "));
let newDifference = number2 - number3;
console.log(`Your Difference is ${newDifference.toFixed( 2)}`); 
//3
let number4 = Number(readline.question("Enter a number: "));
let number5 = Number(readline.question("Enter a number: "));
let newproduct = number4 * number5;
console.log(`Your product is ${newproduct.toFixed( 2)}`); 
//4
let number6 = Number(readline.question("Enter a number: "));
let number7 = Number(readline.question("Enter a number: "));
let newquotient = number6 / number7;
console.log(`Your quotient is ${newquotient.toFixed( 2)}`); 
//5
let number8 = Number(readline.question("Enter a number: "));
let number9 = Number(readline.question("Enter a number: "));
let newremainder = number8 % number9;
console.log(`Your remainder is ${newremainder.toFixed( 2)}`); 
//6
