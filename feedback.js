
//Form input validation

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const form = document.getElementById("feedback-form");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");


form.addEventListener("submit", handleFormSubmit);


function validateForm() {
	clearErrors();
	isValid = true;
	
	let fullNameText = fullName.value.trim();
	let emailText = email.value.trim();
	
	if (!fullNameText.includes(' ')) {
		nameError.textContent = "Full name is required";
		isValid = false;
	}
	if (emailText === "") {
		emailError.textContent = "A valid address with @ and domain is required";
	}
	
	
}


function clearErrors() {
	nameError.textContent = "";
}


function handleFormSubmit(event) {
	event.preventDefault(); /*The form does not send or save data anywhere, however, 
							by default, clicking a submit button in a form still triggers browser to refresh or something similar.
							Calling preventDefault() on event object which is
						    an object that is created when the form submission event is triggered and stores information about that event, prevents the default behavior of
						    the browser to trigger */
	
	validateForm();
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




