var FauxDOMRequest = require('./request')

function FauxDOMCursor () {
  FauxDOMRequest.call(this)
  this.done = true
}

FauxDOMCursor.prototype.continue = function () {}

module.exports = FauxDOMCursor
