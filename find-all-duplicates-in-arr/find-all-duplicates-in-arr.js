/**
 * @param {number[]} nums
 * @return {number[]}
 */

// declare obj variable to an empty object
// for loop through
// assign obj[nums[i]] to either be + 1 or is 1
// declare double variable to an empty array
// use for in loop to check if obj[key] === 2, if key is 2 push to double, surrounding using the Number object to ensure that the element is a number
// outside of the for in loop return double
var findDuplicates = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }

  let double = [];
  for (let key in obj) {
    if (obj[key] == 2) {
      double.push(Number(key));
    }
  }
  return double;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1], [2, 3]));
