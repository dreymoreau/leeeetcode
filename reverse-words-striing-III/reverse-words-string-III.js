/**
 * @param {string} s
 * @return {string}
 */
// declare reverse variable assigned to split('') reverse() join('')
// return reverse using split(' ') .reverse() .join(' ')
var reverseWords = function (s) {
  let reverse = s.split("").reverse().join("");
  return reverse.split(" ").reverse().join(" ");
};
