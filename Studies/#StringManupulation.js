/**
 * With operators
   With string methods
   
   String manipulation involves various operations you can perform on strings, 
   such as concatenation, slicing, replacing, searching, and more. 
   Some common string manipulation techniques in JavaScript are:

Concatenation: You can concatenate strings using the + operator or the concat() method.
 */
let str1 = "Hello";
let str2 = "world";
let result = str1 + " " + str2; // Using the + operator
console.log(result); // Output: "Hello world"

let concatenated = str1.concat(" ", str2); // Using the concat() method
console.log(concatenated); // Output: "Hello world"

/**
 * Substring: You can extract a portion of a string using the substring(), slice(), or substr() methods.
 */
let str = "JavaScript";

console.log(str.substring(0, 4)); // Output: "Java"
console.log(str.slice(0, 4));     // Output: "Java"
console.log(str.substr(0, 4));    // Output: "Java"

/**
 * Searching: You can search for substrings within a string using methods like 
 * indexOf(), lastIndexOf(), startsWith(), endsWith(), includes(), or regular expressions.
 */
let str = "JavaScript is awesome";

console.log(str.indexOf("is"));       // Output: 11
console.log(str.lastIndexOf("a"));   // Output: 3
console.log(str.startsWith("Java")); // Output: true
console.log(str.endsWith("some"));   // Output: false
console.log(str.includes("script")); // Output: false

/**
 * Converting Case: You can convert the case of strings using methods like toUpperCase() and toLowerCase().
 */
let str = "Hello World";

console.log(str.toUpperCase()); // Output: "HELLO WORLD"
console.log(str.toLowerCase()); // Output: "hello world"