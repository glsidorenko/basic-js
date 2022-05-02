const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  constructor(value) {

    value === false ? this.type = 'reverse'
    : this.type = 'direct';
    this.mod = (n, m) => (n % m + m) % m
    this.table= ["A","B","C","D","E",
                "F","G","H","I","J","K","L","M",
                "N","O","P","Q","R","S","T","U",
                "V","W","X","Y","Z"];
  }

  isInputValuesOk(message, key) {
    if (!message || !key || typeof message !=='string' || typeof key !=='string') {
      throw new Error('Incorrect arguments!');
    } else {
      return true;
    }
  }

  encrypt(message, key) {
    this.isInputValuesOk(message, key);
    let charIndex =- 1,
        encryptedMessage = message.toUpperCase().split('').map( elem => {
      if (this.table.indexOf(elem) === -1) return elem;
      charIndex++;
      return this.table[this.mod((this.table.indexOf(elem)+this.table.indexOf(key.toUpperCase()[charIndex%key.length])),this.table.length)];
    }).join('');
    return this.type === 'direct' ? encryptedMessage 
    : encryptedMessage.split('').reverse().join('');
  }
  
  decrypt(encryptedMessage, key) {
    this.isInputValuesOk(encryptedMessage, key);
    let charIndex =-1,
        message = encryptedMessage.toUpperCase().split('').map( elem => {
      if (this.table.indexOf(elem)===-1) return elem;
      charIndex++;
      return this.table[Math.abs(this.mod((this.table.indexOf(elem) - this.table.indexOf(key.toUpperCase()[charIndex % key.length])),this.table.length))];
    }).join('');
    return this.type === 'direct' ? message 
    : message.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
