# Logs [![image](https://img.shields.io/npm/v/wox-weapp-logs.svg)](https://www.npmjs.com/package/wox-weapp-logs)

小程序日志上报

## Params

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| code | `必填`。自定义标志 | String | |
| url | `必填`。请求的 url | String | |
| time | `必填`。请求时长，单位：**毫秒** | Number | |
| message | `必填`。自定义消息 | String | |

## Usage

```javascript
const Logs = require('./libs/wox-weapp-logs/index.js');
const loginStartTime = new Date().getTime();

wx.request({
  success: function() {
    Logs.success({
      code: 'LOGIN',
      url: '/login',
      time: new Date().getTime() - loginStartTime,
      message: '登录成功',
    });
  },

  fail: function() {
    Logs.error({
      code: 'LOGIN',
      url: '/login',
      time: new Date().getTime() - loginStartTime,
      message: '登录失败',
    });
  }
});

```
