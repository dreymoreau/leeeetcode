/**
 * @param {string} s
 * @return {string}
 */

// declare rev variable and assign it to s and use split method at every letter, reverse and then join
// return using rev variable but split at each word then use reverse and join back at every word
var reverseWords = function (s) {
  let rev = s.split("").reverse().join("");
  return rev.split(" ").reverse().join(" ");
};
