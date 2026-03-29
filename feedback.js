
let feedback = document.getElementById("feedback");

let charCounter = document.getElementById("remaining-chars");

feedback.addEventListener("input", function() {
	let feedbackText = feedback.value;
	let length = feedbackText.length;
	charCounter.textContent = length;
});


