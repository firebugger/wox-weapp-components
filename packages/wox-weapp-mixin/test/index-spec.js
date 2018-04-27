const main = require('../index');

describe('#main', () => {
  describe('should return new configs', () => {
    const mixins = [{
      data: {
        a: 1
      },
      methods: {
        sayA: function() {}
      }
    }, {
      data: {
        b: 2
      },
      methods: {
        sayB: function() {}
      }
    }, {
      methods: {
        onShow: function() {}
      }
    }, {
      methods: {
        hello: 'world'
      }
    }];
    const newConfigs = main({
      data: {
        c: 3,
        d: 4
      },
      mixins: mixins,
      onLoad: function() {},
      sayC: function() {},
      sayD: function() {}
    });
    it('should contain the correct data', () => {
      newConfigs.should.have.property('data').to.deep.eq({
        a: 1,
        b: 2,
        c: 3,
        d: 4
      });
    });
    it('should contain the correct methods', () => {
      newConfigs.should.have.property('sayA');
      newConfigs.should.have.property('sayB');
      newConfigs.should.have.property('sayC');
      newConfigs.should.have.property('sayD');
    });
    it('should contain the lifecycle methods `onLoad`', () => {
      newConfigs.should.have.property('onLoad');
    });
    it('could not extend the lifecycle methods `onShow`', () => {
      newConfigs.should.have.not.property('onShow');
    });
    it('should not contain methods `hello`', () => {
      newConfigs.should.have.not.property('hello');
    });
  });
});
