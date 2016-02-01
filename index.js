module.exports = function fnStringify (fn, format) {
  var comment = fn.toString().split(/^.+?(?:\/\*+?\s)/m)
  if (comment.length < 2) return ''
  comment = comment[1]
  comment = comment.split(/\*+?(?=\/)/m)
  if (comment.length < 2) return ''
  comment = comment[0]

  if (format) {
    var indent = /([^\n]\s+)/.exec(comment)[1].length
    return comment.split('\n').map(function (line) {
      return line.slice(indent)
    }).join('\n').trim()
  }

  return comment.trim()
}
