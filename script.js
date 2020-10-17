var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");

function Calculate() {
  var number1_parsed = parseInt(number1.value);
  var number2_parsed = parseInt(number2.value);
  if (isNaN(number1_parsed) || isNaN(number2_parsed)) {
    alert("Wrong characters");
    return false;
  }

  var sum = number1_parsed + number2_parsed;
  alert("Sum: " + sum);
}