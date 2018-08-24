// Copied from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// disable usage of with entirely
// argument in width could be in argument scope or global scope
// evaluated at run time
function noWith() {
  'use strict';
  var x = 17;
  with (obj) { // !!! syntax error
    // If this weren't strict mode, would this be var x, or
    // would it instead be obj.x?  It's impossible in general
    // to say without running the code, so the name can't be
    // optimized.
    x;
  }
}

// The simple alternative of assigning the object to a short name variable, then accessing the corresponding property on that variable, stands ready to replace with.

function withOk() {
  var x = 17;
  with (obj) {
    var obj2 = obj;
    obj2.x;
  }
}
