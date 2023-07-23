// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// declare arr variable to an empty array
// loop through
// push nums[i] to arr
// outside of the for loop return and use concat method with nums passing in arr
 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let arr = []
    for(let i = 0; i < nums.length; i++){
        arr.push(nums[i])
    }
    return nums.concat(arr)
};

