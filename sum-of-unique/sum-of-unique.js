/**
 * @param {number[]} nums
 * @return {number}
 */

// declare obj variable assigning it to an empty object
// for loop through
// see how many times an element shows up either being + 1 or is 1
// declare uniques array outside of for loop
// use for in loop
// check if obj[key] == 1, push to uniques using Number method wrapping the key
// return uniques and use reduce method to sum the array

function sumOfUnique(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }

  // can also skip for loop above by doing this
  nums.forEach((num) => (obj[num] = (obj[num] || 0) + 1));

  let uniques = [];
  for (let key in obj) {
    if (obj[key] == 1) {
      uniques.push(Number(key));
    }
  }
  return uniques.reduce((prev, curr) => prev + curr, 0);
}

console.log(sumOfUnique([1, 2, 3, 4, 5, 6, 6])); // 15

// alternate solution

var sumOfUnique = function (nums) {
  let freq = {};
  nums.forEach((num) => (freq[num] = (freq[num] || 0) + 1));

  let uniques = 0;

  for (let key in freq) {
    if (freq[key] == 1) {
      uniques += Number(key);
    }
  }
  return uniques;
};
