// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */

// reassign s1 and s2 strings to split into an array
// assign sentence to concat s1 and s2 to get all the elements into one array
// declare obj variable assigned to an empty object
// for loop through and check if each element in the array shows up once or more than once
// outside of the for loop declare unique variable assigned to an empty array
// use for in loop to iterate through the object and check if the value of the key is less than or equals to one, push the key to the unique array
// return unique array outside of the for in loop

var uncommonFromSentences = function (s1, s2) {
  s1 = s1.split(" ");
  s2 = s2.split(" ");
  let sentence = s1.concat(s2);
  let obj = {};
  for (let i = 0; i < sentence.length; i++) {
    obj[sentence[i]] = obj[sentence[i]] ? obj[sentence[i]] + 1 : 1;
  }
  let unique = [];
  for (let key in obj) {
    if (obj[key] <= 1) {
      unique.push(key);
    }
  }
  return unique;
};
