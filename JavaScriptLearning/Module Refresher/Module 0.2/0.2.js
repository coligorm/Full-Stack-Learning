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