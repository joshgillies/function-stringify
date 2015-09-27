# function-stringify

Stringify functions, or more specifically their comments!

You know, because you might want a function body to store something other than just JavaScript.

[![Build Status](https://travis-ci.org/joshgillies/function-stringify.svg)](https://travis-ci.org/joshgillies/function-stringify)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Install

`npm install function-stringify`

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
*/}, true)

console.log(template)
```

## Usage

```js
var fnStringify = require('function-stringify')
```

### fnStringify(fn, format)

`fn` is a function declaration whose body contains a comment block in the format of `/* content */`.

`format` is a boolean flag which when set to true `fnStringify` will attempt to preserve the formatting of the enclosed content string.

## License

MIT
