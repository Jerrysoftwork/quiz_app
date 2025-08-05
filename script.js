import { quizData } from './quiz_questions_data.js';

const questionEl = document.getElementById('question');
const aBtn = document.getElementById('a');
const bBtn = document.getElementById('b');
const cBtn = document.getElementById('c');
const dBtn = document.getElementById('d');
const nextBtn = document.getElementById('next');
const progressEl = document.getElementById('progress');

let currentQuiz = 0;
let score = 0;
let selected = null;

function loadQuiz() {
  deselectAnswers();
  const current = quizData[currentQuiz];
  questionEl.textContent = current.question;
  aBtn.textContent = current.a;
  bBtn.textContent = current.b;
  cBtn.textContent = current.c;
  dBtn.textContent = current.d;
  progressEl.textContent = `Question ${currentQuiz + 1} of ${quizData.length}`;
}

function deselectAnswers() {
  selected = null;
  [aBtn, bBtn, cBtn, dBtn].forEach(btn => btn.style.background = "");
}

[aBtn, bBtn, cBtn, dBtn].forEach(btn => {
  btn.addEventListener("click", () => {
    deselectAnswers();
    selected = btn.id;
    btn.style.background = "#90ee90"; // green highlight
  });
});

nextBtn.addEventListener("click", () => {
  if (selected) {
    if (selected === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You scored ${score}/${quizData.length}!</h2><button onclick=\"location.reload()\">Restart</button>`;
    }
  } else {
    alert("Please select an answer before continuing.");
  }
});

loadQuiz();
