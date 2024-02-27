/**
 * Control flow refers to the order in which statements in a program are executed. It's the concept of directing the flow of execution within a program based on certain conditions. In JavaScript, there are several control flow structures commonly used:

If Statement:

The if statement is used to execute a block of code if a specified condition is true.
 */
if (condition) {
    // Code to be executed if condition is true
}

/**
 * Else-if Statement:

The else if statement allows you to specify a new condition if the first condition is false.
You can have multiple else if blocks following an if block.
Syntax:
 */
if (condition1) {
    // Code to be executed if condition1 is true
} else if (condition2) {
    // Code to be executed if condition2 is true
} else {
    // Code to be executed if neither condition1 nor condition2 is true
}

/**
 * Else Statement:

The else statement specifies a block of code to be executed if the condition in the if statement is false.
There can be only one else statement following an if block.
 */
if (condition) {
    // Code to be executed if condition is true
} else {
    // Code to be executed if condition is false
}

/**
 * Switch Statement:

The switch statement is used to perform different actions based on different conditions.
It is often used as an alternative to long else if chains when there are multiple possible conditions.
Syntax:
 */
switch(expression) {
    case value1:
      // Code to be executed if expression === value1
      break;
    case value2:
      // Code to be executed if expression === value2
      break;
    default:
      // Code to be executed if expression doesn't match any case
  }

  