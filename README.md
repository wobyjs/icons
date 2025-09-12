# @woby/icons

[![npm version](https://img.shields.io/npm/v/@woby/icons.svg?style=flat-square)](https://www.npmjs.com/package/@woby/icons)
[![npm downloads](https://img.shields.io/npm/dm/@woby/icons.svg?style=flat-square)](https://www.npmjs.com/package/@woby/icons)

#### What is @woby/icons?
@woby/icons is a collection of simply beautiful open source icons for Woby. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.

#### Based on Feather Icons  ```v4.29.0```
https://feathericons.com/

### Installation
    yarn add @woby/icons
    
  or
    
    npm i @woby/icons

### Usage

```javascript
import { Camera } from '@woby/icons';

const App = () => {
  return <Camera />
};

export default App;
```

Icons can be configured with inline props:
```javascript
<Camera color="red" size={48} />
```

If you can't use ES6 imports, it's possible to include icons from the compiled folder ./dist.
```javascript
var Camera = require('@woby/icons/dist/icons/camera').default;

var MyComponent = React.createClass({
  render: function () {
    return (
      <Camera />
    );
  }
});
```

You can also include the whole icon pack:
```javascript
import * as Icon from '@woby/icons';

const App = () => {
  return <Icon.Camera />
};
```