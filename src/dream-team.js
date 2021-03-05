const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length == 0)
    return false;
  let name = [];
  for (item of members)
  {
    if (typeof(item) == 'string')
      name.push(item.trim().charAt(0).toUpperCase());
  }
  return name.sort().join('');
};
