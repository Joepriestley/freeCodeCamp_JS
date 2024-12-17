// 

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\s\w+/; // Change this line
let result = ohRegex.test(ohStr);
console.log(result)

// Your regex should use curly brackets.
// Passed:2. Your regex should not match the string Ohh no
// Passed:3. Your regex should match the string Ohhh no
// Passed:4. Your regex should match the string Ohhhh no
// Passed:5. Your regex should match the string Ohhhhh no
// Passed:6. Your regex should match the string Ohhhhhh no
// Passed:7. Your regex should not match the string Ohhhhhhh no