var test = require('tape')

var FauxDOMRequest = require('./index')
var successful = require('./dummy/successful')
var erroneous = require('./dummy/erroneous')

test('default state', function (assert) {
  var request = new FauxDOMRequest
  assert.equal(request.readyState, 'pending', 'readyState is "pending"')
  assert.equal(request.onerror, null, 'onerror is null')
  assert.equal(request.onsuccess, null, 'onsuccess is null')
  assert.equal(request.error, null, 'error is null')
  assert.equal(request.result, undefined, 'result is undefined')
  assert.end()
})

test('successful request', function (assert) {
  assert.plan(4)
  var request = successful()
  request.onsuccess = function () {
    assert.pass('onsuccess was called')
    assert.equal(this.readyState, 'done', 'readyState is "done"')
    assert.equal(this.result, 'Great job!', 'result set')
    assert.equal(this.error, null, 'error is null')
  }
})

test('erroneous request', function (assert) {
  assert.plan(5)
  var request = erroneous()
  request.onerror = function () {
    assert.pass('onerror was called')
    assert.equal(this.readyState, 'done', 'readyState is "done"')
    assert.equal(this.result, undefined, 'result is undefined')
    assert.ok(this.error, 'error is set')
    assert.equal(this.error.name, 'NO_GO', 'error.name set')
  }
})
