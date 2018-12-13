"use strict";

// Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
// it's bad practice to use index as keys b/c they may change
// treat lists as maps
// keys are hidden, only used by React
var Numbers = function Numbers(props) {
  return React.createElement("ol", null, props.numbers.map(function (v, k) {
    return React.createElement("li", {
      key: k
    }, v);
  }));
};

ReactDOM.render(React.createElement(Numbers, {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}), next());
ReactDOM.render(React.createElement(Numbers, {
  numbers: ['a', 'b', 'c']
}), next());

var Person = function Person(id, fName, lName) {
  return {
    id: id,
    first: fName,
    last: lName
  };
};

var Contact = function Contact(props) {
  return React.createElement("li", null, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "First Name: "), React.createElement("td", null, props.person.first)), React.createElement("tr", null, React.createElement("td", null, "Last Name: "), React.createElement("td", null, props.person.last)))));
};

var Contacts = function Contacts(props) {
  return React.createElement("ol", null, props.lst.map(function (person) {
    return React.createElement(Contact, {
      key: person.id,
      person: person
    });
  }));
};

ReactDOM.render(React.createElement(Contacts, {
  lst: [Person(24, 'William', 'Luo'), Person(13, 'Lydia', 'Buu'), Person(9, 'Jack', 'Balls')]
}), next());