const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * transform([1, 2, 3, '--discard-next', 4, 5]) => [1, 2, 3, 5]
 * transform([1, 2, 3, '--double-prev', 4, 5]) => [1, 2, 3, 3, 4, 5]
 */
 function transform(arr) {

  let newArray = [];

  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--discard-prev') {
      newArray.pop();
    } else if (arr[i] === '--double-prev') {
      arr[i - 1] && newArray.push(newArray[newArray.length - 1]); 
    } else if (arr[i] === '--discard-next') {
      newArray.push('discard');
      i++; 
    } else if (arr[i] === '--double-next') {
      arr[i + 1] && newArray.push(arr[i + 1]);
    } else {
      newArray.push(arr[i]);
    }
  }
  
  return newArray.filter(elem => elem !== 'discard');
}

module.exports = {
  transform
};
