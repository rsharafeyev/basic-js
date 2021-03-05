const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined)
    return 'Unable to determine the time of year!';
  try {date.toDateString();}
  catch(err){throw new Error(err);}


  let Season = [];
  Season[0] = 'winter';
  Season[1] = 'winter';
  Season[2] = 'spring';
  Season[3] = 'spring';
  Season[4] = 'spring';
  Season[5] = 'summer';
  Season[6] = 'summer';
  Season[7] = 'summer';
  Season[8] = 'autumn';
  Season[9] = 'autumn';
  Season[10] = 'autumn';
  Season[11] = 'winter';
  
  let aMonth = date.getMonth();
  return Season[aMonth];
};
