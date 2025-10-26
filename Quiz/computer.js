const questions = [
  {
    question: "Artificial Intelligence is about",
    answers: [
      { text: "playing games on a computer", correct: false },
      { text: "making a machine intelligent", correct: true },
      { text: "programming a machine with your intelligence", correct: false },
      { text: "putting your intelligence in a machine", correct: false }
    ]
  },
  {
    question: "The application of Artificial Intelligence is",
    answers: [
      { text: "Expert systems", correct: true },
      { text: "Gaming", correct: true },
      { text: "Vision systems", correct: true },
      { text: "All of the above", correct: true }
    ]
  },
  {
    question: "Which of the following is not an application of IoT",
    answers: [
      { text: "Smart Home", correct: false },
      { text: "Smart Agriculture", correct: false },
      { text: "Smart City", correct: false },
      { text: "Smart Person", correct: true }
    ]
  },
  {
    question: "........is not an E-Commerce application",
    answers: [
      { text: "House Banking", correct: false },
      { text: "Buying stocks", correct: false },
      { text: "Evaluating an employee", correct: true },
      { text: "Conducting an auction", correct: false }
    ]
  }
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
  questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

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
  nextButton.style.display = "none";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function restartQuiz() {
  scoreContainer.style.display = "none";
  startQuiz();
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }
});

restartButton.addEventListener("click", restartQuiz);

startQuiz();
