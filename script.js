const quizQuestions = [
  {
    question: "Did your child struggle to learn to count?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question:
      "Does he/she say numbers out of order, long after peers have mastered this skill?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question:
      "Does your child not seem to understand the connection between the symbol '4' and the word 'four'? Does he make mistakes when reading or following directions involving numbers, words and symbols?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question:
      "Does your child struggle to connect the concept of numbers to real-world items? When you ask him how many cookies are left, for example, does he seem confused by the question or answer incorrectly?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question:
      "Does your child not seem to understand the difference between adding and subtracting? Does she confuse the + and - symbols when completing math problems?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question: "Does your child still count on his fingers past third grade?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question: "Difficulty sustaining attention; seems 'hyper' or 'daydreamer'?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question:
      "Confused by letters, numbers, words, sequences, or verbal explanations?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question: "Reads and rereads with little comprehension?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question:
      "Difficulty putting thoughts into words; speaks in halting phrases; leaves sentences incomplete?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question:
      "Can count, but has difficulty counting objects and dealing with money?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question:
      "Does your child worry for sequences, facts and information that were not taught before?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question:
      "Does your child complain of dizziness, headaches or stomach aches while reading?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question:
      "Is reading extremely difficult for your child? (Below grade or age level)",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question: "Is his spelling ability poor? Letters missed, reversed etc?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question:
      "Is it difficult for him to rhyme words? (If you are not sure, play a rhyming game with your child or student)",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question:
      "Is there difficulty telling time on a clock with hands and/or tying shoes with laces?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question:
      "Is there difficulty finding the right words while speaking? Lots of ums, ahs, 'those things', and 'that stuff'?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question: "Pauses, repeats or frequent mistakes when reading aloud?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
  {
    question: "Unusually high or low tolerance for pain?",
    options: ["Yes-frequently", "No-never"],
    correctAnswer: "Yes-frequently",
    score: 0,
    audio: "",
    image: "",
  },
];

function displayAudioUI() {
  var audioElement = document.getElementById("question-audio");

  // Check if src attribute is not specified
  if (!audioElement.src) {
    // If src is not specified, set display to "none"
    audioElement.style.display = "none";
  }
}
displayAudioUI();

// Variables to track quiz state
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

// Function to start the quiz
function startQuiz() {
  // Hide the start button and display the first question
  document.getElementById("start-button").style.display = "none";
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  const questionImage = document.getElementById("question-image");
  const questionAudio = document.getElementById("question-audio");

  questionText.innerHTML = "";
  answerButtons.innerHTML = "";
  questionImage.src = "";
  questionAudio.src = "";

  questionText.innerHTML = currentQuestion.question;

  if (currentQuestion.image !== "") {
    questionImage.src = currentQuestion.image;
    questionImage.style.display = "block";
  } else {
    questionImage.style.display = "none";
  }
  // print(`currentQuestion.audio ${currentQuestion.audio}`);

  if (currentQuestion.audio !== "") {
    questionAudio.src = currentQuestion.audio;
    questionAudio.style.display = "block";
  } else {
    questionAudio.style.display = "none";
  }

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    button.addEventListener("click", function () {
      checkAnswer(option);
    });
  });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
    currentQuestion.score = currentQuestion.score + 4;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;

    // // Update the timer text
    // document.getElementById("timer").textContent = timeLeft;

    // // End the quiz if time runs out
    // if (timeLeft <= 0) {
    //   endQuiz();
    // }
  }, 1000);
}

// Function to end the quiz
function endQuiz() {
  // Stop the timer
  clearInterval(timerInterval);

  // Calculate the score percentage
  const scorePercentage = (score / quizQuestions.length) * 100;

  var languageVocabScore = 0;
  var memoryScore = 0;
  var visualDiscriminationScore = 0;
  var audioDiscriminationScore = 0;
  var surveyScore = 0;

  for (var i = 0; i < quizQuestions.length; i++) {
    if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 7) {
      languageVocabScore = languageVocabScore + quizQuestions[i].score;
    }
    if (i == 1 || i == 8) {
      memoryScore = memoryScore + quizQuestions[i].score;
    }
    if (i == 0 || i == 2 || i == 3 || i == 5) {
      visualDiscriminationScore =
        visualDiscriminationScore + quizQuestions[i].score;
    }
    if (i == 6 || i == 9) {
      audioDiscriminationScore =
        audioDiscriminationScore + quizQuestions[i].score;
    }
    surveyScore = surveyScore + quizQuestions[i].score;
  }
  languageVocabScore = languageVocabScore / 28;
  memoryScore = memoryScore / 8;
  visualDiscriminationScore = visualDiscriminationScore / 16;
  audioDiscriminationScore = audioDiscriminationScore / 8;
  surveyScore = surveyScore / 80;

  // Display the final score
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Survey Score: ${surveyScore.toFixed(2)}</p>
  `;
}

// Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);
