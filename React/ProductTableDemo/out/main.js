"use strict";

// Thinking in React
// 1. UI Mock Up
// 2. Break UI into components and place them in the hierarchy
// 3. Build static app (no state, only props)
// 4. Make it dynamic (add state and interactivity)
var json = [{
  category: "Sporting Goods",
  price: "$49.99",
  stocked: true,
  name: "Football"
}, {
  category: "Sporting Goods",
  price: "$9.99",
  stocked: true,
  name: "Baseball"
}, {
  category: "Sporting Goods",
  price: "$29.99",
  stocked: false,
  name: "Basketball"
}, {
  category: "Electronics",
  price: "$99.99",
  stocked: true,
  name: "iPod Touch"
}, {
  category: "Electronics",
  price: "$399.99",
  stocked: false,
  name: "iPhone 5"
}, {
  category: "Electronics",
  price: "$199.99",
  stocked: true,
  name: "Nexus 7"
}];

var FilterableProductTable = function FilterableProductTable(props) {
  return React.createElement("div", null, props.children);
};

var SearchBar = function SearchBar(props) {
  return React.createElement("div", null, React.createElement("input", {
    type: "text",
    placeholder: "Search..."
  }), React.createElement("div", {
    className: "row"
  }, React.createElement("input", {
    type: "checkbox"
  }), React.createElement("p", null, "Only show products in stock")));
};

var ProductTable = function ProductTable(props) {
  return React.createElement("div", null, React.createElement("p", null, React.createElement("strong", null, "Name"), "    ", React.createElement("strong", null, "Price")), props.children);
};

ReactDOM.render(React.createElement("h3", null, "Test!"), document.querySelector('#main-container'));