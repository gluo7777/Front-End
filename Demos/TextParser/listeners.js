var page;
// Initialize DOM references
document.addEventListener(Events.DOM_LOAD, function(event) {
  console.log('Document loaded');
  page = new Page();
  // load matchers
  page.matchers.forEach(function(matcher, index) {
    addToSelect(matcher,index);
  });
  // Callbacks
  page.matcher.addMatcherBtn.addEventListener(Events.CLICK, addMatcher);
  page.parser.parseTextBtn.addEventListener(Events.CLICK, parseText);
  // Focus Resetters
  document.querySelectorAll('textarea,input').forEach(
    button => button.addEventListener(Events.CLICK, resetError)
  );
});

function addMatcher() {
  // add to in-memory list
  try {
    resetError();
    var input = page.matcher;
    var matcher = new Matcher(
      input.nameText.value
      ,input.inputTextArea.value
      ,input.delimiterText.value
      ,input.patternCheckBox.checked
    );
    page.matchers.push(matcher);
    addToSelect(matcher, page.matchers.length-1);
  } catch (e) {
    setError(e);
  } finally {
    // TODO: what to do here
  }
}

function parseText() {
  try {
    resetError();
    var input = page.parser;
    var selectedMatchers = [];
    // HTMLCollection is not iterable
    var selected = input.matcherList.selectedOptions;
    // Retrieve obj that corresponds to HTML elements selected
    for(var i=0; i<selected.length; i++){
      selectedMatchers.push(page.matchers[i]);
    }
    var parser = new Parser(
      input.inputTextArea.value
      ,input.delimiterText.value
      ,selectedMatchers
    );
    var result = parser.parse();
    if(result.length === 0){
      setError(new Error('No matches.'));
    }else{
      output = page.display;
      var resultText = [];
      result.forEach(token => resultText.push(token.inputToken));
      output.outputTextArea.value = resultText.join(input.delimiterText.value);
    }
  } catch (e) {
    setError(e);
  } finally {}
}

function addToSelect(matcher, index) {
  var option = document.createElement('option');
  option.text = matcher.name;
  option.value = index;
  page.parser.matcherList.add(option);
}

function setError(e) {
  page.errorText.innerText = e.message;
  page.errorText.hidden = false;
}

function resetError() {
  page.errorText.innerText = '';
  page.errorText.hidden = true;
}
