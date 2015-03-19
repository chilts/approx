var test = require('tape')

var approx = require('./index.js')

test('check that approx gives the numbers back', function(t) {
  var iterations = 10000
  t.plan(iterations * 2)

  var a
  for(var i = 0; i < iterations; i++) {
    // let's say 10 seconds
    a = approx(10 * 1000)

    // should be greater than 5 seconds
    t.ok(a >= 5000, 'More than (or equal to) 5 seconds')

    // should be less than 15 seconds
    t.ok(a < 15000, 'Less than 15 seconds')
  }

  t.end()
})
