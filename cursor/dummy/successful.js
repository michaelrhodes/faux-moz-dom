var FauxDOMCursor = require('../index')

module.exports = function () {
  var i = 0
  var results = ['one', 'two', 'three']
  var l = results.length
  var cursor = new FauxDOMCursor

  cursor.continue = function () {
    cursor.result = results[i++]

    if (i === l) {
      cursor.done = true
      cursor.readyState = 'done'
    }

    if (typeof cursor.onsuccess === 'function') {
      cursor.onsuccess()
    }
  }

  setTimeout(cursor.continue)
  return cursor
}
