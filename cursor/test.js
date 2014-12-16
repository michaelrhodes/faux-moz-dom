var test = require('tape')

var FauxDOMCursor = require('./index')
var successful = require('./dummy/successful')
var erroneous = require('./dummy/erroneous')

test('default state', function (assert) {
  var cursor = new FauxDOMCursor
  assert.equal(cursor.readyState, 'pending', 'readyState is "pending"')
  assert.equal(cursor.onerror, null, 'onerror is null')
  assert.equal(cursor.onsuccess, null, 'onsuccess is null')
  assert.equal(cursor.error, null, 'error is null')
  assert.equal(cursor.result, undefined, 'result is undefined')
  assert.equal(cursor.done, false, 'done is false')
  assert.end()
})

test('successful cursor', function (assert) {
  var i = 0
  var expected = ['one', 'two', 'three']
  assert.plan((expected.length * 3) + 1)

  var cursor = successful()
  cursor.onsuccess = function () {
    assert.pass('onsuccess was called')
    assert.equal(this.result, expected[i++], 'result as expected')
    assert.equal(this.error, null, 'error is null')

    this.done ?
      assert.equal(this.readyState, 'done', 'readyState is "done"') :
      this.continue()
  }
})


test('erroneous cursor', function (assert) {
  assert.plan(6)
  var cursor = erroneous()
  cursor.onerror = function () {
    assert.pass('onerror was called')
    assert.equal(this.readyState, 'done', 'readyState is "done"')
    assert.equal(this.result, undefined, 'result is undefined')
    assert.equal(this.done, false, 'done is false')
    assert.ok(this.error, 'error is set')
    assert.equal(this.error.name, 'NO_GO', 'error.name set')
  }
})
