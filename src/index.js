export default function fnStringify (fn, format) {
  let comment = fn.toString().split(/^.+?(?:\/\*+?\s)/m)
  if (comment.length < 2) return ''
  comment = comment[1]
  comment = comment.split(/\*+?(?=\/)/m)
  if (comment.length < 2) return ''
  comment = comment[0]

  if (format) {
    const indent = /([^\n]\s+)/.exec(comment)[1].length
    comment = comment
      .split('\n')
      .map((line) => line.slice(indent))
      .join('\n')
  }

  return comment.trim()
}
