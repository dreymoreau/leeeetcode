/**
 * @param {number[]} nums
 * @return {number}
 */
// sort in ascending order
// loop through
// check if nums[i] == nums[i+1] if so return that element, which would be the duplicate number
function findDuplicate(nums) {
    nums.sort((a,b) => a - b)
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1]){
            return nums[i]
        }
    }
};

console.log(findDuplicate([1,1,1,2])) // output => 2