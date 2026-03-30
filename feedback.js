
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
	
	let nameParts = fullNameText.split(/\s+/) /*Use regex pattern which matches types of texts, in this case 1 or more whitespaces */
	if (!fullNameText.includes(' ')) {
		nameError.textContent = "Full name is required";
		isValid = false;
	}
	if (emailText === "" || !emailText.includes("@") || emailText.charAt(emailText.length - 1) === "@" || !emailText.includes(".") || emailText.charAt(emailText.length - 1) === "."|| emailText.charAt(0) === "." || emailText.charAt(0) === "@") {
		emailError.textContent = "A valid address with @ and domain is required";
		isValid = false;
	}
	
	return isValid;
	
	
}


function clearErrors() {
	nameError.textContent = "";
	emailError.textContent = "";
	
}


function handleFormSubmit(event) {
	event.preventDefault(); /*The form does not send or save data anywhere, however, 
							by default, clicking a submit button in a form still triggers browser to refresh or something similar.
							Calling preventDefault() on event object which is
						    an object that is created when the form submission event is triggered and stores information about that event, prevents the default behavior of
						    the browser to trigger */
	
	if (validateForm() === false) {
		console.log("False")
	}
	else {
		console.log("True");
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




