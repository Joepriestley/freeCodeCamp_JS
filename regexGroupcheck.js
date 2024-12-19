// Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log(result)
// 1. Your regex should use the shorthand character class for digits.
// Passed:2. Your regex should reuse a capture group twice.
// Passed:3. Your regex should match the string 42 42 42.
// Passed:4. Your regex should match the string 100 100 100.
// Passed:5. Your regex should not match the string 42 42 42 42.
// Passed:6. Your regex should not match the string 42 42.
// Passed:7. Your regex should not match the string 101 102 103.
// Passed:8. Your regex should not match the string 1 2 3.
// Passed:9. Your regex should match the string 10 10 10.
// Passed:10. Your regex should not match the string 42\t42\t42.
// Passed:11. Your regex should not match the string 42  42  42.
