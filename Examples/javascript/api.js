// import * from 'constants.js';

// Useful APIs from Mozilla's JS reference

// check if Web Storage is available and storage space
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

// RNG
var randNum = function(num){
  var seed = Math.random(); // [0,1)
  return Math.floor(seed * (num + 1)); // [0,num]
};

// Persist data with web API
var saveToStorage = function(type,key,value){
    if(!key || !value){
      alert("key or value is empty");
      return;
    }
    var storage = (type === Const.WINDOWS.SESSION_DB && storageAvailable(Const.WINDOWS.SESSION_DB)) ? window['sessionStorage'] : null;
    storage = (storage === Const.WINDOWS.LOCAL_DB && type === "local" && storageAvailable(Const.WINDOWS.LOCAL_DB)) ? window['localStorage'] : storage;
    if(storage === null){
      console.log("Fail to save %s=%s", key, value);
      return;
    }
    storage.setItem(key, value);
    if(storage.getItem(key) !== null){
      console.log("Saved %s=%s to %s", key, value, type);
    } else {
      console.log("Fail to save %s=%s", key, value);
    }
};

var getFromStorage = function(type,key){
  var storage = (type === Const.WINDOWS.SESSION_DB) ? window['sessionStorage'] : window['localStorage'];
  var value = storage.getItem(key);
  if(value === null){
    console.log("Value does not exist for key %s in %s storage",key,type);
    return null;
  }
  return value;
}

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
