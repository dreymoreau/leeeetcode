// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// for loop through
// check if any of the elements inside of the array equals the target element, return i to get the index if the target is in the array
// return -1 if not
var search = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            return i
        }
    }
     return -1
};

//solution using binary search
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Target found, return the index
        } else if (nums[mid] < target) {
            left = mid + 1; // Target is on the right half
        } else {
            right = mid - 1; // Target is on the left half
        }
    }

    return -1; // Target not found
};