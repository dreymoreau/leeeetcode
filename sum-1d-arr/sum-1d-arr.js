// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// declare sum variable assigning it to 0
// map through nums array to turn a new array and add each number to sum, which will be each element in the new array
var runningSum = function (nums) {
  let sum = 0;
  return nums.map((num) => (sum += num));
};
