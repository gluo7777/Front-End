// Constants
const Events = {
  CLICK: 'click',
  DOM_LOAD: 'DOMContentLoaded'
};

// Errors
class InputError extends Error {
}

// Helper classes to hold data
class Matcher {
  constructor(name, input, delimiter, isPattern) {
    if(isBlank(name) || isBlank(input) || isBlank(delimiter)){
      throw new InputError('Input cannot be blank.');
    }
    this.name = name;
    this.input = input.split(delimiter);
    this.isPattern = isPattern;
  }
}
class Parser {
  constructor(input, delimiter, matchers) {
    if(isBlank(input) || isBlank(delimiter)){
      throw new InputError('Input cannot be blank.');
    }
    if (matchers.length == 0) {
      throw new InputError('No matchers selected');
    }
    this.input = input.split(delimiter);
    this.matchers = matchers;
  }
}
class Match {
  constructor(matchedTokenList) {
    this.matchedTokenList = matchedTokenList;
  }

  static createMatchedToken(token, isMatch, matcherToken) {
    this.token = token;
    this.isMatch = isMatch;
    this.matcherToken = matcherToken;
  }
}

// DOM reference wrappers
// Note: This object can only be instantiated when the DOM has loaded
class Page {
  constructor() {
    this.matcher = {
      nameText: document.querySelector('input#matcherName'),
      inputTextArea: document.querySelector('textarea#matcherInput'),
      delimiterText: document.querySelector('input#matcherDelimiter'),
      patternCheckBox: document.querySelector('input#pattern'),
      addMatcherBtn: document.querySelector('button#addMatcher'),
      errorText: document.querySelector('p#matcherErrorText')
    };
    this.parser = {
      inputTextArea: document.querySelector('textarea#textInput'),
      delimiterText: document.querySelector('input#parserDelimiter'),
      parseTextBtn: document.querySelector('button#parseText'),
      matcherList: document.querySelector('select#matcherList')
    };
    this.display = {
      outputTextArea: document.querySelector('textarea#matchResults')
    };
    this.matchers = [];
  }
}
