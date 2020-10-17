
/**
 * function to calculate result
 */
function Calculate() {
	// get both inputs
	let number1 = parseInt(document.getElementById("number1").value);
	let number2 = parseInt(document.getElementById("number2").value);

	// check values and show error if no value was selected
	if (isNaN(number1) || isNaN(number2)) {
		if (!document.getElementById("error")) {
			var para = document.createElement("p");
			para.setAttribute("id", "error");
			para.innerHTML = "Please enter both numbers";
			document.getElementById("calculator").appendChild(para);
		}
	} else {
		if (document.getElementById("error")) document.getElementById("error").remove();
	}

	// get operator
	var operator = document.getElementById("operator");
	var selectedOperator = operator.options[operator.selectedIndex].value;
	let result = 0;
	switch (selectedOperator) {
		case "+":
			result = number1 + number2;
			break;
		case "-":
			result = number1 - number2;
			break;
		case "*":
			result = number1 * number2;
			break;
		case "/":
			result = (number1 / number2).toFixed(4);
			break;
	}
	document.getElementById("answer").value = result;
}