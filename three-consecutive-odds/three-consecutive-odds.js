/**
 * @param {number[]} arr
 * @return {boolean}
 */

// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

// for loop through and check if there are 3 numbers in a row that are odd, return true if so
// outside of the for loop return false, meaning there is not 3 odds in a row
var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 1) {
      return true;
    }
  }
  return false;
};
