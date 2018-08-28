// Constants
const Events = {
  CLICK: 'click',
  DOM_LOAD: 'DOMContentLoaded',
  FOCUS: 'focus'
};

// Errors
class InputError extends Error {
}

// Helper classes to hold data
class Matcher {
  constructor(name, input, delimiter, isPattern) {
    if(isBlank(name) || isBlank(input)){
      throw new InputError('Matcher input cannot be blank.');
    }
    this.name = name;
    this.input = input.split(delimiter);
    this.isPattern = isPattern;
  }

  matches(token){
    return this.input.indexOf(token) !== -1;
  }

  matchesPattern(token){
    for(var i=0;i<this.input.length;i++){
      var matchToken = this.input[i];
      if(strFullMatch(matchToken),token){
        return matchToken;
      }
    }
    return null;
  }
}
class Parser {
  constructor(input, delimiter, matchers) {
    if(isBlank(input)){
      throw new InputError('Input cannot be blank.');
    }
    if (matchers.length == 0) {
      throw new InputError('No matchers selected');
    }
    this.input = input.split(delimiter);
    this.matchers = matchers;
  }

  parse(){
    var matchedTokenList = [];
    var input = this.input;
    this.matchers.forEach(function(matcher) {
      if(matcher.isPattern){
        input.forEach(function(text) {
          var matchedToken = matcher.matchesPattern(text);
          if(!matchedToken){
              matchedTokenList.push(Match.createMatchedToken(text,matchedToken));
          }
        })
      }else {
        input.forEach(function(text) {
          if(matcher.matches(text)){
            matchedTokenList.push(Match.createMatchedToken(text,text));
          }
        })
      }
    });
    return matchedTokenList;
  }
}
class Match {
  constructor(matchedTokenList) {
    this.matchedTokenList = matchedTokenList;
  }

  static createMatchedToken(inputToken, matcherToken) {
    return {
      inputToken: inputToken
      ,matcherToken: matcherToken
    };
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
      addMatcherBtn: document.querySelector('button#addMatcher')
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
    this.errorText = document.querySelector('p#errorText');
  }
}
