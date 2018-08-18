// export {Const};

// Define common constants
var Const = {
    EVENT: {
      ON_CLICK: "onclick",
      MOUSE_OVER: "mouseover",
      MOUSE_OUT: "mouseout",
      DOM_LOAD: "DOMContentLoaded"
    },
    WINDOWS: {
      LOCAL_DB: "localStorage",
      SESSION_DB: "sessionStorage"
    }
}

deepFreeze(Const);

function deepFreeze(obj) {

  // Retrieve the property names defined on obj
  var propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  propNames.forEach(function(name) {
    var prop = obj[name];

    // Freeze prop if it is an object
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop);
  });

  // Freeze self (no-op if already frozen)
  return Object.freeze(obj);
}
