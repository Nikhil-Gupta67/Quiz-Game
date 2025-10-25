// Define the questions and answers
const questions = [
    {
      question:"e is",
      answers:[
          {text:"a real number",correct:false},
          {text:"a rational number",correct:false},
          {text:"a natural number",correct:false},
          {text:"an irrational number",correct:true},
      ],
    },
    {
      question: "6+8+10+...10 terms",
      answers: [
        { text: "110", correct: false },
        { text: "108", correct: false },
        { text: "104", correct: true },
        { text: "106", correct: false },
      ],
    },
    {
      question: "The product of two vector is",
      answers: [
        { text: "a vector", correct: false },
        { text: "a scalar", correct: false },
        { text: "no defined", correct: false },
        { text: "all of them", correct: true },
      ],
    },
    {
      question: "if the edge of a cube is 5cm with an error of 0.02cm, then the percentage error in the computed surface area is",
      answers: [
        { text: "0.8%", correct: true },
        { text: "0.8016%", correct: false },
        { text: "0.002%", correct: false },
        { text: "0.33%", correct: false },
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
  
  // Start the quiz
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    scoreContainer.style.display = "none";
    showQuestion();
  }
  
  // Show the current question
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  
    currentQuestion.answers.forEach(answer => {
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
  
  // Reset the state (disable buttons, hide next button)
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  // Handle answer selection
  function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
  
    if (isCorrect) {
      selectedButton.classList.add("correct");
      score++;
    } else {
      selectedButton.classList.add("incorrect");
    }
  
    // Disable all buttons after selecting an answer
    Array.from(answerButtons.children).forEach(button => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
    });
  
    nextButton.style.display = "block"; // Show next button
  }
  
  // Show the score at the end of the quiz
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
  