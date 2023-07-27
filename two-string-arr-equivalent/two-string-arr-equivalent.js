// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// declare one and two variables assigning it to word1 and word2 using the join method, this ensures that if the strings are the same they will now represent that being joined together
// return one == two, which will be true if they are the same and false if not
var arrayStringsAreEqual = function(word1, word2) {
    let one = word1.join('')
    let two = word2.join('')
    console.log(one,two)
    return one == two
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))