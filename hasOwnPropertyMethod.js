// Testing Objects for Properties
// To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.

// 

// solution

function checkObj(obj, checkProp) {
    // Only change code below this line
    return obj.hasOwnProperty(checkProp)? obj[checkProp]: "Not Found";
    // Only change code above this line
  }
  
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"))