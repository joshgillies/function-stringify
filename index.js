module.exports = function fnStringify (fn) {
  return /\*([^*]*)\*/.exec(fn.toString())[1].trim()
}
