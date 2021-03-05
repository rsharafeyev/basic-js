const CustomError = require("../extensions/custom-error");

const chainMaker = {
  items: [],
  getLength()
  {
    return this.items.length;
  },
  addLink(value)
  {
    this.items.push(((value === undefined) ? '' : value));
    return chainMaker;
  },
  removeLink(position)
  {
    if(isNaN(position) || position <= 0 || position >= this.items.length)
    {
      this.items = [];
      throw Error();
    }
    this.items.splice(position-1, 1);
    return chainMaker;
  },
  reverseChain()
  {
    this.items.reverse();
    return chainMaker;
  },
  finishChain()
  {
    for(let i = 0; i < this.items.length; i++)
    {
      this.items[i] = '( ' + this.items[i] + ' )';
      if(i !== this.items.length - 1)
      {
        this.items[i] = this.items[i] + '~~';
      }
    }
    let result = this.items.join('');
    this.items = [];
    return result;
  }
};

module.exports = chainMaker;
