document.addEventListener("DOMContentLoaded", renderQuiz);

const quizData = [
    ['How many natural satellites does Earth have?', 1],
    ['Saturn’s moon count?', 62],
    ['Moons orbiting Venus?', 0]
];

let index = 0;
let totalCorrect = 0;

function renderQuiz() {
    const container = document.getElementById('quiz-box');
    if (!container) return; // Safety check
    if (index < quizData.length) {
        container.innerHTML = `
            <p>${quizData[index][0]}</p>
            <input type="number" id="response" />
            <button id="submit-answer">Answer</button>
        `;
        document.getElementById('submit-answer').addEventListener('click', evaluate);
    } else {
        container.innerHTML = '';
        document.getElementById('final-score').textContent = `You scored ${totalCorrect} out of ${quizData.length}.`;
    }
}

function evaluate() {
    const userResponse = parseInt(document.getElementById('response').value);
    if (userResponse === quizData[index][1]) {
        alert("That's right!");
        totalCorrect++;
    } else {
        alert(`Oops! Correct answer: ${quizData[index][1]}`);
    }
    index++;
    renderQuiz();
}
