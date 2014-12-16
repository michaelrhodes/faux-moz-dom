var FauxDOMRequest = require('../index')

module.exports = function () {
  var request = new FauxDOMRequest

  setTimeout(function () {
    request.result = 'Great job!'
    request.readyState = 'done'

    if (typeof request.onsuccess === 'function') {
      request.onsuccess()
    }
  })

  return request
}
