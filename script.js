
function Calculate() {
	var number1 = parseInt(document.getElementById("number1").value);
	var number2 = parseInt(document.getElementById("number2").value);
	if (isNaN(number1) || isNaN(number2)) {
		alert("Wrong characters");
		return false;
	}

	var operator = document.getElementById("operator");
	var selectedOperator = operator.options[operator.selectedIndex].value;

	switch(selectedOperator) {
		case "+" :
			var result = number1 + number2;
			break;
		case "-" :
			var result = number1 - number2;
			break;	
		case "*" :
			var result = number1 * number2;
			break;	
		case "/" :
			var result = number1 / number2;
			break;
	}
	document.getElementById("answer").value = result;    
}