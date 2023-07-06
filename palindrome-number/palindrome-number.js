// Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
/**
 * @param {number} x
 * @return {boolean}
 */

// declare palin variable assigned to x and use toString() .split('') .reverse() .join('') methods
// return directly to output a boolean if the number is a palindrome, meaning the same backwards as it is forwards
// wrap palin using the Number() method to ensure the comparison is happening of 2 numbers
var isPalindrome = function(x) {
    let palin = x.toString().split('').reverse().join('')
    return Number(palin) === x
};

console.log(isPalindrome(121)) // true
console.log(isPalindrome(10)) // false