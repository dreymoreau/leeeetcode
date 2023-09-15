/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// reassign s and t string to use split method, sort alphabetically and then rejoin into a string
// return s == t to see if they equal each other, if returns true it means the 2 strings are anagrams, if false then they arent

var isAnagram = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s == t;
};
