# jest-transformer-svg

Transform svg files for for jest+react to de-clutter snapshots.

**NOTE:** cloned from [jest-svg-transformer](https://www.npmjs.com/package/jest-svg-transformer)
since it looks unmaintained, and it doesn't support Jest versions >= 27.

**the latest version supports jest 28 - please use v1 for jest 27**

Very useful with react-svg-loader. This allows you to import
svgs directly into your react components, but still have nice snapshots.

Using enzyme's shallow rendering, for example:

```js
import React from 'react';
import MySvg from '../images/an-image.svg';

function MyComponent() {
  return (
    <div>
      <MySvg style={{ color: 'blue' }} />
    </div>
  );
}
```

will result in a snapshot that looks like this:

```
<div>
    <SvgAnImage style={{color: 'blue'}} />
</div>
```

# usage

This works with both enzyme and react-test-renderer.

Configure jest:

```json
{
  "jest": {
    "transform": {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.svg$": "jest-transformer-svg"
    }
  }
}
```
