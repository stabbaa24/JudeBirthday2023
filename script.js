const enigmes = [
    "Je suis l'endroit où nous avons partagé notre premier baiser.",
    "Lorsque le soleil s'est couché la 2ème fois, nos lèvres se sont à nouveau rencontrées. " +
    "À quelle heure était-ce ?",
    "Dans le doux secret d'un instant qui a scellé notre intimité, nos âmes se sont entrelacées pour la première fois. " +
    "Quel jour inoubliable était-ce ?",
];

const reponses = [
    "Une voiture",
    "~00h",
    "13 mars"
];

const options = [
    ["Un banc", "Une voiture", "Un lit"],
    ["~18h", "~22h", "~00h"],
    ["01 janvier", "20 février", "13 mars"]
];

let enigmeIndex = 0;

function startGame() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1>Question ${enigmeIndex + 1}</h1>
        <p>${enigmes[enigmeIndex]}</p>
        <form id="enigme-form">
            <div class="options-container">
                ${options[enigmeIndex].map(option => `
                    <label>
                        <input type="radio" name="reponse" value="${option}">
                        ${option.charAt(0).toUpperCase() + option.slice(1)}
                    </label>
                `).join('')}
            </div>
            <button class="button" type="button" onclick="checkAnswer()">Soumettre</button>
            <p id="feedback" class="hidden">Recommence mon amour</p>
        </form>
    `;
}

function checkAnswer() {
    const form = document.getElementById('enigme-form');
    const reponse = form.elements['reponse'].value;
    const feedback = document.getElementById('feedback');

    if (reponse === reponses[enigmeIndex]) {
        enigmeIndex++;

        if (enigmeIndex < enigmes.length) {
            startGame();
        } else {
            openLetter();
        }

    } else {
        feedback.classList.remove('hidden');
        form.reset();
    }
}

function openLetter() {
    const container = document.querySelector('.container');
    const letter = document.querySelector('.letter');

    container.style.display = "none";
    letter.style.display = "block";
}
