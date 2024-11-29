function countdown(n) {
    // Base case: if n is less than 1, return an empty array
    if (n < 1) {
    return [];
    } else {
    // Recursive case: get the countdown array for n-1
    const myArray = countdown(n - 1);
    // Add the current number n to the array
    myArray.push(n);
    // Return the array sorted in descending order
    return myArray.sort((a, b) => a - b).reverse();
    }
    }
    
    // Test the countdown function with different values
    console.log(countdown(10)); // Should print [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    console.log(countdown(5)); // Should print [5, 4, 3, 2, 1]


    function countdown(n) {
        // Base case: if n is less than 1, return an empty array
        if (n < 1) {
        return [];
        } else {
        // Recursive case: get the countdown array for n-1
        const myArray = countdown(n - 1);
        // Add the current number n to the array in descending order using unshift
        myArray.Unshift(n);
        // Return 
        return myArray;
        }
        }


    function countdown(n) {
        // Base case: if n is less than 1, return an empty array
        if (n < 1) {
        return [];
        } else {
        // Recursive case: get the countdown array for n-1
        const myArray = countdown(n - 1);
        // Add the current number n to the array in descending order using unshift
        myArray.Unshift(n);
        // Return 
        return myArray;
        }
        }

/////////

        function countdown(n){
            return n<1? []:[n].concat(countdown(n-1))
        }

