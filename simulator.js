let total = 0;

// Thresholds (clearly defined for marking)
const LOW_MAX = 4;
const MEDIUM_MAX = 8;

// FUNCTION TO SET BACKGROUND CLEANLY
function setBackground(image) {
    document.body.style.backgroundImage = `url('${image}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

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

    // LOW IMPACT
    if (total <= LOW_MAX) {
        message = "Low Impact – Try to improve your habits.";
        setBackground("img/low.jpg");
    }

    // MEDIUM IMPACT
    else if (total <= MEDIUM_MAX) {
        message = "Medium Impact – You're on the right track.";
        setBackground("img/medium.jpg");
    }

    // HIGH IMPACT
    else {
        message = "High Impact – Excellent healthy lifestyle!";
        setBackground("img/high.jpg");
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

    // Reset background to default
    document.body.style.backgroundImage = "none";
    document.body.style.background = "linear-gradient(to right, #e3f2fd, #f1f8e9)";

    let cards = document.querySelectorAll(".card");
    cards.forEach(card => card.classList.remove("selected"));
}