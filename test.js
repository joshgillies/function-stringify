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

test('inline asterisk', function (assert) {
  function html () {/*
      # Markdown
      It's good for the following reasons:
       * You can format things
      In addition:
       * test
      FIN!
    */

    return fnStringify(html, true)
  }
  var expected = [
    '# Markdown',
    'It\'s good for the following reasons:',
    ' * You can format things',
    'In addition:',
    ' * test',
    'FIN!'
  ].join('\n')

  assert.plan(1)
  assert.equals(html(), expected)
})

test('advanced usage', function (assert) {
  function json () {/*
      {
        "data": "test",
        "things": ["a","b","c"]
      }
    */

    try {
      return JSON.parse(fnStringify(json))
    } catch (e) {
      assert.error(e)
    }
  }
  var expected = {
    data: 'test',
    things: ['a', 'b', 'c']
  }

  assert.plan(1)
  assert.deepEquals(json(), expected)
})
