// Module 0.2: Basic Syntax Patterns

// 1. Code 

// JavaScript has C-style formatting with the use of curly braces around code blocks

if (true) {
    console.log("This is in braces");
    console.log("This is also in braces");
}
console.log("This is not in braces");

function myFunction() {
    console.log("Function body");
    return 42;
}

// 2. Semicolons

// Again with the C-style, however, the semicolon at the end of the line is optional yet recommended.

let man = "John";
let woman = "Jenny"

// Both work

// 3. Function Syntax

// JS uses CamelCase and the `function` keyword
function myFunction(x) {
    return "This is " + x;
}
console.log(myFunction(man));

// 4. Parentheses and Conditions

// Always enclose in brackets
if (man == woman) {
    console.log("ManWoman");
}

// Practice Block

// Simple Function Creation

// Part 1 - Basic Funtion
function sayHello() {
    console.log("Hello to the sun!");
}

sayHello();

function greet(name) {
    console.log("Hello " + name + "!");
}

greet("Matt")

// Part 2 - Return Values

function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log("5 + 3 = " + result);

function makeMessage(word1, word2) {
    return "Wow, look at that strange " + word2 + word1 + "!";
}

let message = makeMessage("horse", "cow");
console.log("What did you say?\nI said: \"" + message + "\"")

// Part 3 - Conditional Blocks
function checkNumber(num) {
    if (num > 10) {
        console.log(num + " is greater than 10");
    } else if (num > 5) {
        console.log(num + " is between 6 and 10");
    } else {
        console.log(num + " is 5 or less");
    }
}

checkNumber(15);
checkNumber(8);
checkNumber(3);

// Integration Challenge

// Challenge: Basic Calculator with Functions

// Create a calculator that demonstrates JavaScript syntax patterns. This will feel familiar from your backend experience but with JavaScript syntax.

// Requirements:
// 1. Create separate functions for add, subtract, multiply, divide
// 2. Create a main function that demonstrates using all operations
// 3. Handle a simple error case (division by zero)
// 4. Use proper JavaScript naming conventions
// 5. Include console output that shows the operations

function add(x, y) {
    displayResults(add, x, y, x + y);
}

function subtract(x, y) {
    displayResults(subtract, x, y, x - y);
}

function multiply(x, y) {
    displayResults(multiply, x, y, x * y);
}

function divide(x, y) {
    if (y == 0) {
        console.log("ERROR: Divide by 0");
        console.log("Cannot divide " + x + " by " + y);
        return 0;
    } else {
        displayResults(divide, x, y, x / y);
    }
}

function findMax(x, y) {
    if (x >= y) {
        displayResults(findMax, x, y, x);
    } else {
        displayResults(findMax, x, y, y);
    }
}

function isEvenOrOdd(x) {
    if (x % 2 == 0) {
        displayResults(isEvenOrOdd, x, x, "even");
    } else {
        displayResults(isEvenOrOdd, x, x, "odd");
    }
}

function displayResults(op, x, y, result) {
    switch (op) {
        case add:
            console.log(`${x} + ${y} = ${result}`);
            break;
        case subtract:
            console.log(`${x} - ${y} = ${result}`);
            break;
        case multiply:
            console.log(`${x} x ${y} = ${result}`);
            break;
        case divide:
            console.log(`${x} ÷ ${y} = ${result}`);
            break;
        case findMax:
            console.log(`The max is : ${result}`);
            break;
        case isEvenOrOdd:
            console.log(`${x} is ${result}`);
        default:
            break;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function runCalculator() {
    console.log("\n\n ~~~ Welcome to the Calculator ~~~ \n");
    
    let x = getRandomInt(20);
    let y = getRandomInt(20);

    console.log("Our two numbers today are ...");
    console.log(`${x} and ${y}`);
    
    add(x, y);
    subtract(x, y);
    multiply(x, y);
    divide(x, y);

    // Zero divide test
    console.log("\n ~~~ Zero divide test ~~~");
    let z = 0;
    divide(x, z);

    // Challenge Extensions
    console.log("\n ~~~ Challenge Extensions ~~~");
    findMax(x, y);
    isEvenOrOdd(x);
    isEvenOrOdd(y);

}

runCalculator();