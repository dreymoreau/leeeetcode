// You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

// Return the array ans. Answers within 10-5 of the actual answer will be accepted.

// Note that:

// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00

// declare kelvin variable assigned to celsius + 273.15
// declare farenheit varoable assigned to celsius * 1.80 + 32
// return kelvin and farenheit, nested in an array

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  let kelvin = celsius + 273.15;
  let farenheit = celsius * 1.8 + 32;
  return [kelvin, farenheit];
};
