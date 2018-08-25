console.log('Test js');

// Object constructors
function Matcher(input,delimiter,isPattern) {
  this.input = input.split(delimiter);
  this.isPattern = isPattern;
  if(this.input.isEmpty()){
    throw new Error('Generated 0 tokens from input');
  }
}
function Parser(input,delimiter,matchers) {
  this.input = input.split(delimiter);
  if(this.input.isEmpty()){
    throw new Error('Generated 0 tokens from input');
  }
  this.matchers = matchers;
  if(this.matchers.isEmpty()){
    throw new Error('No matchers selected');
  }
}
function MatchedToken(token,isMatch,matcherToken) {
  this.token = token;
  this.isMatch = isMatch;
  this.matcherToken = matcherToken;
}
function Match(matchedTokenList) {
  this.matchedTokenList = matchedTokenList;
}

// DOM reference wrappers
var matcherd = {
  inputTextArea: document.querySelector('textarea#matcherInput'),
  delimiterText: document.querySelector('input#matcherDelimiter'),
  patternCheckBox: document.querySelector('input#pattern'),
  addMatcherBtn: document.querySelector('button#addMatcher')
};
var parserd = {
  inputTextArea: document.querySelector('textarea#textInput'),
  delimiterText: document.querySelector('input#parserDelimiter'),
  parseBtn: document.querySelector('button#parseText'),
  matcherList: document.querySelector('select#matcherList')
};
var displayd = {
  outputTextArea: document.querySelector('textarea#matchResults')
};
