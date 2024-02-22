Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! 

/**
 * In JavaScript, there are two main phases involved in using functions:

Function Declaration Phase:

During this phase, JavaScript scans the code and registers function declarations in memory.
This means that regardless of where a function is declared in the code, it is hoisted to the top of its scope.
Function declarations are available for use throughout their containing scope, even before the actual declaration in the code.
Example of function declaration:
 */
function sayHello() {
    console.log("Hello!");
}

/**
 * Function Execution Phase:

In this phase, the JavaScript interpreter executes the code line by line.
When a function is called, the interpreter jumps to the function declaration and executes its statements.
If there are any parameters passed to the function, their values are assigned to the corresponding function arguments.
The function executes its statements and returns a value if necessary.
Example of function execution:
 */
sayHello(); // Function call

/**
 * PARAMATERS VS ARGUMENTS
 * Parameters are variables listed as a part of the function declaration.
They represent the inputs that a function expects to receive when it is called.
 */
function greet(name) { // 'name' is a parameter
    console.log("Hello, " + name + "!");
}

/**
 * Arguments are the actual values passed to a function when it is called.
They represent the concrete values that are supplied to the function when invoking it.
 */
greet("Alice"); // "Alice" is an argument passed to the 'name' parameter

// NAMED FUNCTION 
// a named function is a function that has a name identifier.
//  The syntax for declaring a named function is as follows:
function functionName(parameters) {
    // Function body
}

/**
 * Assigning a function to a variable
 */
let functionName = function(paramaters){
    "function body'
}

/**
 * In JavaScript, inputs to a function are specified using parameters, and outputs are specified using the return statement. Here's how you can specify inputs and outputs in a function:

Specifying Inputs (Parameters):

Parameters are variables listed as a part of the function declaration.
They represent the inputs that a function expects to receive when it is called.
Parameters are defined within the parentheses () following the function name.
You can define zero or more parameters, separated by commas.
In this example, a and b are parameters of the add function. 
They represent the values that will be passed to the function when it is called.
 */
function add(a, b) {
    return a + b;
}

/**
 * Specifying Outputs (Return Value):

Functions can optionally return a single value using the return statement.
The return statement specifies the value that the function will output when it is called.
You can return any valid JavaScript expression or value from a function.
In this example, the multiply function returns the product of its two parameters a and b when it is called.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Accessing Variables in Parent or Global Scopes:

When a function is defined within another function or within the global scope, it has access to variables defined in its parent scopes or in the global scope.
This means that the inner function can read and modify variables declared in the outer function or in the global scope.
 */
let globalVar = 10;

function outerFunction() {
    let outerVar = 20;

    function innerFunction() {
        console.log(globalVar); // Accessing global variable
        console.log(outerVar);  // Accessing variable from outer scope
    }

    innerFunction();
}

outerFunction(); // Output: 10 (globalVar), 20 (outerVar)

/**
 * Variables Defined within Functions:

Variables declared within a function (using var, let, or const)
 are scoped to that function and are not accessible outside of it.
This means that variables declared within a function are local to that function and cannot be accessed 
or modified from outside of it.This behavior helps in encapsulating functionality within functions 
and prevents unintended modifications to variables from outside of their intended scope.
 */
function outerFunction() {
    let innerVar = 30;

    console.log(innerVar); // Output: 30
}

outerFunction();
console.log(innerVar); // Error: innerVar is not defined

/**
 * Closures occur when a function retains access to variables from its parent scope even after the parent function has finished executing. 
 * This happens because the inner function still has access to its outer function's scope chain, allowing it to "close over" those variables.
 */

