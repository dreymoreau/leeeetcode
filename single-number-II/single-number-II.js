// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


// declare an obj variable assigned to an empty object
// for loop
// assign obj passing in nums[i] to either be + 1 or is 1 if it only shows up once, using ternary
// outside of the for loop, declare one variable and assign it to the Object.entries method passing in the entire object from obj, this creates nested arrays with key/values from obj inside of an array
// sort in ascending order
// check if [0][1] which is the first array and second element inside of the array if it equals one and if it does, return the element in the first position using the Number object to output an element with the type of number

// 
/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1
    }
    let one = Object.entries(obj)
    one.sort((a,b) => a[1] - b[1])
    if(one[0][1] == 1) {
        return Number(one[0][0])
    }
};

console.log(singleNumber([2,2,3,2])) // output => 2

