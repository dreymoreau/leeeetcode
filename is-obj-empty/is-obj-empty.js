// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
// use for in loop for objects
// check if object has a property using hasOwnProperty method and by passing in the variable declared in the for in loop
// return false if there is 1 or more elements inside of the object
// return true if the object is empty
var isEmpty = function (obj) {
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};
