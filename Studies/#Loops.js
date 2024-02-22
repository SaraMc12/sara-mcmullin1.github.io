// LOOPS
// loops are control structures used to repeatedly execute a block of code
//  as long as a specified condition is true. JavaScript supports several types of loops, 
//  including the for loop, while loop, and do-while loop. Here's a brief explanation of each:

// The different kinds of loops

// for loop: The for loop is used when you know the number of iterations in advance.
//  It consists of three parts: initialization, condition, and iteration. 
//  The loop iterates as long as the condition evaluates to true.
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop: The while loop executes a block of code as long as the specified condition evaluates to true.
//  Unlike the for loop, the while loop doesn't have initialization or iteration steps. 
//  It only checks the condition before each iteration.
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Loops are commonly used in JavaScript for iterating over arrays, processing data, 
// and controlling the flow of execution in a program.
//  They provide a powerful mechanism for automating repetitive tasks and handling dynamic data.