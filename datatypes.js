console.log(4);
//this is a comment

//numbers
//integers
console.log(-3);
console.log(0);
console.log(3);
//floating point number
console.log(3.14);
console.log(100.045);

//strings
//characters, letters, symbols, spaces
console.log("hello world");
console.log('hello world');
console.log(`hello world`);
    
//Arithmetic operators (math)
console.log(14*2);
console.log(14-2);
console.log(14*2);
console.log(14/2);
console.log(14%2);
console.log(15%10);

//Concatenation: combine strings
console.log("My name"+"is Diego Ramirez.");
console.log('My' + ' ' + 'age' + ' '+'is'+ ' '+ 15 + '.');
console.log("Your age is\n17.");

//template literal - plug in a calculated value
//use backticks '' next to the 1
console.log('15 divided by 10 = ${15/10} axcvzxcvx');
console.log('my' + 'name');

// Unary Operators use one value
console.log(typeof 15);
console.log(typeof "this string");
console.log(typeof true);
console.log(typeof false);



// Binary Operators use two values
// Comparison Operators
console.log(10 > 5);  //greater than
console.log(10 < 5); //less than
console.log(10 >= 5); //greater than or equal to
console.log(10 <= 5); //less than or equal to
console.log(10 == 5); //are they both equal? false
console.log(10 == 10); //are they both equal? true
console.log(10 != 5); //are they different? true
console.log(10 != 10); //are they different? false

// Logical Operators
// AND && shift-7 true when both are true
console.log(3>2 && 1>5); //true and false = false
console.log(3>2 && 1<5); //true and true = true
console.log(3<2 && 1<5); //false and true = false
console.log(3<2 && 1>5); //false and false = false



// OR || shift-\ (next to enter key)
//true when at least one was true
console.log(3>2 || 1>5); //true or false =  true
console.log(3>2 || 1<5); //true or true =  true
console.log(3<2 || 1<5); //false or true =  true
console.log(3<2 || 1>5); //false or false =  false


// NOT ! flips true to false and false to true
console.log(!true);
console.log(!false);





// Ternary Operators use three values
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);
console.log(3>2 ? "yes it is true" : "no, it is not true");
console.log(3<2 ? "yes it is true" : "no, it is not true");



// Order of Operations
// Everything Else (happens first)
// Comparison Operators
// AND
// OR (happens last)
console.log( 1 + 1 == 3 && 10 * 12 > 100);

// 2 == 3 && 120 > 100
// false and true
// false
console.log( (1 + 1 == 3) && (10 * 12 > 100));
console.log( ((1 + 1) == 3) && ((10 * 12) > 100));