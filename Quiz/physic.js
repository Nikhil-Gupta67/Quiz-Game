const questions = [
  {
    question: "The self inductance of a straight wire is",

    answers: [
      { text: "zero", correct: true },
      { text: "infinity", correct: false },
      { text: "negative", correct: false },
      { text: "positive", correct: false },
    ],
  },
  {
    question: "For an emf induced in a coil, the linking magnetic flux",
    answers: [
      { text: "must decrease", correct: false },
      { text: "must increase", correct: false },
      { text: "remain constant", correct: false },
      { text: "change", correct: true },
    ],
  },
  {
    question: "Viscosity of an ideal liquid is",
    answers: [
      { text: "1", correct: false },
      { text: "0.5", correct: false },
      { text: "0.1", correct: false },
      { text: "0", correct: true },
    ],
  },
  {
    question:
      "Which quantity in rotational motion is analogous to force in linear motion?",
    answers: [
      { text: "Torque", correct: true },
      { text: "Moment of inertia", correct: false },
      { text: "Angular velocity", correct: false },
      { text: "Angular momentum", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "none";
  scoreContainer.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = `${currentQuestionIndex + 1}. ${
    currentQuestion.question
  }`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  nextButton.style.display = "block";
}

function showScore() {
  questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
  scoreContainer.style.display = "block";
  nextButton.style.display = "none"; // Hide next button when score is displayed
}

// Handle the next button
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Handle play again (restart quiz)
function restartQuiz() {
  scoreContainer.style.display = "none";
  startQuiz();
}

// Event listeners
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }
});

restartButton.addEventListener("click", restartQuiz);

// Initialize the quiz
startQuiz();
