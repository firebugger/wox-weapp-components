import isFunction from './is-function';

const STATIC_METHODS = [
  'onLoad', 'onReady', 'onShow', 'onHide', 'onUnload',
  'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll'
];

module.exports = (mixins) => {
  const methods = {};

  mixins.forEach((item) => {
    if (!!item['methods']) {
      for (let method in item['methods']) {
        if (STATIC_METHODS.indexOf(method) == -1 && isFunction(item['methods'][method])) {
          methods[method] = item['methods'][method];
        }
      }
    }
  });

  return methods;
}
