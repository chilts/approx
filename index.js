module.exports = function approx(n) {
  return ( n/2 + Math.random() * n) | 0
}
