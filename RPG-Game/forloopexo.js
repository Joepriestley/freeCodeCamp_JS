
// Modify function multiplyAll so that it returns the product of all the numbers //in the sub-arrays of arr


function multiplyAll(arr) {
    let product = 1; // Initialize the product to 1 since we are multiplying numbers.
    
    // Iterate over the outer array (each sub-array in the 2D array).
    for (let i = 0; i < arr.length; i++) {
      
      // Iterate over the elements in the current sub-array.
      for (let j = 0; j < arr[i].length; j++) {
        
        // Multiply the current element to the product.
        product *= arr[i][j];
      }
    }
  
    // Return the total product of all elements in the 2D array.
    return product;
  }
  