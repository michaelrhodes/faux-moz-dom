function FauxDOMRequest () {
  this.error = null
  this.result = null
  this.readyState = 'done'
  this.onsuccess = function () {}
  this.onerror = function () {}
}

module.exports = FauxDOMRequest
