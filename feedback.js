
//Form input validation

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const form = document.getElementById("feedback-form");
const tel = document.getElementById("tel");
const feedback = document.getElementById("feedback");
const address = document.getElementById("address");
const programmeFeedback = document.getElementById("programme-feedback");
const visitDate = document.getElementById("visit-date");
const submitDate = document.getElementById("submit-date");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const telephoneError = document.getElementById("telephone-error");
const addressError = document.getElementById("address-error");
const feedbackError = document.getElementById("feedback-error");
const programmeError = document.getElementById("programme-error");
const visitDateError = document.getElementById("visit-date-error");
const submitDateError = document.getElementById("submit-date-error");

const formStatus = document.getElementById("form-status");

form.addEventListener("submit", handleFormSubmit);


function validateForm() {
	clearErrors();
	let isValid = true;
	
	let fullNameText = fullName.value.trim();
	let emailText = email.value.trim();
	let telText = tel.value.trim();
	let addressText = address.value.trim();
	let feedbackText = feedback.value.trim();
	let programmeValue = programmeFeedback.value;
	let visitDateValue = visitDate.value;
	let submitDateValue = submitDate.value;
	
	let nameParts = fullNameText.split(/\s+/) /*Use a regex pattern, which matches parts of text based on a rule, in this case one or more whitespace characters */
	if (fullNameText === "" || nameParts.length < 2) {
		nameError.textContent = "Enter your full name";
		isValid = false;
	}
	if (emailText === "" || !emailText.includes("@") || emailText.charAt(emailText.length - 1) === "@" || !emailText.includes(".") || emailText.charAt(emailText.length - 1) === "."|| emailText.charAt(0) === "." || emailText.charAt(0) === "@") {
		emailError.textContent = "Enter a valid email address";
		isValid = false;
	}
	
	let telPattern = /^[0-9+\-\s()]+$/;
	if (telText === "") {
		telephoneError.textContent = "Telephone number is required";
		isValid = false;
	} else if (!telPattern.test(telText)) {
		telephoneError.textContent = "Telephone number can only contain digits, spaces, +, -, and parentheses";
		isValid = false;
	} else {
		let digitsOnly = telText.replace(/\D/g, "");
		if (digitsOnly.length < 7) {
			telephoneError.textContent = "Telephone number must contain at least 7 digits";
			isValid = false;
		}
	else if (digitsOnly.length > 15) {
		telephoneError.textContent = "Telephone number must not contain more than 15 digits";
		isValid = false;
		}
	}
	
	if (addressText === "") {
		addressError.textContent = "Address is required";
		isValid = false;
	}
	
	if (feedbackText === "") {
		feedbackError.textContent = "Feedback message is required";
		isValid = false;
	} else if (feedbackText.length < 10) {
		feedbackError.textContent = "Feedback must be at least 10 characters";
		isValid = false;
	}
	
	if (programmeValue === "") {
		programmeError.textContent = "Please select a programme";
		isValid = false;
	}
	
	if (visitDateValue === "") {
		visitDateError.textContent = "Please select the date attended";
		isValid = false;
	}
	
	if (submitDateValue === "") {
		submitDateError.textContent = "Please select the date and time of feedback";
		isValid = false;
	}
	
	return isValid;
	
	
}


function clearErrors() {
	nameError.textContent = "";
	emailError.textContent = "";
	telephoneError.textContent = "";
	addressError.textContent = "";
	feedbackError.textContent = "";
	programmeError.textContent = "";
	visitDateError.textContent = "";
	submitDateError.textContent = "";
	formStatus.textContent = "";
}


function handleFormSubmit(event) {
	event.preventDefault(); /*The form does not send or save data anywhere, however, 
							by default, clicking a submit button in a form still triggers browser to refresh or something similar.
							Calling preventDefault() on event object which is
						    an object that is created when the form submission event is triggered and stores information about that event, prevents the default behavior of
						    the browser to trigger */
	
	if (validateForm()) {
		formStatus.textContent = "Thank you for your feedback! Your form was submitted successfully.";
		form.reset();
		remainingCharsText.textContent = 250;
	}
}





//Character count logic

let remainingCharsText = document.getElementById("remaining-chars");

remainingCharsText.textContent = 250;

feedback.addEventListener("input", function() {
	
	let feedbackContent = feedback.value;
	let length = feedbackContent.length;
	let remainingChars = 250 - length;
	remainingCharsText.textContent = remainingChars;
	
});




