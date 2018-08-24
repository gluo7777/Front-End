// Copied from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

'use strict';

// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', {
  value: 42,
  writable: false
});
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = {
  get x() {
    return 17;
  }
};
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // throws a TypeError

// undeletable properties
delete Object.prototype; // throws a TypeError

// duplicate property names
var o = {
  p: 1,
  p: 2
}; // !!! syntax error

// duplicate argument names
// $2 will hide $1
function sum(a, a, c) { // !!! syntax error
  'use strict';
  return a + a + c; // wrong if this code ran
}

var a = 0o10; // ES2015: Octal

// leading zeroes -> octal number
var sum = 015 + // !!! syntax error
  197 +
  142;

var sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16

// setting properties on primitives
(function() {
  'use strict';

  false.true = ''; // TypeError
  (14).sailing = 'home'; // TypeError
  'with'.you = 'far away'; // TypeError

})();
