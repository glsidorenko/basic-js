const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // The minimal number of moves required to solve a Tower of Hanoi puzzle is 2^n − 1, where n is the number of disks.
  let numberOfTurns = Math.pow(2, disksNumber) - 1,
      overallSeconds = Math.trunc(numberOfTurns /  turnsSpeed * 3600);

  return {
    turns: numberOfTurns,
    seconds: overallSeconds
  };
}

module.exports = {
  calculateHanoi
};
