const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(isNaN(+sampleActivity) || sampleActivity==0 || typeof(sampleActivity) != 'string'){return false;}
  let result = Math.ceil(1 / (Math.LN2 / 5730) * Math.log(15 / +sampleActivity));
  return ((result > 0) ? result : false);
};
