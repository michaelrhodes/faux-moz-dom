var FauxDOMCursor = require('../index')

module.exports = function () {
  var cursor = new FauxDOMCursor

  setTimeout(function () {
    cursor.error = { name: 'NO_GO' }
    cursor.readyState = 'done'

    if (typeof cursor.onerror === 'function') {
      cursor.onerror()
    }
  })

  return cursor
}
