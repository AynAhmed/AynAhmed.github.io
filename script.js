function verifyServiceQuality() {
	// Get the selected value of the service quality dropdown
	var serviceQuality = document.getElementById("service-quality").value;

	// Check if a valid service quality was selected
	if (serviceQuality === "great" || serviceQuality === "ok" || serviceQuality === "poor") {
		return true;
	} else {
		alert("Please select a valid service quality.");
		return false;
	}
}

function verifyServiceAmount() {
	// Get the entered value of the service amount field
	var serviceAmount = parseFloat(document.getElementById("service-amount").value);

	// Check if a valid service amount was entered
	if (isNaN(serviceAmount) || serviceAmount < 5 || serviceAmount > 500) {
		alert("Please enter a valid service amount between $5.00 and $500.00.");
		return false;
	} else {
		return true;
	}
}

function calculateTip() {
	// Verify the service quality and amount
	if (!verifyServiceQuality() || !verifyServiceAmount()) {
		return;
	}

	// Get the service amount and quality
	var serviceAmount = parseFloat(document.getElementById("service-amount").value);
	var serviceQuality = document.getElementById("service-quality").value;

	// Calculate the tip amount
	var tipPercentage;
	switch (serviceQuality) {
		case "great":
			tipPercentage = 0.2;
			break;
		case "ok":
			tipPercentage = 0.15;
			break;
		case "poor":
			tipPercentage = 0.1;
			break;
	}
	var tipAmount = serviceAmount * tipPercentage;

	// Display the tip amount
	var tipMessage = "For a service amount of $" + serviceAmount.toFixed(2) + " and " + serviceQuality + " service quality, the recommended tip amount is $" + tipAmount.toFixed(2) + ".";
	document.getElementById("tip-amount").innerHTML = tipMessage;
}
