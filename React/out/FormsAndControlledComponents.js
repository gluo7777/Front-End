"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// a form existing within a component can have its own state that reacts to user input
var CarForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CarForm, _React$Component);

  function CarForm(props) {
    var _this;

    _classCallCheck(this, CarForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CarForm).call(this, props));
    _this.state = {
      make: 'TOYOTA',
      model: 'COROLLA',
      year: '2011',
      comments: 'This car rocks!',
      color: 'black'
      /* Set default color in color picker select list */

    }; // this.handleMakeInput = this.handleInput.bind(this,'make');
    // this.handleModelInput = this.handleInput.bind(this,'model');
    // this.handleYearInput = this.handleInput.bind(this,'year');

    _this.handleInput = _this.handleInput.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleCommentsInput = _this.handleCustom.bind(_assertThisInitialized(_assertThisInitialized(_this)), 'comments');
    _this.handleColorInput = _this.handleCustom.bind(_assertThisInitialized(_assertThisInitialized(_this)), 'color');
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.displayText = next();
    return _this;
  }

  _createClass(CarForm, [{
    key: "handleInput",
    value: function handleInput(event) {
      var inputName = event.target.name;
      var inputType = event.target.type;
      var inputValue = event.target.value;
      var value = '';

      if (inputType === 'text') {
        value = String(inputValue).toUpperCase();
      } else if (inputType === 'number') {
        var number = parseInt(inputValue);
        value = number > 0 ? number : 0;
      }

      this.setState(_defineProperty({}, inputName, value));
    }
  }, {
    key: "handleCustom",
    value: function handleCustom(type, event) {
      console.log(event);
      var input = event.target.value;
      var stateInput = {};

      switch (type) {
        case 'color':
          event.preventDefault();

        default:
          stateInput[type] = input;
          break;
      }

      this.setState(stateInput);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      console.log("The form was submitted.");
      ReactDOM.render(React.createElement("h5", null, "Submitted!"), this.displayText);
      console.log("Submitted Car: ".concat(this.state));
    }
    /**
     * Controlled Components means that React always processes the input and has the final say on what the output will be.
     */

  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        onSubmit: this.handleSubmit
      }, React.createElement("label", null, "Make: ", React.createElement("input", {
        name: "make",
        type: "text",
        value: this.state.make,
        onChange: this.handleInput
      })), React.createElement("label", null, "Model: ", React.createElement("input", {
        name: "model",
        type: "text",
        value: this.state.model,
        onChange: this.handleInput
      })), React.createElement("label", null, "Year: ", React.createElement("input", {
        name: "year",
        type: "number",
        value: this.state.year,
        onChange: this.handleInput
      })), React.createElement("label", null, "Color: ", React.createElement(ColorPicker, {
        color: this.state.color,
        onChange: this.handleColorInput
      })), React.createElement("label", null, "Comments: ", React.createElement("textarea", {
        value: this.state.comments,
        onChange: this.handleCommentsInput
      })), React.createElement("input", {
        type: "submit",
        value: "Complete"
      }), React.createElement("input", {
        type: "file"
      }));
    }
  }]);

  return CarForm;
}(React.Component);

var ColorPicker = function ColorPicker(props) {
  return React.createElement("select", {
    name: "color",
    value: props.color,
    onChange: props.onChange
  }, React.createElement("option", {
    value: "red"
  }, "Red"), React.createElement("option", {
    value: "blue"
  }, "Blue"), React.createElement("option", {
    value: "white"
  }, "White"), React.createElement("option", {
    value: "black"
  }, "Black"));
};

ReactDOM.render(React.createElement(CarForm, {
  placeHolder: next()
}), next());