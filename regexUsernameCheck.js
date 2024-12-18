// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d\d+)/; // Change this line
let result = pwRegex.test(sampleWord); 




// (?=\w{6,}): This is the first positive lookahead assertion. It checks that the string contains at least six word characters (\w) without consuming any characters. \w typically matches letters (both uppercase and lowercase), digits, and underscore characters. So this part ensures there are at least six characters that are either letters, digits, or underscores.

// (?=\D*\d\d+): This is the second positive lookahead assertion. It checks for a sequence where there are zero or more non-digit characters (\D*) followed by at least two digits (\d\d+). The + following \d means that there can be one or more digits following the first two. This part ensures that there are at least two digits in the string, regardless of how many non-digit characters might precede them.

// In summary, this regex pattern requires a string to have at least six word characters and at least two digits within the string. If a string meets both criteria, the regex matches; if not, it does not match.

// check against below:

// Passed Your regex should use two positive lookaheads.
// Passed:2. Your regex should not match the string astronaut
// Passed:3. Your regex should not match the string banan1
// Passed:4. Your regex should match the string bana12
// Passed:5. Your regex should match the string abc123
// Passed:6. Your regex should not match the string 12345
// Passed:7. Your regex should match the string 8pass99
// Passed:8. Your regex should not match the string 1a2bcde
// Passed:9. Your regex should match the string astr1on11aut