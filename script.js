const quizData = [
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a: "<script name='xxx.js'>",
    b: "<script src='xxx.js'>",
    c: "<script href='xxx.js'>",
    d: "<script file='xxx.js'>",
    correct: "b"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    a: "msgBox('Hello World');",
    b: "alertBox('Hello World');",
    c: "msg('Hello World');",
    d: "alert('Hello World');",
    correct: "d"
  },
  {
    question: "How do you create a function in JavaScript?",
    a: "function = myFunction()",
    b: "function:myFunction()",
    c: "function myFunction()",
    d: "create.myFunction()",
    correct: "c"
  },
  {
    question: "How do you call a function named 'myFunction'?",
    a: "call myFunction()",
    b: "myFunction()",
    c: "call function myFunction()",
    d: "Call.myFunction()",
    correct: "b"
  },
  {
    question: "How to write an IF statement in JavaScript?",
    a: "if i = 5 then",
    b: "if i == 5 then",
    c: "if (i == 5)",
    d: "if i = 5",
    correct: "c"
  },
  // Additional 45 questions...
];

// Quiz logic code continues here (same as the one shared earlier)

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
