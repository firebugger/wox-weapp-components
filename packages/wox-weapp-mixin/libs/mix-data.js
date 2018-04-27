const assign = Object.assign;

module.exports = (mixins, nativeData) => {
  const data = {};

  mixins.forEach((item) => {
    if (!!item['data']) {
      assign(data, nativeData, item['data']);
    }
  });

  return data;
}
