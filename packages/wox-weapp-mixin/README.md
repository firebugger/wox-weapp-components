# Mixin [![image](https://img.shields.io/npm/v/wox-weapp-mixin.svg)](https://www.npmjs.com/package/wox-weapp-mixin)

小程序 mixin for `Page`

## Data Format

```javascript
{
  data: {
    // any attribute
  },
  methods: {
    // any function
  }
}
```

## Usage

* page/index/index.js

```javascript
import Mixin from 'wox-weapp-mixin';
import simpleMixin from '../mixins/simple-mixin';

Page(Mixin({
  data: {
    destination: 'london'
  },
  mixins: [simpleMixin]
  onLoad: function() {
    ...
  },
  onTabsClick: function(e) {
    ...
  }
}));
```

* mixins/simple-mixin.js

```javascript
module.exports = {
  data: {
    skinType: 'simple'
  },
  methods: {
    onHotPageScroll: function(e) {
      ...
    }
  }
};
```
