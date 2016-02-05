import test from 'tape'
import fnStringify from './src'

test('simple test', (assert) => {
  const html = fnStringify(() => {
    /*
      Hello, world!
    */
  })
  const expected = 'Hello, world!'

  assert.equals(html, expected)
  assert.end()
})

test('simple formatted test', (assert) => {
  const html = fnStringify(() => {
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
  }, true)
  const expected = [
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

  assert.equals(html, expected)
  assert.end()
})

test('stringify call inline', (assert) => {
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
  const expected = [
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

  assert.equals(html(), expected)
  assert.end()
})

test('inline asterisk', (assert) => {
  function html () {
    /*
      # Markdown
      It's good for the following reasons:
       * You can format things
      In addition:
       * test
      FIN!
    */

    return fnStringify(html, true)
  }
  const expected = [
    '# Markdown',
    'It\'s good for the following reasons:',
    ' * You can format things',
    'In addition:',
    ' * test',
    'FIN!'
  ].join('\n')

  assert.equals(html(), expected)
  assert.end()
})

test('advanced usage', (assert) => {
  function json () {
    /*
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

  assert.deepEquals(json(), expected)
  assert.end()
})
