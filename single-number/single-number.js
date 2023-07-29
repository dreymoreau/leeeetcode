// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// declare a variable to an empty object
// for loop through
// assign each value to be a key value pair of +1 or is 1 if it shows up once in the array
// declare arr variable and assign it to Object.entries method passing in obj, this gets all key
// value pairs from the obj and creates nested arrays
// sort in ascending order
// check if arr[0][1] == 1 
// return arr[0][0] surrounding it with the Number object to ensure its output is a number

function singleNumber(nums) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] +1 :1
    }
    let arr = Object.entries(obj)
    
    arr.sort((a,b) => a[1] - b[1])
    if(arr[0][1] == 1){
        return Number(arr[0][0])
    }
}
console.log(singleNumber([2,2,1])) // 1