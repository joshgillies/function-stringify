var test = require('tape')
var fnStringify = require('./')

test('simple test', function (assert) {
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
  var expected = [
    '<!DOCTYPE html>',
    '<html>',
    '  <head>',
    '    <title>Welcome to The Internet</title>',
    '  </head>',
    '  <body>',
    '    <h1>Hello, world!</h1>',
    '  </body>',
    '</html>'
  ].join('\n')

  assert.plan(1)
  assert.equals(template, expected)
})
