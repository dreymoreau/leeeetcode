/**
 * @param {number} x
 * @return {number}
 */

// declare arr variable and assign it to Math.abs which gets the absolute value, use string method, split, reverse and join back
// check if when reversing it goes outside of the signed 32-bit integer being 2 to the power of the 31, return 0 if it does
// outside the if statement return arr * Math.sign(x) which indicates if the original number was positive or negative, with this testcase the original number was negative so the outputted number will still remain negative
var reverse = function(x) {
    let arr = Math.abs(x).toString().split('').reverse().join('')
    if(arr > 2**31){
    return 0
    }
    return arr * Math.sign(x)
};

console.log(reverse(-123)) // -321