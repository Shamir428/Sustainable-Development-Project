
//Form input validation

let fullName = document.getElementById("full-name");
let email = document.getElementById("email");
let form = document.getElementById("feedback-form");

form.addEventListener("submit", handleFormSubmit);


function validateForm() {
	if (!fullName.strip().includes(' ')) {
		console.log("false");
	}
}


function handleFormSubmit(event) {
	event.preventDefault(); /*The form does not send or save data anywhere, however, 
							by default, clicking a submit button in a form still triggers browser to refresh or something similar.
							Calling preventDefault() on event object which is
						    an object that is created when the form submission event is triggered and stores information about that event, prevents the default behavior of
						    the browser to trigger */
	
	
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




