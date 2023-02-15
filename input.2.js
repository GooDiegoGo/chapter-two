//1
const readline= require("readline-sync");

let answer= readline.question("Do you want to hear a funny joke? Yes, No");
if (answer === "Yes") {
    console.log(`What do you call a pool with a dead body? Deadpool.`)
}
else if (answer === "No") {
    console.log(`Ok then go away`)
}
else {
    console.log("invalid");
}
//2
 let number = readline.question("Enter a number");
if (number % 2 === 0)
{    console.log("divisible by 2");
}
else {
        console.log("invalid");
}
//3
let number2 = readline.question( "Enter a number");
if (number2 % 2 === 0)
{    console.log("divisible by 2");
}else {
    console.log("invalid");
}
if (number2 % 3 === 0)
{    console.log("divisible by 3");
}else {
    console.log("invalid");
}
if (number2 % 4 === 0)
{    console.log("divisible by 4");
}
else {
    console.log("invalid");
}
if (number2 % 5 === 0)
{    console.log("divisible by 5");
}
else {
    console.log("invalid");
}
if (number2 % 6 === 0)
{    console.log("divisible by 6");
}else {
    console.log("invalid");
}

//4
let secret = Number(readline.question("Give me a number between 1 through 100:"));
if (secret < 62)
{    console.log("Too low.");
}
if (secret > 62)
{    console.log("Too high.");
}
if (secret == 62)
{    console.log("You won!!!!!");
}

//5
let currentPrice = readline.question( "Enter current price: ");
let originalPrice = readline.question( "Enter original price: ");
let diff = originalPrice-currentPrice;
let discount = (currentPrice / originalPrice).toFixed(2);
console.log(`discount: ${discount}`);//4.00

//6