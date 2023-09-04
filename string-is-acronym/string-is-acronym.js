/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
// Given an array of strings words and a string s, determine if s is an acronym of words.

// The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

// Return true if s is an acronym of words, and false otherwise.

// declare firstLetters variable assigned to an empty array
// for loop through
// get every first letter of each element in the string and push it to firstLetters
// outside of the for loop declare compare variable assigning it to firstLetters and use join('') method to convert back to string
// return compare == s, if it does equal then it will return true, if not the output will be false

var isAcronym = function (words, s) {
  let firstLetters = [];
  for (let i = 0; i < words.length; i++) {
    firstLetters.push(words[i][0]);
  }
  let compare = firstLetters.join("");
  return compare == s;
};

// faster solution

var isAcronym = function (words, s) {
  let firstWord = "";
  for (let i = 0; i < words.length; i++) {
    firstWord += words[i][0];
  }
  return s === firstWord;
};
