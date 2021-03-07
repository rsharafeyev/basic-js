const CustomError = require("../extensions/custom-error");

const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')

class VigenereCipheringMachine {

  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(str, key)
  {
    if (!str || !key)
      throw Error('Error');
    let arrStr = str.toUpperCase().split('');
    let ArrKey = key.toUpperCase().split('');
    let result = [];
    for (let i = 0; i < arrStr.length; i++)
    {
      if (abc.includes(arrStr[i]))
      {
        if (ArrKey.length < arrStr.length)
          ArrKey.push(ArrKey[i]);
        let charID = (abc.indexOf(arrStr[i]) + abc.indexOf(ArrKey[i])) % abc.length;
        result.push(abc[charID]);
      } else {
        result.push(arrStr[i]);
        ArrKey.splice(i, 0, ' ');
      }
    }
    if (!this.mode)
      result.reverse();
    return result.join('');
  }

  decrypt(str, key)
  {
    if (!str || !key)
      throw Error('Error')
    let arrStr = str.toUpperCase().split('');
    let arrKey = key.toUpperCase().split('');
    let result = [];
    for (let i = 0; i < arrStr.length; i++)
    {
      if (abc.includes(arrStr[i]))
      {
        if (arrKey.length < arrStr.length)
          arrKey.push(arrKey[i]);
        let charID = abc.indexOf(arrStr[i]) - abc.indexOf(arrKey[i]);
        if (charID < 0)
          charID = charID + abc.length;
        result.push(abc[charID]);
      } else {
        result.push(arrStr[i]);
        arrKey.splice(i, 0, ' ');
      }
    }
    if (!this.mode)
      result.reverse();
    return result.join('')
  }
}

module.exports = VigenereCipheringMachine;