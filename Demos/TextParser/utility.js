// Utility functions
function isBlank(str) {
  return !str || str.trim().length === 0;
}

function strFullMatch(pattern, input) {
  return new RegExp('^' + pattern + '$').test(input);
}
