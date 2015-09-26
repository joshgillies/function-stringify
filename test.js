var test = require('tape')
var fnStringify = require('./')

test('simple test', function (assert) {
  var html = fnStringify(function () {/*
    Hello, world!
  */})
  var expected = 'Hello, world!'

  assert.plan(1)
  assert.equals(html, expected)
})

test('simple formatted test', function (assert) {
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
  */}, true)
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

    return fnStringify(html, true)
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
