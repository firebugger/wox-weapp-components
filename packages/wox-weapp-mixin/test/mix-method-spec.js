const mixMethod = require('../libs/mix-method');

describe('#mixMethod', () => {
  it('should return correct method', () => {
    const mixins = [{
      methods: {
        sayHello: function() {}
      }
    }];
    mixMethod(mixins).should.have.property('sayHello');
  });

  it('should do not return Function `onLoad`', () => {
    const mixins = [{
      methods: {
        onLoad: function() {}
      }
    }];
    mixMethod(mixins).should.not.have.property('onLoad');
  });
});
