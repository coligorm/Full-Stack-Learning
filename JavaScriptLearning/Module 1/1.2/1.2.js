/*
Module 1.2: Functions

In JavaScript, functions aren't just blocks of code you call -
they're objects that can be stored in variables, passed as arguments, returned from other functions, and created at runtime.
This opens up powerful programming patterns
 */

// 1. Multiple Ways to Create Functions

// Function Declarations:
// Hoisted, good for main functions
function greet(name) {
    return "Hello, " + name;
}

// Function Expression (Functions as Values):
// Not hoisted, good for conditional function creation
const greet = function(name) {
    return "Hello, " + name;
}

// Arrow Functions (Modern, Concise)
// More concise, modern approach that is similar syntax when using React
// Handles `this` differently
const greet = (name) => {
    return "Hello, " + name;
}
// shorter version for more simple function returns
const greet = name => "Hello, " + name;


// 2. Functions as Values

// We can use functions as values in mnay different ways to create powerful programs

// Store funtions as variable
const add = (a, b) => a + b;
const mul = (a, b) => a * b;

// Store functions in arrays:
const operations = [add, mul];

// Store functions in objects
const calculator = {
    add: (a, b) => a + b,
    mul: (a, b) => a * b
};

// Call functions from these structures
console.log(operations[0](5, 3));
console.log(calculator.add(5, 3));

// This is similar to function pointers in C or method references in Java, but more flexible.


// 3. Higher-Order Functions

// Are functions that take other functions as arguments or return functions

// As Arguments Example:
function processNumbers(nums, ops) {
    return nums.map(ops)
}

const double = x => x * 2;
const square = x => x * x;

const numbers = [1, 2, 3, 4, 5];

console.log(processNumbers(numbers, double)); // [2, 4, 6, 8]
console.log(processNumbers(numbers, square)); // [1, 4, 9, 16]

// Returning Functions Example:
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const times2 = createMultiplier(2);
const times3 = createMultiplier(3);

console.log(times2(5)); // 5 x 2 = 10
console.log(times3(5)); // 5 x 3 = 15