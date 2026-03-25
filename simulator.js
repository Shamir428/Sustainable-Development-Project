let total = 0;

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

    if (total <= 3) {
        message = "Poor Health Habits";
        document.body.style.background = "linear-gradient(to right, #ff9a9e, #ff4d4d)";
    }
    else if (total <= 7) {
        message = "Moderate Lifestyle";
        document.body.style.background = "linear-gradient(to right, #fddb92, #d1a300)";
    }
    else {
        message = "Healthy Lifestyle!";
        document.body.style.background = "linear-gradient(to right, #a8ff78, #00c853)";
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

    document.body.style.background = "linear-gradient(to right, #e3f2fd, #f1f8e9)";

    let cards = document.querySelectorAll(".card");
    cards.forEach(card => card.classList.remove("selected"));
}
