/**
 * Page mixins
*/

const mixData = require('./libs/mix-data');
const mixMethod = require('./libs/mix-method');

module.exports = (configs) => {
  const { mixins, data, ...others } = configs;

  return {
    data: mixData(mixins, data),
    ...mixMethod(mixins),
    ...others
  }
};
