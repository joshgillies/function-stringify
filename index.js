module.exports = function fnStringify (fn) {
  var comment = /\*([^*]*)\*/.exec(fn.toString())[1]
  var indent = /([^\n]\s+)/.exec(comment)[1].length
  return comment.split('\n').map(function (line) {
    return line.slice(indent)
  }).join('\n').trim()
}
