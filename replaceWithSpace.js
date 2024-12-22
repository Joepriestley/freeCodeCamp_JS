// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

// Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;// Change this line
let result = hello.replace(wsRegex,'') //Change this line
console.log(result)

// . result should be equal to the string Hello, World!
// Passed:2. Your solution should not use the String.prototype.trim() method.
// Passed:3. The result variable should not directly be set to a string
// Passed:4. The value of the hello variable should not be changed.