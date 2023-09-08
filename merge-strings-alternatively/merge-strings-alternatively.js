/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// declare arr variable assigned to an empty array
// check if word1 length is greater than word2 length or if word1 and word2 length are the same, for loop through and use the length of word1 for the condition, push word1 and word2 elements to arr which when finishing wll be alternative
// else if word2 length is greater than word1 length then use word2 length as the condition in the for loop and do the same with pushing elements to arr
// outside of the for loop return arr and use join method to convert array into a string

var mergeAlternately = function (word1, word2) {
  let arr = [];
  if (word1.length > word2.length || word1.length == word2.length) {
    for (let i = 0; i < word1.length; i++) {
      arr.push(word1[i]);
      arr.push(word2[i]);
    }
  } else if (word2.length > word1.length) {
    for (let i = 0; i < word2.length; i++) {
      arr.push(word1[i]);
      arr.push(word2[i]);
    }
  }
  return arr.join("");
};
