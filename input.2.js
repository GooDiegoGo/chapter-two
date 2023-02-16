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

//5 and 6
let cost = Number(readLine.question("Enter meal cost: "));
if (cost <= 0){
    console.log("invalid cost");
} else {
    let tax = cost * .08;
    let newCost = cost + tax
    console.log(`Your cost is ${newCost.toFixed(2)}`);
}
//7 and 8
let mealCost = Number(readLine.question("Enter meal cost: "));
if (mealCost <= 0){
    console.log("invalid cost")
} else {
    let service = readLine.question("Service was (great/good/average). Enter choice: ");
    let tip = 0;
    if (service == "great"){
        tip = mealCost * .20;
    } else if (service == "good"){
        tip = mealCost * .15;
    } else {
        tip = mealCost * .10;
    }
    let newTotal = mealCost + tip;
    console.log(`The tip should be $${newTotal.toFixed(2)}.`);
}