/**
 * @param {string} sentence
 * @return {boolean}
 */

// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false

// declare obj variable assigned to an empty object
// for loop through
// add each element to the object to be + 1 or either be one
// outside of the for loop declare arr variable assigned to Object.entries method passing in obj, which puts all key values into an array
// return directly arr.length == 26, which means that each letter in the alphabet is included in the string and is a pangram, if not it will return false

var checkIfPangram = function (sentence) {
  let obj = {};
  for (let i = 0; i < sentence.length; i++) {
    obj[sentence[i]] = obj[sentence[i]] ? obj[sentence[i]] + 1 : 1;
  }
  let arr = Object.entries(obj);
  return arr.length == 26;
};
