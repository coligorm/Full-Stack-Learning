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