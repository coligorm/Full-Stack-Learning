# Module 1.2: Functions - The JavaScript Way

## Theory Block (20 minutes)

### Core Concept: Why JavaScript Treats Functions as "First-Class Citizens"

**The Big Idea**: In JavaScript, functions aren't just blocks of code you call - they're objects that can be stored in variables, passed as arguments, returned from other functions, and created at runtime. This opens up powerful programming patterns.

**Python Comparison**: Python functions are objects too, but JavaScript makes this more explicit and central to the language's design.

---

### 1. Multiple Ways to Create Functions

#### Function Declarations (Traditional)
```javascript
function greet(name) {
    return "Hello, " + name;
}
```

#### Function Expressions (Functions as Values)
```javascript
const greet = function(name) {
    return "Hello, " + name;
};
```

#### Arrow Functions (Modern, Concise)
```javascript
const greet = (name) => {
    return "Hello, " + name;
};

// Even shorter for simple returns
const greet = name => "Hello, " + name;
```

**Python Comparison**:
```python
# Python only has one way (mostly)
def greet(name):
    return f"Hello, {name}"

# Lambda for simple functions
greet = lambda name: f"Hello, {name}"
```

**Why Multiple Ways?** Each serves different purposes:
- **Declarations**: Hoisted, good for main functions
- **Expressions**: Not hoisted, good for conditional function creation
- **Arrow functions**: Concise, handle `this` differently (we'll cover this)

---

### 2. Functions as Values

This is where JavaScript gets powerful:

```javascript
// Store functions in variables
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// Store functions in arrays
const operations = [add, multiply];

// Store functions in objects
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// Call functions from these structures
console.log(operations[0](5, 3));    // 8
console.log(calculator.add(5, 3));   // 8
```

**Backend Context**: This is similar to function pointers in C or method references in Java, but more flexible.

---

### 3. Higher-Order Functions

**Definition**: Functions that take other functions as arguments or return functions.

#### Functions as Arguments:
```javascript
function processNumbers(numbers, operation) {
    return numbers.map(operation);
}

const double = x => x * 2;
const square = x => x * x;

const numbers = [1, 2, 3, 4];
console.log(processNumbers(numbers, double)); // [2, 4, 6, 8]
console.log(processNumbers(numbers, square)); // [1, 4, 9, 16]
```

#### Functions Returning Functions:
```javascript
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

**Python Comparison**:
```python
# Python supports this too
def process_numbers(numbers, operation):
    return list(map(operation, numbers))

def create_multiplier(factor):
    return lambda number: number * factor

double = create_multiplier(2)
```

---

### 4. The Mysterious `this` Keyword

This is where JavaScript gets weird and different from Python:

```javascript
const person = {
    name: "John",
    greet: function() {
        console.log("Hello, I'm " + this.name);
    }
};

person.greet(); // "Hello, I'm John"

// But watch this:
const greetFunction = person.greet;
greetFunction(); // "Hello, I'm undefined" (or error in strict mode)
```

**Why?** `this` depends on **how the function is called**, not where it's defined.

#### Arrow Functions and `this`:
```javascript
const person = {
    name: "John",
    greet: () => {
        console.log("Hello, I'm " + this.name); // Won't work as expected!
    },
    greetProperly: function() {
        setTimeout(() => {
            console.log("Hello, I'm " + this.name); // This works!
        }, 100);
    }
};
```

**Key Rule**: Arrow functions inherit `this` from their surrounding context.

**Python Comparison**: Python's `self` is explicit and always refers to the instance. JavaScript's `this` is implicit and context-dependent.

---

### 5. Closures - Functions That Remember

```javascript
function createCounter() {
    let count = 0; // Private variable
    
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (separate counter!)
```

**What's Happening**: The inner function "closes over" the `count` variable, keeping it alive even after `createCounter` finishes.

**Backend Context**: Similar to closures in Python, but more commonly used in JavaScript for creating private variables and module patterns.

## Practice Block (15 minutes)

### Mini Challenge: Function Factory

**Part 1: Different Function Styles**

Create the same function using all three styles:

```javascript
// 1. Function declaration
function add1(a, b) {
    return a + b;
}

// 2. Function expression
const add2 = function(a, b) {
    // Your code here
};

// 3. Arrow function (full form)
const add3 = (a, b) => {
    // Your code here
};

// 4. Arrow function (short form)
const add4 = (a, b) => /* Your code here */;

// Test them all
console.log(add1(2, 3));
console.log(add2(2, 3));
console.log(add3(2, 3));
console.log(add4(2, 3));
```

**Part 2: Higher-Order Function Practice**

```javascript
// Create a function that takes an operation and returns a calculator
function createCalculator(operation) {
    return function(a, b) {
        // Apply the operation
        // Your code here
    };
}

// Test functions to pass in
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// Create specialized calculators
const adder = createCalculator(add);
const multiplier = createCalculator(multiply);

console.log(adder(5, 3));      // Should use add
console.log(multiplier(5, 3)); // Should use multiply
```

**Part 3: Closure Practice**

```javascript
function createPersonalGreeter(name) {
    // Create a function that remembers the name
    return function(greeting) {
        // Your code here - combine greeting with the remembered name
    };
}

const johnGreeter = createPersonalGreeter("John");
const janeGreeter = createPersonalGreeter("Jane");

console.log(johnGreeter("Hello")); // "Hello John" or similar
console.log(janeGreeter("Hi"));    // "Hi Jane" or similar
```

## Integration Challenge (25 minutes)

### Challenge: Build a Project Euler Problem Solver Using Function Patterns

Create a system that demonstrates all the function concepts while solving mathematical problems.

**Requirements:**
1. Use different function declaration styles appropriately
2. Create higher-order functions for common operations
3. Use closures to maintain state
4. Demonstrate function composition
5. Build a flexible problem-solving framework

**Starter Template:**

```javascript
// Project Euler Function Patterns Demo

// 1. Higher-order function for creating specialized checkers
function createChecker(condition) {
    // Return a function that checks the condition
    // Your code here
}

// 2. Closure-based result tracker
function createResultTracker() {
    // Private state for tracking results
    let results = [];
    let totalTime = 0;
    
    return {
        // Method to add a result
        addResult: function(problem, answer, timeMs) {
            // Your code here
        },
        
        // Method to get summary
        getSummary: () => {
            // Your code here - use arrow function to maintain 'this' context
        },
        
        // Method to get all results
        getAllResults: function() {
            // Your code here
        }
    };
}

// 3. Function composition for mathematical operations
const compose = (f, g) => (x) => f(g(x));

// 4. Array of operation functions
const mathOperations = {
    isEven: n => n % 2 === 0,
    isOdd: n => n % 2 === 1,
    square: n => n * n,
    sum: arr => arr.reduce((acc, n) => acc + n, 0)
};

// 5. Problem solver factory
function createProblemSolver(name, solutionFunction) {
    return {
        name: name,
        solve: function(input) {
            const startTime = Date.now();
            const result = solutionFunction(input);
            const endTime = Date.now();
            
            return {
                problem: name,
                input: input,
                result: result,
                timeMs: endTime - startTime
            };
        }
    };
}

// Example problem implementations
const problem1Solver = createProblemSolver("Multiples of 3 and 5", function(limit) {
    // Your implementation here
    // Use the checker functions and mathematical operations
});

const problem2Solver = createProblemSolver("Even Fibonacci Numbers", function(limit) {
    // Your implementation here
    // Demonstrate closure usage for fibonacci sequence generation
});

// Main demonstration function
function demonstrateFunctionPatterns() {
    console.log("=== JavaScript Function Patterns Demo ===");
    
    // Create a result tracker using closures
    const tracker = createResultTracker();
    
    // Create specialized checker functions
    const isMultipleOf3 = createChecker(n => n % 3 === 0);
    const isMultipleOf5 = createChecker(n => n % 5 === 0);
    
    // Solve problems and track results
    const result1 = problem1Solver.solve(1000);
    const result2 = problem2Solver.solve(4000000);
    
    tracker.addResult(result1.problem, result1.result, result1.timeMs);
    tracker.addResult(result2.problem, result2.result, result2.timeMs);
    
    // Display results
    console.log(tracker.getSummary());
    
    // Demonstrate function composition
    console.log("\n=== Function Composition Demo ===");
    const squareAndSum = compose(mathOperations.sum, arr => arr.map(mathOperations.square));
    console.log("Sum of squares [1,2,3,4]:", squareAndSum([1, 2, 3, 4]));
}

// Run the demonstration
demonstrateFunctionPatterns();
```

**Challenge Extensions:**
1. Add timing functions that use closures to measure performance
2. Create a memoization function that caches results
3. Implement a pipeline function that chains multiple operations
4. Add error handling using higher-order functions

## Reflection Block (10 minutes)

**Questions to Consider:**
1. Which function declaration style felt most natural coming from Python?
2. How does JavaScript's approach to functions as "first-class citizens" compare to Python?
3. Did the `this` keyword behavior surprise you? How is it different from Python's `self`?
4. When would you use closures in real projects?
5. How do higher-order functions change the way you think about problem-solving?

**Key Takeaways to Remember:**
- Functions are values that can be stored, passed, and returned
- Arrow functions are concise but handle `this` differently
- Higher-order functions enable powerful abstraction patterns
- Closures create private variables and persistent state
- `this` behavior depends on how functions are called

## Common Function Gotchas for Backend Developers

**1. Arrow Functions and `this`:**
```javascript
const obj = {
    name: "test",
    regularFunction: function() {
        console.log(this.name); // "test"
    },
    arrowFunction: () => {
        console.log(this.name); // undefined (or global context)
    }
};
```

**2. Function Hoisting Differences:**
```javascript
// This works - function declarations are hoisted
console.log(hoistedFunction()); // "Hello"

function hoistedFunction() {
    return "Hello";
}

// This doesn't work - function expressions aren't hoisted
console.log(notHoisted()); // Error: Cannot access before initialization

const notHoisted = function() {
    return "Hello";
};
```

**3. Closure Memory Implications:**
```javascript
function createManyFunctions() {
    const largeArray = new Array(1000000).fill("data");
    
    return function() {
        // This closure keeps the entire largeArray in memory!
        return largeArray.length;
    };
}
```

## Project Euler Connection: Problem 3 (Largest Prime Factor)

**Problem**: Find the largest prime factor of 600851475143.

**Function Pattern Focus:**
- Create a `createPrimeChecker()` function that returns a prime-testing function
- Use higher-order functions for factor finding
- Implement memoization using closures to cache prime calculations
- Compare different function declaration styles for performance

**Implementation Approach:**
```javascript
// Use different function patterns
const isPrime = createPrimeChecker(); // Closure-based with caching
const findFactors = (n) => { /* implementation */ }; // Arrow function
function findLargestPrimeFactor(n) { /* implementation */ } // Traditional declaration

// Demonstrate function composition
const solveProblem3 = compose(
    findLargestPrimeFactor,
    findFactors
);
```

**Next Module Preview**: In Module 2.1, we'll explore JavaScript's unique approach to objects and data structures. You'll discover how JavaScript objects are more like Python dictionaries on steroids, and why understanding prototypes is crucial for modern JavaScript development!

---

## Quick Reference: Function Declaration Patterns

| Pattern | When to Use | Example | Notes |
|---------|------------|---------|--------|
| Declaration | Main functions, need hoisting | `function name() {}` | Hoisted, `this` works normally |
| Expression | Conditional creation, no hoisting | `const f = function() {}` | Not hoisted, `this` works normally |
| Arrow | Short functions, callbacks | `const f = () => {}` | Concise, inherits `this` from context |
| Method | Object methods | `obj = { method() {} }` | Clean object method syntax |