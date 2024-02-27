/**
 * Data types in programming languages categorize the types of data that can be used in a program. 
 * Each data type defines the type of value that a variable can hold, and the operations that can be performed on it.
 *  Different programming languages may have different sets of data types, 
 * but some common ones include:
 * String: A sequence of characters enclosed within single or double quotes. Strings are used to represent text data.
 */
let myString = "Hello, world!";

// Number: Represents numeric data. JavaScript has both integer and floating-point numbers.
let myNumber = 42;

// Boolean: Represents a logical value indicating true or false.
let myBoolean = true;

// Array: An ordered collection of values, where each value is identified by an index. 
// Arrays can hold values of any data type.
let myArray = [1, 2, 3, 4, 5];

// Object: A collection of key-value pairs. Objects are used to represent complex data structures.
let myObject = { name: "John", age: 30 };

// Function: A block of code that can be invoked to perform a particular task or calculation.
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Undefined: Represents a variable that has been declared but has not been assigned a value.
let myUndefinedVariable;

// Null: Represents the intentional absence of any object value.
let myNullVariable = null;

// NaN (Not-a-Number): Represents a value that is not a valid number.
let result = "hello" / 5; // NaN

// Infinity: Represents a numeric value that is greater than any other number.
let myInfinity = Infinity;

/**
 * Primitive Data Types: These are simple data types that are immutable (cannot be changed). 
 * They are stored directly in memory and accessed by reference. 
 * Examples include strings, numbers, booleans, undefined, null, NaN, and Infinity.
 *  When passed to a function, primitive values are passed by value, meaning a copy of the value is passed.

Complex Data Types: These are compound data types composed of primitive data types or other complex data types. 
They are mutable (can be changed). Examples include arrays, objects, and functions. 
Complex values are stored in memory and accessed by reference. When passed to a function, 
complex values are passed by reference, meaning the function receives a reference to the original value, not a copy.

The reason for passing primitive values by copy and complex values by reference is efficiency and memory management.
 Passing primitive values by copy ensures that changes made within a function do not affect the original value.
  Passing complex values by reference allows for more efficient memory usage, 
  as it avoids making unnecessary copies of large data structures.
 */