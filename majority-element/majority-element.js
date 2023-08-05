// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
/**
 * @param {number[]} nums
 * @return {number}
 */

// declare obj variable set to an empty object
// for loop through
// set obj[nums[i]] to either be plus one or is 1 depending on how many times it is shown
// outside of the for loop declare arr assinging it to Object.entries method passing in obj
// this will now be an array of nested arrays
// sort in descending order using the second element in each array
// return [0][0] which will be the highest number

var majorityElement = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }
  let arr = Object.entries(obj);
  arr.sort((a, b) => b[1] - a[1]);
  return arr[0][0];
};
