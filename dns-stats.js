const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  let domain,
      domainStr = '',
      object = {};

  for (let elem of domains) {
    domain = elem.split('.').reverse(); // массив ru.yandex.code

    for (let i = 0; i < domain.length; i++) {
      domainStr = '.' + domain.slice(0, i + 1).join('.'); //массив domainStr = .ru
      if (!object[domainStr]) object[domainStr] = 1; 
      else object[domainStr]++;
    }
  }

  return object;
}

module.exports = {
  getDNSStats
}
