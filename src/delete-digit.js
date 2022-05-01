const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  
  let temp = [],
      i = 1;

  while (parseInt(n / i) > 0) {
    temp.push(parseInt(n / (10 * i)) * i + n % i);
    i *= 10;
  }

  return Math.max(...temp);
}

module.exports = {
  deleteDigit
};
