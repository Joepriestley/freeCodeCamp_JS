let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);


// exo
// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

// Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor)\D*\sRoosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(result)

// 1. Your regex myRegex should return true for the string Franklin D. Roosevelt
// Passed:2. Your regex myRegex should return true for the string Eleanor Roosevelt
// Passed:3. Your regex myRegex should return false for the string Franklin Rosevelt
// Passed:4. Your regex myRegex should return false for the string Frank Roosevelt
// Failed:5. Your regex myRegex should return false for the string FranklinRoosevelt
// Failed:6. Your regex myRegex should return false for the string EleanorRoosevelt
// Passed:7. You should use .test() to test the regex.
// Passed:8. Your result should return true.