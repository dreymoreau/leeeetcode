/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */

// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

// check first if letter is even in the s string, if not return 0 right away
// declare total variable assigned to length of s string
// declare count variable assigned to 0
// for loop through
// check if s[i] includes letter, for everytime it does count++
// outside of the for loop return count / total * 100, wrapping it in the Math.floor method to round down to the nearest whole number as the instructions want

var percentageLetter = function (s, letter) {
  if (!s.includes(letter)) {
    return 0;
  }
  let total = s.length;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].includes(letter)) {
      count++;
    }
  }
  return Math.floor((count / total) * 100);
};
