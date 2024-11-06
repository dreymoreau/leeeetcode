// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// sort in ascending order
// loop through
// if an element nums[i] == nums[i+1] return true
// if not return false
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
  }
  return false;
};

// ou cool!!!!! check this updated way :0 HASHMAP!!!

//  will always be an array,, will always be number values in vthe array,, never any letters or other objects,, arrays etc.
// returning true if any value appears at least twice in the array and return false if ever element is distinct
// Input: nums = [1,2,3,1]
// Output: true
// Input: nums = [1,2,3,4]
// Output: false

// create an empty object called obj
// use the for of loop to check if the element already exists in the object return true,, if not then assign the value of true to the element in the obj object
var containsDuplicate = function(nums) {
  let obj = {}
  for(let key of nums){
      if(obj[key]){
          return true
      } else {
          obj[key] = true
      }
  }
  return false
};
