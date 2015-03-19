# approx #

## Synopsis ##

If you'd like to do something every 10 seconds, you'd do something like this (or rather, use `setInterval` instead):

```js
function something() {
  // ...
  setTimeout(something, 10 * 1000)
}

// kick it off
something()
```

But if you'd like to do something approximately every 10s:

```js
var approx = require('approx')

function something() {
    // ...
    setTimeout(something, approx(10 * 1000))
}

// kick it off
something()
```

This will run `something()` approximately every 10 seconds. ie. it will run somewhere between 5 and 15 seconds,
determined by `Math.random()`.

Currently there is only one algorithm included in this package but could be expanded to provide more in the future.

## Author ##

Written by [Andrew Chilton](http://chilts.org/):

* [Twitter](https://twitter.com/andychilton)
* [GitHub](https://github.com/chilts/)

## License ##

MIT - http://chilts.mit-license.org/2015/

(Ends)
