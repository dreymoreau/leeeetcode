// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// declare obj variable to an empty object
// for loop through
// check if the element shows up more than 1 time or 1 time
// declare arr variable assigning it to Object.entries method and passing in object
// all the key value pairs are now arrays nested inside of an array
// declare unique variable to an empty array
// for loop through
// check if any of the 2nd elements in the array equal 1, if so push to unique array
// surrounding it with the Number object to ensure that the element type is a number
// return unique
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }
  let arr = Object.entries(obj);
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === 1) {
      unique.push(Number(arr[i][0]));
    }
  }
  return unique;
};
