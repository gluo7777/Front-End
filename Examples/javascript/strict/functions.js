// function by function basis
// wrap code in nested functions
function doStrict() {
  'use strict';
  function doNested() {
    return 'World!';
  }
  return 'Hello ' + doNested();
}

function doNotStrict() {
  return 'Not strict';
}
