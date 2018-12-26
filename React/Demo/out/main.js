"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// Calculator App
// Components
// 1. Calculator Frame
// 2. Display
// 3. Number Pad
// 4. Clear
// 5. Operation buttons
function error(log, display) {
  console.log(log);
  window.alert(display);
}

var IN = Object.freeze({
  OP: 0,
  NUM: 1,
  DEC: 2,
  DASH: 3
});

var Calculator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Calculator, _React$Component);

  function Calculator(props) {
    var _this;

    _classCallCheck(this, Calculator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calculator).call(this, props));
    _this.state = {
      inputs: [],
      display: 'Enter text...'
    };
    _this.ops = ['ADD', 'SUB', 'MULT', 'DIV']; // bind JS to Component context instead of global

    _this.push = _this.push.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Validates then pushes 
   * next input to stack.
   * @param {Event} event 
   */


  _createClass(Calculator, [{
    key: "push",
    value: function push(event) {
      var _this2 = this;

      var input = event.target.name;
      this.setState(function (state, props) {
        var stack = state.inputs;
        var last = stack.length - 1;
        var top = stack[last];

        var inType = _this2.getType(input);

        var topType = _this2.getType(top);

        var display = '';

        if (stack.length === 0) {
          if (inType === IN.OP) {
            error('First input cannot be operation.', 'Try Again.');
          } else {
            stack.push(input);
          }
        } else {
          switch (inType) {
            case IN.NUM:
              if ([IN.NUM, IN.DEC, IN.DASH].indexOf(topType) !== -1) {
                stack[last] = top + input;
              } else {
                stack.push(input);
              }

              break;

            case IN.DEC:
              if (top.contains('.')) {
                error("Input already contains '.'", "Redundant '.'");
              } else {
                stack.push(input);
              }

              break;

            case IN.DASH:
              if (topType === IN.OP) {
                stack.push(input);
              } else {
                error("Negative symbol is must be first character", "'-' must come first.");
              }

              break;

            case IN.OP:
              if (topType === IN.NUM) {
                // calculate current stack before pushing next operation
                if (stack.length === 3) {
                  display = _this2.compute();
                }

                stack.push(input);
              } else {
                error("Operation already entered.", "An operation was already entered.");
              }

              break;

            default:
              error("Unrecognized input: '".concat(input, "'"), "Enter a valid input.");
              break;
          }
        }

        return {
          inputs: stack,
          display: display
        };
      });
    }
  }, {
    key: "compute",
    value: function compute() {
      var _this3 = this;

      var result = 'n/a';
      this.setState(function (state, props) {
        var inputs = state.inputs;

        if (inputs.length !== 3 || !_this3.isNumber(inputs[input.length - 1])) {
          error('Insufficient entries for calculation', 'Insufficient entries for calculation');
          return {};
        }

        result = _this3.operation(inputs[1])(inputs[0], inputs[2]);
        inputs = state.inputs.slice(3);
        inputs.push(result);
        return {
          inputs: inputs
        };
      });
      return result;
    }
  }, {
    key: "operation",
    value: function operation(op) {
      switch (op) {
        case 'ADD':
          return function (x, y) {
            return x + y;
          };

        case 'SUB':
          return function (x, y) {
            return x - y;
          };

        case 'MULT':
          return function (x, y) {
            return x * y;
          };

        case 'DIV':
          return function (x, y) {
            return x / y;
          };

        default:
          return function (x, y) {
            error('Unrecognized operation', 'Unrecognized operation');
            return 'n/a';
          };
      }
    }
  }, {
    key: "getType",
    value: function getType(input) {
      if (this.isNumber(input)) return IN.NUM;else if (this.ops.indexOf(input) !== -1) return IN.OP;else if (input === ".") return IN.DEC;else if (input === "-") return IN.DASH;else return -1;
    }
  }, {
    key: "isNumber",
    value: function isNumber(input) {
      return /^-?\d*\.?\d*$/.test(input);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "root",
        className: "vertical container"
      }, React.createElement(Display, {
        displayText: this.state.display
      }), React.createElement(NumberPad, {
        inputs: NUM_PAD,
        defaultHandler: this.push
      }), React.createElement(BottomPanel, null));
    }
  }]);

  return Calculator;
}(React.Component);

var NUM_PAD = [{
  val: "7"
}, {
  val: "8"
}, {
  val: "9"
}, {
  name: "ADD",
  val: "+"
}, {
  val: "4"
}, {
  val: "5"
}, {
  val: "6"
}, {
  name: "SUB",
  val: "-"
}, {
  val: "1"
}, {
  val: "2"
}, {
  val: "3"
}, {
  name: "MULT",
  val: "\xD7"
}, {
  val: "0"
}, {
  val: "."
}, {
  val: "-"
}, {
  name: "DIV",
  val: "\x8F"
}];

var Display = function Display(props) {
  return React.createElement("div", {
    id: "display",
    className: "horizontal container"
  }, React.createElement("input", {
    type: "text",
    name: "displayInput",
    id: "displayInput",
    value: props.displayText,
    disabled: true
  }));
};

var NumberPad = function NumberPad(props) {
  return React.createElement("div", {
    id: "numberpad",
    className: "grid"
  }, props.inputs.map(function (input) {
    return React.createElement("button", {
      name: input.name ? input.name : input.val,
      onClick: input.handler ? input.handler : props.defaultHandler
    }, input.val);
  }));
};

var BottomPanel = function BottomPanel(props) {
  return React.createElement("div", {
    className: "horizontal container"
  }, React.createElement("button", {
    onClick: props.clearHandler
  }, "Clear"), React.createElement("button", {
    onClick: props.equalsHandler
  }, "="));
};

ReactDOM.render(React.createElement(Calculator, null), document.querySelector('#main-container'));