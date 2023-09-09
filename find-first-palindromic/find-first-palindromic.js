/**
 * @param {string[]} words
 * @return {string}
 */
// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

//  declare first variable assigned to an empty array
// for loop through
// declare isPalin variable assigned to reversing each element in the array
// check if the elements in isPalin == words[i], meaning they are a palindrome
// using a ternary operator, if first has a length, then return the first element in the array, else return an empty string meaning there are no elements that are a palindrome

var firstPalindrome = function (words) {
  let first = [];
  for (let i = 0; i < words.length; i++) {
    let isPalin = words[i].split("").reverse().join("");
    if (isPalin == words[i]) {
      first.push(words[i]);
    }
  }
  return first.length ? first[0] : "";
};
