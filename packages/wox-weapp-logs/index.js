/**
 * 日志上报
 */

const fetch = function (flag, options) {
  try {
    wx.request({                      // need weapp runtime
      data: {
        code: options.code,           // {String} 自定义标志
        url: options.url,             // {String} 请求的 url
        time: options.time,           // {Number} 请求时长，单位：毫秒
        message: options.message,     // {String} 自定义消息
        result: flag                  // {Boolean} 上报的类型，`result: true` 代表是请求成功的上报，`result: false` 代表是请求失败的上报
      },
      url: 'https://www.ipptraveltech.com/xcx/logs',
      method: 'POST',
      success: function () {},
      fail: function () {}
    });
  } catch(e) {

  }
}

module.exports = {
  success: function (params) {
    fetch(true, {
      ...params
    });
  },

  error: function (params) {
    fetch(false, {
      ...params
    });
  }
}
