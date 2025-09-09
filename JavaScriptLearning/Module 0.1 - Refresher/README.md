# Module 0.1: JavaScript Basics Refresher

## Theory Block (20 minutes)

### Core Concept: JavaScript Fundamentals with Python Comparisons

**1. Console Output - Your First Line Back**

In Python, you're used to:
```python
print("Hello, World!")
print(42)
print(True)
```

JavaScript uses `console.log()` instead:
```javascript
console.log("Hello, World!");
console.log(42);
console.log(true);
```

**Why the difference?** JavaScript was originally designed for web browsers, where "printing" meant displaying on a webpage, not outputting to a terminal. `console.log()` specifically sends output to the browser's developer console.

**2. Data Types - Familiar Yet Different**

| Python | JavaScript | Notes |
|--------|------------|-------|
| `"text"` or `'text'` | `"text"` or `'text'` | Both support single and double quotes |
| `42` | `42` | Numbers work the same |
| `True`/`False` | `true`/`false` | Note the lowercase in JavaScript |
| `None` | `null` or `undefined` | JavaScript has both concepts |

**The `undefined` Mystery**: JavaScript has both `null` (intentionally empty) and `undefined` (hasn't been assigned yet). This doesn't exist in Python.

```javascript
let x;           // x is undefined
let y = null;    // y is intentionally empty
console.log(x);  // undefined
console.log(y);  // null
```

**3. Comments - Same Concept, Different Syntax**

Python:
```python
# This is a comment
"""
This is a 
multi-line comment
"""
```

JavaScript:
```javascript
// This is a comment
/*
This is a
multi-line comment
*/
```

**4. Case Sensitivity - JavaScript is Stricter**

Python is case-sensitive, but JavaScript is even more so:
```javascript
let name = "John";
let Name = "Jane";  // Different variable!
console.log(name);  // "John"
console.log(Name);  // "Jane"
```

## Practice Block (15 minutes)

### Gentle Challenge: Hello World Variations

**Part 1: Basic Output**
Try running each line and observe the output:

```javascript
console.log("Hello, JavaScript!");
console.log(42);
console.log(true);
console.log(null);
console.log(undefined);
```

**Part 2: Data Type Exploration**
```javascript
// Try these and see what happens
console.log(typeof "Hello");    // What type is this?
console.log(typeof 42);         // What type is this?
console.log(typeof true);       // What type is this?
console.log(typeof null);       // Surprise! This is weird in JavaScript
console.log(typeof undefined);  // What type is this?
```

**Part 3: Your First Variables**
```javascript
// Declare some variables (don't worry about let vs var yet)
let myName = "Your Name Here";
let myAge = 25;
let isLearningJS = true;

console.log(myName);
console.log(myAge);
console.log(isLearningJS);
```

## Integration Challenge (25 minutes)

### Challenge: Personal Info Display

Create a JavaScript program that displays information about yourself, similar to what you might do in a Python script.

**Requirements:**
1. Store your name, age, favorite programming language, and whether you're learning JavaScript
2. Display this information in a formatted way
3. Use different data types (string, number, boolean)
4. Experiment with `typeof` to understand what JavaScript thinks each variable is

**Starter Template:**
```javascript
// Your information
let firstName = "";
let lastName = "";
let age = 0;
let favoriteLanguage = "";
let isLearningJS = true;
let yearsOfExperience = 0;

// Display the information
console.log("=== Personal Information ===");
// Add your console.log statements here

// Explore data types
console.log("\n=== Data Types ===");
// Add typeof explorations here
```

**Challenge Extensions (if you finish early):**
1. Try combining strings with the `+` operator: `"Hello " + "World"`
2. See what happens when you add a string and a number: `"Age: " + 25`
3. Experiment with template literals (modern JavaScript): `` `Hello ${myName}` ``

## Reflection Block (10 minutes)

**Questions to Consider:**
1. What felt most familiar compared to Python?
2. What felt strangest or most unexpected?
3. How does `console.log()` compare to Python's `print()` in terms of what information it shows?
4. What surprised you about JavaScript's data types?

**Key Takeaways to Remember:**
- JavaScript uses `console.log()` for output
- `true`/`false` are lowercase (not like Python's `True`/`False`)
- JavaScript has both `null` and `undefined`
- The `typeof` operator helps you understand what JavaScript thinks your data is
- Case sensitivity matters even more than in Python

## Common Gotchas for Python Developers

1. **The `typeof null` Surprise**: `typeof null` returns `"object"` - this is a famous JavaScript bug that can't be fixed for backward compatibility reasons.

2. **Automatic Semicolon Insertion**: JavaScript tries to be helpful by adding semicolons automatically, but this can sometimes cause unexpected behavior. It's safer to add them yourself.

3. **String + Number Behavior**: 
   ```javascript
   console.log("5" + 3);    // "53" (string concatenation)
   console.log("5" - 3);    // 2 (mathematical operation)
   console.log("5" * 3);    // 15 (mathematical operation)
   ```

## Project Euler Connection: Problem 1 Setup

Once you're comfortable with the basics, try implementing Project Euler Problem 1 (multiples of 3 and 5 below 1000) in JavaScript. This will give you practice with:
- Variables and data types
- Basic arithmetic
- Console output
- Comparing the solution to your Python approach

**Next Module Preview**: In Module 0.2, we'll explore JavaScript's syntax patterns, including how it uses curly braces instead of indentation, and you'll build your first JavaScript function!