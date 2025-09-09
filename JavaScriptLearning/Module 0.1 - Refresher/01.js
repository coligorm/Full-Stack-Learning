// 1. Console Output - Your First Line Back

console.log("Hello, World!");
console.log(42);
console.log(true);

// 2. Data Types - Familiar Yet Different

let x;           // x is undefined
let y = null;    // y is intentionally empty
console.log(x);  // undefined
console.log(y);  // 

// 3. Comments - Same Concept, Different Syntax

// This is a comment
/*
This is a
multi-line comment
*/

// 4. Case Sensitivity - JavaScript is Stricter

let name = "John";
let Name = "Jane";
console.log(name);
console.log(Name);

// Practice Block
console.log("\n\nPractice Block\n\n")

// Gentle Challenge: Hello World Variations

console.log("\nPart 1: Basic Output\n");

console.log("Hello, JavaScript!");
console.log(42);
console.log(true);
console.log(null);
console.log(undefined);

console.log("\nPart 2: Data Type Exploration\n");
                                // My Answers:  Correct Answers:
console.log(typeof "Hello");    // string       string
console.log(typeof 42);         // integer      number
console.log(typeof true);       // Boolean      boolean
console.log(typeof null);       // null         object
console.log(typeof undefined)   // undefined    undefined

console.log("\nPart 3: Your First Variables\n");

let myName = "Colin";
let myAge = 26;
let isLearningJS = true;

console.log(myName);
console.log(myAge);
console.log(isLearningJS);


// Integration Challenge
console.log("\n\nIntegration Challenge\n\n")
/*
Challenge: Personal Info Display

Create a JavaScript program that displays information about yourself, similar to what you might do in a Python script.

Requirements:
1. Store your name, age, favorite programming language, and whether you're learning JavaScript
2. Display this information in a formatted way
3. Use different data types (string, number, boolean)
4. Experiment with `typeof` to understand what JavaScript thinks each variable is
*/

let myname = "Colin";
let myage = 26;
let learningJS = true;
let favlanguage = "Python"

console.log("Hello, my name is " + myname + " (" + typeof(myname) + ")");
console.log("I am " + myage + " years old" + " (" + typeof(myage) + ")");
if (learningJS) {
    console.log("I am learning JavaScript" + " (" + typeof(learningJS) + ")");
} else {
    console.log("I am not learning JavaScript");
}
console.log("And my favourite programming language is " + favlanguage + " (" + typeof(favlanguage) + ")");