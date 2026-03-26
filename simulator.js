let total = 0;

const LOW_MAX = 4;
const MEDIUM_MAX = 8;

function selectAction(element, points) {

    if (element.classList.contains("selected")) return;

    element.classList.add("selected");

    total += points;

    document.getElementById("score").innerText = total;

    updateImpact();
    updateProgress();
}

function updateImpact() {

    let message = "";

    if (total <= LOW_MAX) {
        message = "Low Impact – Try to improve your habits.";

        document.body.style.backgroundImage = "url('img/low.jpg')";
        document.body.style.backgroundSize = "cover";
    }

    else if (total <= MEDIUM_MAX) {
        message = "Medium Impact – You're on the right track.";

        document.body.style.backgroundImage = "url('img/medium.jpg')";
        document.body.style.backgroundSize = "cover";
    }

    else {
        message = "High Impact – Excellent healthy lifestyle!";

        document.body.style.backgroundImage = "url('img/high.jpg')";
        document.body.style.backgroundSize = "cover";
    }

    document.getElementById("impact").innerText = message;
}

function updateProgress() {
    let percent = (total / 13) * 100;
    document.getElementById("progress-bar").style.width = percent + "%";
}

function resetSimulator() {
    total = 0;

    document.getElementById("score").innerText = total;
    document.getElementById("impact").innerText = "Select actions to see your impact";
    document.getElementById("progress-bar").style.width = "0%";

    document.body.style.backgroundImage = "none";
    document.body.style.background = "linear-gradient(to right, #e3f2fd, #f1f8e9)";

    let cards = document.querySelectorAll(".card");
    cards.forEach(card => card.classList.remove("selected"));
}