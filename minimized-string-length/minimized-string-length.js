// Given a 0-indexed string s, repeatedly perform the following operation any number of times:

// Choose an index i in the string, and let c be the character in position i. Delete the closest occurrence of c to the left of i (if any) and the closest occurrence of c to the right of i (if any).
// Your task is to minimize the length of s by performing the above operation any number of times.

// Return an integer denoting the length of the minimized string.

// declare arr variable set to an empty array
// for loop through
// check if the elements in s are not in arr, if so, push to the arr array, this will remove all strings that reoccur
// return arr.length to get the number of elements now in the minimized string

/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let arr =[]
    for(let i = 0; i < s.length; i++){
        if(!arr.includes(s[i])){
            arr.push(s[i])
        }
    }
    return arr.length
};