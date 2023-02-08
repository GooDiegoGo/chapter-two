const readline = require('readline-sync');

let answer = readline.question("what day is it?\nYour answer: ");
console.log(answer);

let username = readline.question("Enter username: ");
let password = readline.question("Enter password: ");
if (password == "abc"){
    console.log('welcome ')
} else {
    console.log('invalid')
}

let currentprice = readline.question("Enter current price: ");
let originalprice = readline.question("Enter the original: ");
let diff = originalprice-currentprice;
let discount = (diff/originalPrice).toFixed(2);
console.log(`discount: ${discount}`);

// Exponents
let base = Number(readLine.question("Enter the base: "));
let exp = Number(readLine.question("Enter the exponent: "));
let answer2 = base ** exp;
console.log(`${base} to the power of ${exp} = ${answer2}`);


// Rounding
console.log(5.7);
console.log(Math.round(5.7));
console.log(5.3);
console.log(Math.round(5.3));
console.log(-5.3);
console.log(Math.round(-5.3));