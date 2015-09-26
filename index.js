module.exports = function fnStringify (fn, format) {
  var comment = /\*([^*]*)\*/.exec(fn.toString())[1]

  if (format) {
    var indent = /([^\n]\s+)/.exec(comment)[1].length
    return comment.split('\n').map(function (line) {
      return line.slice(indent)
    }).join('\n').trim()
  }

  return comment.trim()
}
