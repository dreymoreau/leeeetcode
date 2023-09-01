/**
 * @param {number} n
 * @return {number}
 */
// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
// check if n is odd if no return its multiple of 2
// else return n as its the smallest positive integer that is a multiple of both 2 and n
var smallestEvenMultiple = function (n) {
  if (n % 2 == 1) {
    return n * 2;
  } else {
    return n;
  }
};
