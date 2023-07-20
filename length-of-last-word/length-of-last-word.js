// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.


// reassign s to s.trim() then use split method at every space in between words
// for loop through
// return s[s.length-1].length to get the length of the last element in the array
function lengthOfLastWord(s) {
    s = s.trim().split(' ')
   for(let i = 0; i < s.length; i++){
       return s[s.length-1].length
   }
};

console.log(lengthOfLastWord("   fly me   to   the moon  ")) // moon 4
console.log(lengthOfLastWord("luffy is still joylife")) // joylife 7