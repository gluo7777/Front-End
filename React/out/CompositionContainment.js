"use strict";

// Containment
// props.children
// arbitrary elements as children
var CustomBox = function CustomBox(props) {
  return React.createElement("div", {
    className: props.boxType
  }, props.children);
};

var Paragraph = function Paragraph(props) {
  return React.createElement(CustomBox, {
    boxType: "blue-box"
  }, React.createElement("h1", null, props.title), React.createElement("pre", null, "   ", props.body));
}; // Specialization
// Extending a generic object via composition


var MyParagraph = React.createElement(Paragraph, {
  title: "Components and Containment Pattern",
  body: "Composition is better than inheritance.\r\nReact has decent support for composition."
});
ReactDOM.render(MyParagraph, next()); // You can literally pass anything as props
// Remember JSX gets converted into Javascript objects

var SplitBox = function SplitBox(props) {
  return React.createElement("div", {
    className: "split-box"
  }, React.createElement(CustomBox, {
    boxType: props.leftBoxType
  }, props.leftParagraph), React.createElement(CustomBox, {
    boxType: props.rightBoxType
  }, props.rightParagraph));
};

var Paragraph2 = function Paragraph2(props) {
  return React.createElement("div", null, React.createElement("h1", null, props.title), React.createElement("pre", null, "   ", props.body));
};

ReactDOM.render(React.createElement(SplitBox, {
  leftBoxType: "blue-box",
  leftParagraph: React.createElement(Paragraph2, {
    title: "Components and Containment Pattern",
    body: "Composition is better than inheritance.\r React has decent support for composition."
  }),
  rightBoxType: "green-box",
  rightParagraph: React.createElement("div", null, React.createElement("button", null, "Random Button"), React.createElement(Paragraph2, {
    title: "Muwahaha More Reading",
    body: "Idk. I don't like writing so much.\r I don't know what to write."
  }))
}), next());