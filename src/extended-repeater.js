const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.addition === null){options.addition = 'null';}
  let 
  {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  return Array(repeatTimes).fill(str + Array(additionRepeatTimes).fill(addition).join(additionSeparator)).join(separator);
};
  