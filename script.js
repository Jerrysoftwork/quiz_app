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
  {
    question: "What is the correct way to write a JavaScript array?",
    a: "var colors = 'red', 'green', 'blue'",
    b: "var colors = (1:'red', 2:'green', 3:'blue')",
    c: "var colors = ['red', 'green', 'blue']",
    d: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    correct: "c"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    a: "onmouseover",
    b: "onchange",
    c: "onclick",
    d: "onmouseclick",
    correct: "c"
  },
  {
    question: "How do you declare a JavaScript variable?",
    a: "v carName;",
    b: "var carName;",
    c: "variable carName;",
    d: "string carName;",
    correct: "b"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    a: "*",
    b: "=",
    c: "-",
    d: "+",
    correct: "b"
  },
  {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
    a: "document.getElement('p').innerHTML = 'Hello World!';",
    b: "document.getElementById('demo').innerHTML = 'Hello World!';",
    c: "#demo.innerHTML = 'Hello World!';",
    d: "document.getElementByName('p').innerHTML = 'Hello World!';",
    correct: "b"
  }
];

// Add 40 more questions here for full 50 coverage...

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
    quiz.innerHTML = `<h2>You scored ${score}/${quizData.length}!</h2><button onclick=\"location.reload()\">Restart</button>`;
  }
});

loadQuiz();