# Module 0.2: Basic Syntax Patterns

## Theory Block (20 minutes)

### Core Concept: JavaScript Syntax Patterns vs Python Indentation

**1. Code Blocks - Curly Braces vs Indentation**

This is probably the biggest visual difference coming from Python:

**Python approach:**
```python
if True:
    print("This is indented")
    print("This is also indented")
print("This is not indented")

def my_function():
    print("Function body")
    return 42
```

**JavaScript approach:**
```javascript
if (true) {
    console.log("This is in braces");
    console.log("This is also in braces");
}
console.log("This is not in braces");

function myFunction() {
    console.log("Function body");
    return 42;
}
```

**Why the difference?** Python's philosophy emphasizes readability and enforces consistent indentation. JavaScript inherited C-style syntax where braces explicitly define code blocks, allowing more formatting flexibility (but also more ways to make messy code).

**2. Semicolons - The Optional Punctuation**

JavaScript statements can end with semicolons:
```javascript
let name = "John";
console.log(name);
```

But JavaScript has "Automatic Semicolon Insertion" (ASI):
```javascript
let name = "John"  // Semicolon automatically inserted
console.log(name)  // Semicolon automatically inserted
```

**Best Practice**: Always include semicolons. ASI can sometimes insert them in unexpected places and cause bugs.

**3. Function Syntax - Explicit vs Implicit**

**Python functions:**
```python
def greet(name):
    return f"Hello, {name}!"

def add_numbers(a, b):
    return a + b
```

**JavaScript functions:**
```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

function addNumbers(a, b) {
    return a + b;
}
```

**Key Differences:**
- JavaScript uses `function` keyword (more explicit)
- JavaScript uses camelCase naming convention (vs Python's snake_case)
- JavaScript uses `+` for string concatenation (vs Python's f-strings)

**4. Parentheses and Conditions**

**Python:**
```python
if x > 5:
    print("Big number")
```

**JavaScript:**
```javascript
if (x > 5) {
    console.log("Big number");
}
```

JavaScript requires parentheses around conditions, even simple ones.

**5. Case Sensitivity and Naming Conventions**

| Python Convention | JavaScript Convention | Example |
|------------------|----------------------|---------|
| `snake_case` | `camelCase` | `getUserName()` |
| `UPPER_CASE` | `UPPER_CASE` | `MAX_SIZE` |
| `CapitalCase` | `PascalCase` | `UserAccount` |

## Practice Block (15 minutes)

### Gentle Challenge: Simple Function Creation

**Part 1: Your First JavaScript Function**

Try creating this step by step:

```javascript
// Step 1: Basic function
function sayHello() {
    console.log("Hello from JavaScript!");
}

// Step 2: Call the function
sayHello();

// Step 3: Function with parameter
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("World");
greet("JavaScript");
```

**Part 2: Functions that Return Values**

```javascript
// Math function
function add(a, b) {
    return a + b;
}

// Test it
let result = add(5, 3);
console.log("5 + 3 =", result);

// String function
function makeMessage(name, age) {
    return "My name is " + name + " and I am " + age + " years old.";
}

let message = makeMessage("Alice", 25);
console.log(message);
```

**Part 3: Conditional Blocks**

```javascript
function checkNumber(num) {
    if (num > 10) {
        console.log(num + " is greater than 10");
    } else if (num > 5) {
        console.log(num + " is between 6 and 10");
    } else {
        console.log(num + " is 5 or less");
    }
}

// Test with different numbers
checkNumber(15);
checkNumber(8);
checkNumber(3);
```

## Integration Challenge (25 minutes)

### Challenge: Basic Calculator with Functions

Create a calculator that demonstrates JavaScript syntax patterns. This will feel familiar from your backend experience but with JavaScript syntax.

**Requirements:**
1. Create separate functions for add, subtract, multiply, divide
2. Create a main function that demonstrates using all operations
3. Handle a simple error case (division by zero)
4. Use proper JavaScript naming conventions
5. Include console output that shows the operations

**Starter Template:**
```javascript
// Calculator Functions
function add(a, b) {
    // Your code here
}

function subtract(a, b) {
    // Your code here
}

function multiply(a, b) {
    // Your code here
}

function divide(a, b) {
    // Your code here
    // Remember to handle division by zero!
}

// Utility function to display results
function displayResult(operation, a, b, result) {
    // Create a nice formatted output
    // Example: "5 + 3 = 8"
}

// Main demonstration function
function runCalculatorDemo() {
    console.log("=== JavaScript Calculator Demo ===");
    
    // Test with some numbers
    let x = 10;
    let y = 5;
    
    // Demonstrate all operations
    // Your code here
    
    // Test edge case
    console.log("\n=== Edge Case Testing ===");
    // Test division by zero
}

// Run the demo
runCalculatorDemo();
```

**Challenge Extensions:**
1. Add a function that finds the maximum of two numbers
2. Create a function that checks if a number is even or odd
3. Try using template literals instead of string concatenation: `` `${a} + ${b} = ${result}` ``

**Expected Output Example:**
```
=== JavaScript Calculator Demo ===
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 5 = 2

=== Edge Case Testing ===
Error: Cannot divide by zero
```

## Reflection Block (10 minutes)

**Questions to Consider:**
1. How did the curly brace syntax feel compared to Python's indentation?
2. Did you find yourself wanting to use snake_case instead of camelCase?
3. Which felt more natural: Python's `def` or JavaScript's `function`?
4. How did string concatenation with `+` compare to Python's f-strings?

**Key Takeaways to Remember:**
- JavaScript uses `{}` braces to define code blocks
- Functions use the `function` keyword and camelCase naming
- Conditions require parentheses: `if (condition)`
- Semicolons are technically optional but recommended
- String concatenation uses `+` operator

## Common Syntax Gotchas for Python Developers

**1. Forgetting Parentheses in Conditions:**
```javascript
// Wrong (Python thinking)
if x > 5 {
    console.log("Big");
}

// Correct
if (x > 5) {
    console.log("Big");
}
```

**2. Using snake_case Instead of camelCase:**
```javascript
// Python style (works but not conventional)
function get_user_name() {
    return "user";
}

// JavaScript style (conventional)
function getUserName() {
    return "user";
}
```

**3. Forgetting to Return Values:**
```javascript
// This function returns undefined!
function add(a, b) {
    a + b;  // Missing return statement
}

// Correct
function add(a, b) {
    return a + b;
}
```

## Project Euler Connection: Problem 1 Implementation

Now you're ready to implement Project Euler Problem 1 using proper JavaScript syntax:

**Problem**: Find the sum of all multiples of 3 or 5 below 1000.

**Challenge**: Implement this using:
- A function to check if a number is a multiple of 3 or 5
- A main function that iterates and sums
- Proper JavaScript naming conventions
- Clear console output

This will reinforce:
- Function creation and calling
- Conditional logic with proper syntax
- Loop structures (you'll need a for loop)
- Return values and variable assignments

**Next Module Preview**: In Module 1.1, we'll dive deep into JavaScript's variable declaration system (`let`, `const`, `var`) and understand why JavaScript handles scope differently than Python. You'll discover some surprising behaviors that even trip up experienced developers!

---

## Quick Reference: Python to JavaScript Syntax

| Concept | Python | JavaScript |
|---------|--------|------------|
| Function | `def name():` | `function name() {` |
| Condition | `if condition:` | `if (condition) {` |
| String concat | `f"{a} + {b}"` | `a + " + " + b` |
| Naming | `snake_case` | `camelCase` |
| Code blocks | Indentation | `{ }` braces |