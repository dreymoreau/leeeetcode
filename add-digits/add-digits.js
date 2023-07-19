// Given an integer num, repeatedly add all its digits until the result has only one digit, 
// and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

// declare arr variable assigned to num.toString() use split method to turn everything into an 
// array and then use map method passing in the Number object so that all elements in the array's type is a number
// decare sum variable assigning it to arr variable and using reduce method
// check if sum is greater than 9, then call the addDigits function and pass in sum variable which will 
// use the reduce method until the number is less than or equals to 9 ((recursion))
// if sum is already less than or equals to 9, then return sum

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let arr = num.toString().split('').map(Number)
    let sum = arr.reduce((prev,curr) => prev + curr,0)
    
  if(sum > 9){
       return addDigits(sum)
    } else if(sum <= 9){
        return sum
     }
  };


  // refactored solution
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = num.toString().split('').map(Number).reduce((prev,curr) => prev + curr,0)
     
     if(sum > 9){
        return addDigits(sum)
     } else if(sum <= 9){
         return sum
      }
  };