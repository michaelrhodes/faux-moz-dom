function FauxDOMRequest () {
  this.readyState = 'pending'
  this.error = null
  this.onsuccess = null
  this.onerror = null
}

module.exports = FauxDOMRequest
