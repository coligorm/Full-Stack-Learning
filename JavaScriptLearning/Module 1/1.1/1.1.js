/*
Module 1.1: Variables and Memory Management

Understanding JavaScript's Approach to Variable Declarations

Why does JavaScript have three ways to declare variables when Python just has one?
Ans: Python doesnt have variable declaration.
    In JS, you state the type of each variable when you declare it

Historical Context:
JavaScript evolved over 25+ years.
`var` was the original (1995),
`let` and `const` were added in ES6 (2015) to fix `var`'s problems.
Understanding all three helps you read existing code and avoid common pitfalls.
*/

// 1. Variable Declaration Types

// var can redeclare, but not good practice
var name = "John";
var name = "Paul";

// let cannot redeclare, but you can reassign
let age = 30;
age = 31;
// You can declare without assigning a value
let birthday;

// const cannot assign without a value, or reassign the const variable
// Example what throws an error:
const constName = "John";
// name = "Jane";  // Error! Cannot reassign

// but you can, reassign an Object's contents
const person = { name: "Colin", age: 26 };
person.age += 1;

// 2. Scope Differences - The Critical Concept

function myFunction() {
    if (true) {
        var x = 10;  // Available throughout the entire function
    }
    console.log(x);  // Works - prints 10
}
// However, let and const behave differently
function myFunction() {
    if (true) {
        let x = 10;  // Only available within this {} block
    }
    console.log(x);  // Error! x is not defined
}

// 3. Hoisting - JavaScript's Weird Magic

// Here it looks like we will get an error,
// However, x prints as undefined
// JS declares var first at the top of the scope before execution
console.log(x);
var x = 5;

// so really, this is what happens:
var x;           // Declaration hoisted
console.log(x);  // undefined
x = 5;           // Assignment stays here

// NOTE: This does not work for let and const

/*
Best Practices

The Rule of Thumb:
1. Use `const` by default
2. Use `let` when you need to reassign
3. Never use `var` in new code

Why?
- `const` prevents accidental reassignment
- `let` has predictable block scope
- Both avoid hoisting confusion
*/


// Mini Challenge

// Part 1: Hoisting Investigation

// Try to predict what each code block will output, then run it:

// Mystery 1
console.log("Mystery 1:"); // Ans: outputs fine
console.log(a);            // Ans: undefined
var a = "Hello";
console.log(a);            // Ans: outputs "Hello"

// Mystery 2
console.log("Mystery 2:");
// console.log(b);  // Uncomment this line - what happens?
let b = "World";    // Ans: An error occurs as b has not been declared
console.log(b);

// Mystery 3
console.log("Mystery 3:");
const c = "JavaScript";
console.log(c);
// c = "Python";  // Uncomment this line - what happens?
                  // Ans: Error trying to reassign a const

// Part 2: Scope Boundaries

function scopeTest() {
    console.log("=== Scope Test ===");
    
    if (true) {
        var x = "function scoped";
        let y = "block scoped";
        const z = "also block scoped";
    }
    
    console.log("Can access x:", x);  // What happens? // Ans: Works
    // console.log("Can access y:", y);  // Uncomment - what happens? // Ans: Error
    // console.log("Can access z:", z);  // Uncomment - what happens? // Ans: Error
}

scopeTest();

// Part 3: The Loop Problem

console.log("=== Loop Problem Demo ===");

// Version 1 - var
console.log("With var:");
for (var i = 0; i < 3; i++) {
    // Simulate async behavior with setTimeout
    setTimeout(function() {
        console.log("var version:", i);
    }, 10);
}

// Version 2 - let
console.log("With let:");
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log("let version:", j);
    }, 20);
}


// Integration Challenge

// Challenge: Build a Simple Calculator with Proper Variable Scoping

// Create a calculator that demonstrates proper variable management and scoping.
// This builds on your previous calculator but focuses on variable declaration best practices.

// Requirements:
// 1. Use `const` for values that shouldn't change
// 2. Use `let` for values that will be reassigned
// 3. Demonstrate block scope with conditional logic
// 4. Show the difference between `var` and `let` in a practical example
// 5. Handle calculator state 

function createCalculator() {
    console.log("=== Calculator with Proper Variable Scoping ===");
    
    // Use const for configuration that won't change
    const OPERATIONS = {
        ADD: '+',
        SUBTRACT: '-',
        MULTIPLY: '*',
        DIVIDE: '/'
    };
    
    // Use let for values that will change
    let currentResult = 0;
    let operationCount = 0;
    
    // Function to perform calculation
    function calculate(operation, a, b) {
        // Use const for the result since it won't change within this function
        let result = 0;
        
        if (operation === OPERATIONS.DIVIDE) {
            // Use let for block-scoped variables
            let isValidDivision = b !== 0;
            
            if (isValidDivision) {
                result = a / b;
            } else {
                console.log("Error: Division by zero!");
                return null;
            }
        } else if (operation == OPERATIONS.MULTIPLY) {
            if (b == 0) {
                result = 0;
            } else if (b == 1) {
                result = a;
            } else {
                result = a * b;
            }
        } else if (operation == OPERATIONS.SUBTRACT) {
            result = a - b;
        } else if (operation == OPERATIONS.ADD) {
            result = a + b;
        } else {
            console.log("Error: Invalid operation!");
        }
        
        // Update operation counter
        operationCount++;
        
        // Return result and update currentResult
        currentResult = result
        return result
    }
    
    // Demo function showing var vs let difference
    function demonstrateVarVsLet() {
        console.log("\n=== Var vs Let Demonstration ===");
        
        // Show the classic var problem
        console.log("With var (problematic):");
        for (var i = 1; i <= 3; i++) {
            setTimeout(function() {
                console.log("var i =", i);  // What will this print?
            }, 10);
        }
        
        // Show let working correctly
        console.log("With let (correct):");
        for (let j = 1; j <= 3; j++) {
            setTimeout(function() {
                console.log("let j =", j);  // What will this print?
            }, 20);
        }
    }
    
    // Test the calculator
    function runCalculatorTests() {
        // Test different operations
        calculate(OPERATIONS.ADD, 10, 5);
        calculate(OPERATIONS.SUBTRACT, 10, 3);
        calculate(OPERATIONS.MULTIPLY, 4, 6);
        calculate(OPERATIONS.DIVIDE, 20, 4);
        calculate(OPERATIONS.DIVIDE, 10, 0);  // Error case
        
        console.log(`\nTotal operations performed: ${operationCount}`);
        console.log(`Final result: ${currentResult}`);
    }
    
    // Run all demonstrations
    runCalculatorTests();
    demonstrateVarVsLet();
}

// Execute the calculator
createCalculator();

// Notes on var vs let demo

// Step-by-step breakdown:

// var:

// Loop runs immediately: i goes from 1 → 2 → 3 → 4 (loop exits when i=4)
// setTimeout schedules functions but doesn't execute them yet
// All scheduled functions share the same i variable (function-scoped)
// 10ms later, functions execute: By now, the loop is done and i = 4
// All three functions print the current value of i: which is 4

// Why let works correctly:

// let is block-scoped
// Each iteration of the loop creates a new j variable
// Each setTimeout callback captures its own copy of j