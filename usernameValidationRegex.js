
// //exercises///

// Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

// Usernames can only use alphanumeric characters.

// The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// Username letters can be lowercase and uppercase.

// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// Change the regex userCheck to fit the constraints listed above.


// //explanation


// The given regular expression can be broken down into two main parts, separated by the | (or) operator. Let's analyze each part:

// First Part: ^[A-Za-z][^\W\d_]+[\d]*$

// ^: Asserts the start of the string.
// [A-Za-z]: Matches any single letter (uppercase or lowercase).
// [^\W\d_]+: Matches one or more characters that are not:
// Non-word characters (\W), which includes symbols and spaces.
// Digits (\d).
// Underscores (_).
// This part ensures that after the initial letter, there can only be letters remaining, and it cannot include digits or certain special characters.
// [\d]*: Matches zero or more digits (0-9). This means the string can optionally end with digits.
// $: Asserts the end of the string.
// Overall, the first part matches strings that start with a letter, followed by one or more letters (no digits or special characters), and can optionally end with digits.

// Second Part: ^[A-Za-z][0-9][0-9]+$

// ^: Asserts the start of the string.
// [A-Za-z]: Matches any single letter (uppercase or lowercase).
// [0-9]: Matches exactly one digit (0 to 9).
// [0-9]+: Matches one or more digits (0 to 9) that must follow the first digit.
// $: Asserts the end of the string.
// The second part matches strings that start with a letter, followed directly by at least two digits.

// In summary, this regex matches:

// Strings that start with a letter, followed by one or more letters and optionally ending with digits (e.g., "abc", "abc123").
// Strings that start with a letter followed by at least two digits (e.g., "a12", "Z99").





let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z][^\W\d_]+[\d]*$|^[A-Za-z][0-9][0-9]+$/; // Change this line
let result = userCheck.test(username);
// or /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;