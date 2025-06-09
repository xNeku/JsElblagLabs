// Configuración inicial
let currentIndex = 0;
let totalScore = 0;

const quizData = [
  ['What is the capital of France?', 'Paris'],
  ['2 + 2 = ?', '4'],
  ['What is the color of the sky on a clear day?', 'blue'],
  ['What programming language are we using?', 'JavaScript'],
  ['How many legs does a spider have?', '8']
];

// Referencias al DOM
const questionDisplay = document.getElementById('question-text');
const inputField = document.getElementById('answer-input');
const feedbackText = document.getElementById('result-text');
const nextButton = document.getElementById('next-button');

// Mostrar primera pregunta al cargar
loadQuestion();

function loadQuestion() {
  if (currentIndex < quizData.length) {
    questionDisplay.textContent = quizData[currentIndex][0];
    inputField.value = '';
    inputField.focus();
  } else {
    displayFinalScore();
  }
}

function goToNext() {
  const userInput = inputField.value.trim().toLowerCase();
  const correct = quizData[currentIndex][1].toLowerCase();

  if (userInput === correct) {
    totalScore++;
  } else {
    alert(`Incorrect. Correct answer: ${quizData[currentIndex][1]}`);
  }

  currentIndex++;
  loadQuestion();
}

function displayFinalScore() {
  questionDisplay.textContent = '';
  inputField.style.display = 'none';
  nextButton.style.display = 'none';
  feedbackText.innerHTML = `<strong>You scored ${totalScore} out of ${quizData.length}.</strong>`;
}
