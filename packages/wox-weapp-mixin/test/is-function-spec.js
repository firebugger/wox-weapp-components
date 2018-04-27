const isFunction = require('../libs/is-function');

describe('#isFunction', () => {
  it('should return true if it\'s a function', () => {
    const fn = function() {};
    isFunction(fn).should.be.true;
  });

  it('should return false if it\'s a number', () => {
    const num = 1;
    isFunction(num).should.be.false;
  });

  it('should return false if it\'s a string', () => {
    const str = 'str';
    isFunction(str).should.be.false;
  });
});
