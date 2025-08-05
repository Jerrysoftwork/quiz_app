const quizData = [
  {
    question: "What does DOM stand for in JavaScript?",
    a: "Document Object Model",
    b: "Data Object Management",
    c: "Document Oriented Model",
    d: "Data Output Method",
    correct: "a"
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    a: "String",
    b: "Boolean",
    c: "Float",
    d: "Number",
    correct: "c"
  },
  // Add more questions here — up to 50
];

const questionEl = document.getElementById('question');
const aBtn = document.getElementById('a');
const bBtn = document.getElementById('b');
const cBtn = document.getElementById('c');
const dBtn = document.getElementById('d');
const nextBtn = document.getElementById('next');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswers();
  const current = quizData[currentQuiz];
  questionEl.textContent = current.question;
  aBtn.textContent = current.a;
  bBtn.textContent = current.b;
  cBtn.textContent = current.c;
  dBtn.textContent = current.d;
}

function deselectAnswers() {
  [aBtn, bBtn, cBtn, dBtn].forEach(btn => btn.style.background = "");
}

[aBtn, bBtn, cBtn, dBtn].forEach(btn => {
  btn.addEventListener("click", () => {
    deselectAnswers();
    btn.style.background = "#90ee90"; // highlight answer
    if (btn.id === quizData[currentQuiz].correct) {
      score++;
    }
  });
});

nextBtn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>You scored ${score}/${quizData.length}!</h2><button onclick="location.reload()">Restart</button>`;
  }
});

loadQuiz();
