const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRING PLUS 00 PLUS 00 PLUS
 * **STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 */

function repeater(str, options) {

  let result = [];
  let add = [];
  const string = String(str),
        repeatTimes = options.repeatTimes || 1,
        separator = options.separator || '+',
        addition = (options.addition !== undefined) ? String(options.addition) : '',
        additionRepeatTimes = options.additionRepeatTimes || 1,
        additionSeparator = options.additionSeparator || '|';

  for (let i = 0; i < additionRepeatTimes; i++) {
    add.push(addition);
  }
  
  add = add.join(additionSeparator);

  for (let i = 0; i < repeatTimes; i++) {
    result.push(`${string}${add}`);
  }

  return result.join(separator);
}

module.exports = {
  repeater
};