// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

// A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

// If the length of the array is 0, it should return init.

// Please solve it without using the built-in Array.reduce method.

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

//check first if the length of nums is 0, return init
// for loop through
// assign init to fn which is a function and pass in init, as a starting number (0) and all the numbers in nums
// return init, which will now have the sum

// this can all be done with reduce but asking to not use it in this challenge
var reduce = function(nums, fn, init) {
    if(nums.length == 0){
        return init
    }
    for(let i =0 ; i < nums.length; i++){
      init=fn(init,nums[i])
    }
    return init
};