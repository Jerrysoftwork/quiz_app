const quizData = [
  {
    question: "What does JS stand for?",
    a: "JavaStructure",
    b: "JavaScript",
    c: "JustScript",
    d: "Jolly Script",
    correct: "b"
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    a: "Undefined",
    b: "Number",
    c: "Float",
    d: "Boolean",
    correct: "c"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    a: "//",
    b: "#",
    c: "<!-- -->",
    d: "**",
    correct: "a"
  },
  // ... [Add 47 more questions here]
];

// Initialize
let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentData = quizData[currentQuiz];

  questionEl.innerText = currentData.question;
  a_text.innerText = currentData.a;
  b_text.innerText = currentData.b;
  c_text.innerText = currentData.c;
  d_text.innerText = currentData.d;
}

function deselectAnswers() {
  answerEls.forEach(answer => answer.checked = false);
}

function getSelected() {
  let answer;
  answerEls.forEach(ans => {
    if (ans.checked) {
      answer = ans.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} correctly</h2><button onclick="location.reload()">Reload</button>`;
    }
  }
});
