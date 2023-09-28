/**
 * @param {number[][]} accounts
 * @return {number}
 */
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// declare sum variable and assign it to accounts, using map function to create a new array then use the argument passed in to use reduce method to sum each array
// declare highest variable and use sort method in descending order to get the highest amount in the 0th index
// return highest[0], which would be the greatest sum

var maximumWealth = function (accounts) {
  let sum = accounts.map((total) =>
    total.reduce((prev, curr) => prev + curr, 0)
  );
  let highest = sum.sort((a, b) => b - a);
  return highest[0];
};
