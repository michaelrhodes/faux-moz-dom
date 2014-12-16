var FauxDOMRequest = require('./request')

function FauxDOMCursor () {
  FauxDOMRequest.call(this)
  this.done = false
}

FauxDOMCursor.prototype.continue = function () {}

module.exports = FauxDOMCursor
