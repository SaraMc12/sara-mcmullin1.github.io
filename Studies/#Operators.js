/**
 * Operators are symbols or keywords that perform operations on operands 
 * (variables or values). Here's an explanation of the operators you mentioned:

Assignment Operators: These operators are used to assign values to variables. 
The most common assignment operator is the equals sign (=), 
but there are also compound assignment operators which combine arithmetic operations with assignment. For example:
=: Assigns a value to a variable.
+=, -=, *=, /=, %=: Compound assignment operators for addition, subtraction, multiplication, division, and modulo respectively.
 */
let x = 10; // Simple assignment
x += 5; // Compound assignment, equivalent to x = x + 5

/**
 * Arithmetic Operators: These operators perform mathematical calculations on numeric operands.
+: Addition
-: Subtraction
*: Multiplication
/: Division
%: Modulo (remainder)
++: Increment
--: Decrement
 */
let a = 10;
let b = 5;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulo
a++; // Increment by 1
b--; // Decrement by 1

/**
 * Comparison Operators: These operators are used to compare values. 
 * They return a Boolean value (true or false) depending on the comparison result.
==: Equality
===: Strict equality
!=: Inequality
!==: Strict inequality
>: Greater than
<: Less than
>=: Greater than or equal to
<=: Less than or equal to
 */
let x = 5;
let y = 10;
console.log(x == y); // false
console.log(x === "5"); // false (strict equality checks both value and type)
console.log(x != y); // true
console.log(x !== "5"); // true (strict inequality checks both value and type)
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= 5); // true
console.log(y <= 10); // true

/**
 * Unary Operators: These operators operate on a single operand.
-: Unary negation (changes the sign of a number)
+: Unary plus (converts an operand into a number, but has no effect if the operand is already a number)
++ and --: Increment and decrement operators (mentioned earlier)
 */
let num = 10;
console.log(-num); // -10 (unary negation)
console.log(+num); // 10 (unary plus)

// Ternary Operator (Conditional Operator):
//  This is the only ternary operator in JavaScript. It's a short way to write simple conditional statements.
// condition ? exprIfTrue : exprIfFalse
let age = 20;
let status = (age >= 18) ? "adult" : "minor";
console.log(status); // adult