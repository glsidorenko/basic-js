const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] === undefined) {
      this.clearChain();
      throw new Error(`You can't remove incorrect link!`);
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  clearChain() {
    this.chain = [];
  },
  finishChain() {
    const resultChain = this.chain.map( (item, i) => {
      return (i === 0) ?  `( ${item} )` : `~~( ${item} )`;
    }).join('');
    this.clearChain();
    return resultChain;
    // '( 1 )~~( 2 )~~( 3 )'
  }
};

module.exports = {
  chainMaker
};
