const mixData = require('../libs/mix-data');

describe('#mixData', () => {
  it('should return correct data', () => {
    const mixins = [{
      data: {
        a: 1
      }
    }];
    const nativeData = {
      b: 2
    };
    mixData(mixins, nativeData).should.deep.eq({
      b: 2,
      a: 1
    });
  });
});
