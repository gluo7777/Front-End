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
});

function addMatcher() {
  // add to in-memory list
  try {
    var input = page.matcher;
    resetError(input.errorText);
    var matcher = new Matcher(
      input.nameText.value
      ,input.inputTextArea.value
      ,input.delimiterText.value
      ,input.patternCheckBox.checked
    );
    page.matchers.push(matcher);
    addToSelect(matcher, page.matchers.length-1);
  } catch (e) {
    setError(input.errorText, e);
  } finally {

  }
}

function parseText() {

}

function addToSelect(matcher, index) {
  var option = document.createElement('option');
  option.text = matcher.name;
  option.value = index;
  page.parser.matcherList.add(option);
}

function setError(element, e) {
  element.innerText = e.message;
  element.hidden = false;
}

function resetError(element) {
  element.innerText = '';
  element.hidden = true;
}
