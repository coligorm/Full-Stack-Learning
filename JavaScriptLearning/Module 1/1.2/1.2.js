/*
Module 1.2: Functions

In JavaScript, functions aren't just blocks of code you call -
they're objects that can be stored in variables, passed as arguments, returned from other functions, and created at runtime.
This opens up powerful programming patterns
 */

// 1. Multiple Ways to Create Functions

// Function Declarations:
// Hoisted, good for main functions
function greet1(name) {
    return "Hello, " + name;
}

// Function Expression (Functions as Values):
// Not hoisted, good for conditional function creation
const greet2 = function(name) {
    return "Hello, " + name;
}

// Arrow Functions (Modern, Concise)
// More concise, modern approach that is similar syntax when using React
// Handles `this` differently
const greet3 = (name) => {
    return "Hello, " + name;
}
// shorter version for more simple function returns
const greet4 = name => "Hello, " + name;

console.log("Chapter 1 Output:")
console.log(greet1("Aaron"));
console.log(greet2("Betty"));
console.log(greet3("Colin"));
console.log(greet4("Dolly"));

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
console.log("Chapter 2 Output:")
console.log(operations[0](5, 3));
console.log(calculator.mul(5, 3));

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

console.log("Chapter 3 Output:\n=> Functions as Arugments")
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

console.log("=> As Return Functions")
console.log(times2(5)); // 5 x 2 = 10
console.log(times3(5)); // 5 x 3 = 15


// 4. The Mysterious `this` keyword

// The core concept of `this` is about HOW the function is called
// and not WHERE it is defined.
console.log("Chapter 4 - `this` keyword Output:")
const person = {
    name: "John",
    greet: function() {
        console.log("Hello, I'm " + this.name);
    }
};

person.greet();

// Extracting the greet function inside person to the const greetFunction
const greetFunction = person.greet;
greetFunction();
// However, we get "Hello, I'm undefined", as greetFunction has no knowledge of the person object
// `this.name` tries to access `window.name` or `undefined.name`

// Whereas,
person.greet();
// assigns this = person, and thus can access the name "John"

// If we add another person...
const person2 = {
    name: "Jane",
    greet: person.greet  // Here, we access the greet function from the person (John), but the this is now related to "Jane"
};

person.greet();  // "Hello, I'm John"  (this = person1)
person2.greet();  // "Hello, I'm Jane"  (this = person2)

// Same function, different this!

console.log("Demonstrating Arrow Functions and `this`:")
// Arrow functions inherit `this` from their surrounding context.

const person3 = {
    name: "Jill",
    
    // Regular function: this depends on how it's called
    greet: function() {
        console.log("Regular function:", this.name);
    },
    
    // Arrow function: this comes from surrounding context
    arrowGreet: () => {
        console.log("Arrow function:", this.name);  // this = global object!
    }
};

person3.greet();      // "Regular function: John"
person3.arrowGreet(); // "Arrow function: undefined" (this = global)

// You might think: "`this` should be person because the arrow function is inside person"

// However, below is a representation of what is happening:

// 1. We're at the global/module level
console.log("Global this:", this);  // undefined (in Node.js) or window (in browser)

// 2. The arrow function is created HERE, at the global level
const arrowFunction = () => {
    console.log("Arrow function this:", this);  // Inherits from global scope
};

// 3. Then we assign it to the object property
const anotherPerson = {
    name: "Jimmy",
    arrowGreet: arrowFunction  // Just assigning the function, not changing its this
};

console.log(anotherPerson.arrowGreet()) // undefined, as the arrow function's `this` was created at global scope

console.log("Correctly working Arrow Function");
const workingPerson = {
    name: "Jane",
    
    // Arrow function defined at global level
    arrowGreet: () => {
        console.log("Arrow (global):", this?.name || "undefined");
    },
    
    // Regular function that contains arrow functions
    demonstrateArrowContext: function() {
        console.log("Regular method:", this.name);
        
        // Arrow function defined INSIDE the regular function
        const innerArrow = () => {
            console.log("Arrow (inside method):", this.name);  // this = person!
        };
        
        innerArrow();
        
        // Nested example
        setTimeout(() => {
            console.log("Arrow (in setTimeout):", this.name);  // this = person!
        }, 100);
    }
};

workingPerson.arrowGreet();              // "Arrow (global): undefined"
workingPerson.demonstrateArrowContext(); // Shows the difference

/*
Take away points:

- When JavaScript sees an arrow function, it immediately captures the current value of this
- At the global/module level, this is usually undefined (Node.js) or window (browser)
- Object literal syntax { } doesn't create a new this context
- Only function calls create new this contexts

*/


// 5. Closures - Functions that remember

function createCounter() {
    let count = 0; // Private variable

    return function() {
        count ++;
        return count;
    }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log("Chapter 5 Output:")
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (separate counter!)
console.log(counter1()); // 3

// What's Happening?
// The inner function "closes over" the `count` variable, keeping it alive even after `createCounter` finishes.

// Mini Challenge

// Part 1: Different Function Styles:
// Declaration, Expression, Arrow function (full), Arrow function(short)
console.log("Mini Challenge: Part 1");

// Function declaration
function deductFive(num) {
    return num - 5;
}

// Expression
const doubleNumber = function(num) {
    return num * 2;
};

// Arrow Function (Full)
const subtract = (a, b) => {
    return a - b;
};

// Arrow Function (short)
const divide = (a, b) => a / b;

console.log(deductFive(10));
console.log(doubleNumber(5));
console.log(subtract(10, 5));
console.log(divide(10, 5));

// Part 2: Higher-Order Function Practice
// Create a function that takes an operation and returns a calculator
console.log("Mini Challenge: Part 2");

function createAnotherCalculator(operation) {
    return function(a, b) {
        return operation(a, b)
    }
}

const addNums = (a, b) => a + b;
const subNums = (a, b) => a - b;
const mulNums = (a, b) => a * b;
const divNums = (a, b) => a / b;

const adder = createAnotherCalculator(addNums)
const suber = createAnotherCalculator(subNums)
const muler = createAnotherCalculator(mulNums)
const diver = createAnotherCalculator(divNums)

console.log(adder(3, 2));
console.log(suber(3, 2));
console.log(muler(3, 2));
console.log(diver(3, 2));

console.log(adder(suber(3, 2), muler(3, 2)))

// Part 3: Closure Practise
// Create a function that remembers the name

function createPersonalGreeter(name) {

    return function(greeting) {
        return greeting + ' World, ' + name + ' here!'
    }
}

const johnGreeter = createPersonalGreeter("John");  // the johnGreeter const remembers "John" is assigned to name
const janeGreeter = createPersonalGreeter("Jane");  // Even though the createPersonalGreeter is called again with a different name

console.log(johnGreeter("Hello"));
console.log(janeGreeter("Hi"));

/*
Integration Challeng (25 minutes)

Challenge: Build a Project Euler Problem Solver Using Function Patterns

Create a system that demonstrates all the function concepts while solving mathematical problems.

Requirements:
1. Use different function declaration styles appropriately
2. Create higher-order functions for common operations
3. Use closures to maintain state
4. Demonstrate function composition
5. Build a flexible problem-solving framework
*/

