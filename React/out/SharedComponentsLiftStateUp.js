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

// managed multiple components that share a state
// children propagate state changes up to closet ancestor
// comp1: lowercase
// comp2: uppercase
var Parent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Parent, _React$Component);

  function Parent(props) {
    var _this;

    _classCallCheck(this, Parent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Parent).call(this, props));
    _this.state = {
      text: '',
      number: 0
    };
    _this.handleInput = _this.handleInput.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Parent, [{
    key: "handleInput",
    value: function handleInput(event) {
      console.log(event.target.getAttribute('data-test'));
      var value = event.target.value;
      var name = event.target.name;
      this.setState(_defineProperty({}, name, value === null ? '' : value));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h1", null, "Fun with text!"), React.createElement(Child, {
        name: "text",
        type: "text",
        desc: "lower case",
        text: this.state.text.toLowerCase(),
        handler: this.handleInput
      }), React.createElement(Child, {
        name: "text",
        type: "text",
        desc: "UPPER CASE",
        text: this.state.text.toUpperCase(),
        handler: this.handleInput
      }), React.createElement("h1", null, "Fun with numbers!"), React.createElement(Child, {
        name: "number",
        type: "number",
        desc: "decimal",
        text: this.state.number,
        handler: this.handleInput
      }), React.createElement(Child, {
        name: "number",
        type: "number",
        desc: "binary",
        text: this.state.number,
        handler: this.handleInput
      }));
    }
  }]);

  return Parent;
}(React.Component);

var Child =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Child, _React$Component2);

  function Child(props) {
    var _this2;

    _classCallCheck(this, Child);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Child).call(this, props));
    _this2.state = {
      lastModified: ''
    };
    _this2.handleChange = _this2.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }

  _createClass(Child, [{
    key: "handleChange",
    value: function handleChange(event) {
      // update state
      this.setState({
        lastModified: Date().toString()
      }); // propagate changes to parent intead of state

      this.props.handler(event);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("fieldset", null, React.createElement("legend", null, "Enter text in ", this.props.desc, ":"), React.createElement("input", {
        "data-test": this.props.name,
        name: this.props.name,
        type: this.props.type,
        value: this.props.text,
        onChange: this.handleChange
      }), React.createElement("h5", null, "Last updated ", this.state.lastModified));
    }
  }]);

  return Child;
}(React.Component);

ReactDOM.render(React.createElement(Parent, null), next()); // app idea
// Comp1: Enter 2 numbers
// Comp2-5: Display sum, difference, product, quotient