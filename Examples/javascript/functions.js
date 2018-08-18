/* Listen for DOM load success */
var calculateCompoundInterest = function(){
  /* Retrieve form data. */
  var form = document.forms["compoundInterest"];
  var elements = form.elements;
  var p = elements['p'].value,
      c = elements['c'].value,
      b = elements['b'].value,
      y = elements['y'].value,
      t = elements['t'].value,
      i = elements['i'].value;
  /* Save values to cookies. */
  /* Perform calculations here and set total balance accordingly. */
  elements['t'].value = t;
  var rate = i / 100 + 1.0; // decimal
  var prinBal = p * rate ^ y; // balance if no contribution
  var contBal = rate ^ ( y + 1 ) - rate;
  contBal = c * ( contBal / i) // interest balance based on contribution
  var totalBal = prinBal + contBal;
  document.getElementById('totalBalance').innerText = totalBal;
}
