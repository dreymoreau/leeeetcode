/**
 * @param {string} title
 * @return {string}
 */
// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

// reassign title to use lowercase method and then split each other in the string into their own element
// for loop through
// check if the elements inside of the array have a length greater than 2, if so than reassign each element to uppercase the first letter and then + the rest of the word using slice and passing in the number 1 which will skip over the first letter in the word
// else reassign each element to be lowercase if the length of the word is less than 3
// return title and use join method to turn it back into one string

var capitalizeTitle = function (title) {
  title = title.toLowerCase().split(" ");
  for (let i = 0; i < title.length; i++) {
    if (title[i].length > 2) {
      title[i] = title[i][0].toUpperCase() + title[i].slice(1);
    } else {
      title[i] = title[i].toLowerCase();
    }
  }
  return title.join(" ");
};
