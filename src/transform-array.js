const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr))
    throw Error();
  if (arr.length == 0)
    return [];
  
  
  function filterDiscarded(item) {
     return item !== '~:[Discarded]:~';
  }

  let result = [];
  for (let i = 0; i < arr.length; i++)
  {
  	if (arr[i] == '--discard-next')
    {
    	if(i == arr.length - 1) {continue;};
    	result.push('~:[Discarded]:~');
    	i = i + 1;
      continue;
    } else
    if (arr[i] == '--discard-prev')
    {
    	if(i == 0) {continue;}
    	result.pop();
      continue;
    } else
    if(arr[i] == '--double-next')
    {
    	if(i == arr.length - 1){continue;}
      result.push(arr[i + 1]);
      continue;
    } else
    if(arr[i] == '--double-prev')
    {
      if(i == 0) {continue;}
    	result.push(result[result.length - 1]);
      continue;
    }
    result.push(arr[i]);
  }
  return result.filter(filterDiscarded);
};
