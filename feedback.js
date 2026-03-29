
//Form input validation

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const form = document.getElementById("feedback-form");

form.addEventListener("submit", (event) => {
event.preventDefault();


});



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




