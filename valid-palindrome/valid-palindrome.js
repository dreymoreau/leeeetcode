// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */

// declare palin variable assigning it to s and replace with anything that arent letters, or numbers, like trailing white space, also use toLowerCase string method
// return palin and use split, reverse and join method and see if that is equal to palin before using these methods, if it is a palindrome then it will return true, else false

var isPalindrome = function (s) {
  let palin = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return palin.split("").reverse().join("") === palin;
};
