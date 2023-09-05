/**
 * @param {string} s
 * @return {string}
 */
// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// reassign s to split method
//for loop through
// use truthy statement and check if any element in the array is uppercased, then reassign the letter to be a lowercased letter
// outside of the for loop return s and use join method to convert back into a string

var toLowerCase = function (s) {
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase()) {
      s[i] = s[i].toLowerCase();
    }
  }
  return s.join("");
};
