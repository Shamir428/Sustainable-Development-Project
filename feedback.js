
//Form input validation

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const form = document.getElementById("feedback-form");
const tel = document.getElementById("tel");
const address = document.getElementById("address");
const feedback = document.getElementById("feedback");
const programmeFeedback = document.getElementById("programme-feedback");
const visitDate = document.getElementById("visit-date");
const submitDate = document.getElementById("submit-date");

const telephoneError = document.getElementById("telephone-error");
const addressError = document.getElementById("address-errror");
const feedbackError = document.getElementById("feedback-error");
const programmeError = document.getElementById("programme-error");
const visitDateError = document.getElementById("visit-date-error");
const submitDateError = document.getElementById("submit-date-error");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");


form.addEventListener("submit", handleFormSubmit);


function validateForm() {
	let isValid = true;
	clearErrors();
	let fullNameText = fullName.value.trim();
	let emailText = email.value.trim();
	
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

let feedback = document.getElementById("feedback");

let remainingCharsText = document.getElementById("remaining-chars");

remainingCharsText.textContent = 250;

feedback.addEventListener("input", function() {
	
	let feedbackContent = feedback.value;
	let length = feedbackContent.length;
	let remainingChars = 250 - length;
	remainingCharsText.textContent = remainingChars;
	
});




