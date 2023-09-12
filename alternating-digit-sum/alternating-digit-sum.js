/**
 * @param {number} n
 * @return {number}
 */

// You are given a positive integer n. Each digit of n has a sign according to the following rules:

// The most significant digit is assigned a positive sign.
// Each other digit has an opposite sign to its adjacent digits.
// Return the sum of all digits with their corresponding sign.

// declare total variable assigned to 0
// reassign n to use toString() method and split('') method to get each number in the string on its own
// for loop
// check if i is event then += the element to total
// else -= the element to total
// outside of the for loop return total

var alternateDigitSum = function (n) {
  let total = 0;
  n = n.toString().split("");
  for (let i = 0; i < n.length; i++) {
    if (i % 2 == 0) {
      total += parseInt(n[i]);
    } else {
      total -= parseInt(n[i]);
    }
  }
  return total;
};
