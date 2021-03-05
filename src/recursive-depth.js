const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) 
  {
    if (!Array.isArray(arr))
      return 0;
    let result = 1;

    for (let i = 0; i < arr.length; i++)
    {
      if (Array.isArray(arr[i]))
        result = Math.max(result, this.calculateDepth(arr[i]) + 1);
    }
    return result;
  }
};