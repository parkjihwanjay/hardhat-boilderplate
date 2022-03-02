const BigNumber = require('bignumber.js');
class Utils {
  static isAddress(address) {
    return typeof address === 'string' && address.length === 42
  }
  static checkAddress(address){
    const isAddress = Utils.isAddress(address);
    if(!isAddress) throw new Error('address not right');
  }
  static etherMantissa(num, scale = 1e18) {
    if (num < 0) return new BigNumber(2).pow(256).plus(num);
    return new BigNumber(num).times(scale);
  }
}

module.exports = Utils;