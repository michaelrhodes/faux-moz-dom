var FauxDOMRequest = require('../index')

module.exports = function () {
  var request = new FauxDOMRequest

  setTimeout(function () {
    request.error = { name: 'NO_GO' }
    request.readyState = 'done'

    if (typeof request.onerror === 'function') {
      request.onerror()
    }
  })

  return request
}
