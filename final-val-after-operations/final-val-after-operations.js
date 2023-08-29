/**
 * @param {string[]} operations
 * @return {number}
//  */
// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

// declare addOperation variable assigned to an array of elements with "++X" and "X++" => incrementing
// declare minusOperation variable assigned to an array of elements with "--X" and "X--" => decrementing
// declare total variable assigning it to 0
// for loop through
// check if operations[i] includes addOperation, if so ++ each time the elements are in the array
// check if operations[i] includes minusOperation, if so -- each time the elements are in the array
// return total outside of the for loop which is the final value after all operations

var finalValueAfterOperations = function (operations) {
  let addOperation = ["++X", "X++"];
  let minusOperation = ["--X", "X--"];
  let total = 0;
  for (let i = 0; i < operations.length; i++) {
    if (addOperation.includes(operations[i])) {
      total++;
    } else if (minusOperation.includes(operations[i])) {
      total--;
    }
  }
  return total;
};
