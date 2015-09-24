var test = require('tape')
var fnStringify = require('./')

test('simple test', function (assert) {
  var html = fnStringify(function () {/*
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
  assert.equals(html, expected)
})

test('stringify call inline', function (assert) {
  function html () {
    /*
      <!DOCTYPE html>
      <html>
        <head>
          <title>Welcome to The Internet</title>
        </head>
        <body>
          <h1>Hello, world!</h1>
        </body>
      </html>
    */

    return fnStringify(html)
  }
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
  assert.equals(html(), expected)
})
