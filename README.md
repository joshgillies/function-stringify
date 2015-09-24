# function-stringify

Factory to stringify functions!

Because sometimes you might want a function body to store something more meaningful
than just JavaScript.

[![Build Status](https://travis-ci.org/joshgillies/function-stringify.svg)](https://travis-ci.org/joshgillies/function-stringify)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Example

```js
var fnStringify = require('function-stringify')

var template = fnStringify(function () {/*
  <!DOCTYPE html>
  <html>
    <head>
      <title>Welcome to The Internet</title>
    </head>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>
*/})

console.log(template)
```

## License

MIT
