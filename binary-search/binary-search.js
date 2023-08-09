// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// binary search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // to get left side of the array
  let left = 0;
  // to have an end point
  let right = nums.length - 1;

  // have the while loop run as long its in the boundaries of the array
  while (left <= right) {
    // set mid point
    let mid = Math.floor((left + right) / 2);

    // check if target is right at the mid point, return index
    if (nums[mid] == target) {
      return mid;
      //the target is on right half of the mid point
    } else if (nums[mid] < right) {
      left = mid + 1;
      // the target is on the left half of the mid point
    } else {
      right = mid - 1;
    }
  }

  // the target doesnt exist
  return -1;
};

// linear search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// for loop through
// check if any of the elements inside of the array equals the target element, return i to get the index if the target is in the array
// return -1 if not
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
  }
  return -1;
};
