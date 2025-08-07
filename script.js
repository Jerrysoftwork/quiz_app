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
  {
    question: "How do you declare a variable in JS?",
    a: "v myVar;",
    b: "let myVar;",
    c: "int myVar;",
    d: "var:myVar;",
    correct: "b"
  },
  {
    question: "Which function is used to output to the console?",
    a: "console.write()",
    b: "log.console()",
    c: "console.log()",
    d: "print.console()",
    correct: "c"
  },
  {
    question: "What is JavaScript primarily used for?",
    a: "Server-side scripting",
    b: "Styling web pages",
    c: "Web development interactivity",
    d: "Database management",
    correct: "c"
  },
  {
    question: "Which keyword declares a variable in JavaScript?",
    a: "var",
    b: "let",
    c: "const",
    d: "All of the above",
    correct: "d"
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    a: "<!-- comment -->",
    b: "# comment",
    c: "// comment",
    d: "** comment **",
    correct: "c"
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    a: "Number",
    b: "String",
    c: "Float",
    d: "Boolean",
    correct: "c"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    a: "alertBox('Hello World');",
    b: "msgBox('Hello World');",
    c: "alert('Hello World');",
    d: "msg('Hello World');",
    correct: "c"
  },
  {
    question: "How do you define a function in JavaScript?",
    a: "function myFunc()",
    b: "def myFunc()",
    c: "fun myFunc()",
    d: "function:myFunc()",
    correct: "a"
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    a: "Current object",
    b: "Parent object",
    c: "Child object",
    d: "None",
    correct: "a"
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    a: "==",
    b: "===",
    c: "!=",
    d: "=",
    correct: "b"
  },
  {
    question: "Which method adds one or more elements to the end of an array?",
    a: "push()",
    b: "pop()",
    c: "shift()",
    d: "unshift()",
    correct: "a"
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    a: "Current object",
    b: "Parent object",
    c: "Child object",
    d: "None",
    correct: "a"
  },
  {
    question: "How do you round a number in JavaScript?",
    a: "Math.round()",
    b: "Math.floor()",
    c: "Math.ceil()",
    d: "round()",
    correct: "a"
  },
  {
    question: "Which method adds one or more elements to the end of an array?",
    a: "push()",
    b: "pop()",
    c: "shift()",
    d: "unshift()",
    correct: "a"
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    a: "JSON.parse()",
    b: "JSON.stringify()",
    c: "JSON.convert()",
    d: "JSON.toObject()",
    correct: "a"
  },
  {
    question: "What is the result of '2' + 2 in JavaScript?",
    a: "4",
    b: "'4'",
    c: "'22'",
    d: "NaN",
    correct: "c"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    a: "onchange",
    b: "onmouseover",
    c: "onclick",
    d: "onmouseclick",
    correct: "c"
  },
  {
    question: "What does DOM stand for?",
    a: "Document Object Model",
    b: "Data Object Management",
    c: "Digital Ordinance Model",
    d: "Desktop Object Management",
    correct: "a"
  },
  {
    question: "What is the result of '2' + 2 in JavaScript?",
    a: "4",
    b: "'4'",
    c: "'22'",
    d: "NaN",
    correct: "c"
  },
  {
    question: "Which method adds one or more elements to the end of an array?",
    a: "push()",
    b: "pop()",
    c: "shift()",
    d: "unshift()",
    correct: "a"
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    a: "Current object",
    b: "Parent object",
    c: "Child object",
    d: "None",
    correct: "a"
  },
  {
    question: "What is the output of typeof null in JavaScript?",
    a: "null",
    b: "object",
    c: "undefined",
    d: "boolean",
    correct: "b"
  },
  {
    question: "What is the output of typeof null in JavaScript?",
    a: "null",
    b: "object",
    c: "undefined",
    d: "boolean",
    correct: "b"
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    a: "==",
    b: "===",
    c: "!=",
    d: "=",
    correct: "b"
  },
  {
    question: "How do you define a function in JavaScript?",
    a: "function myFunc()",
    b: "def myFunc()",
    c: "fun myFunc()",
    d: "function:myFunc()",
    correct: "a"
  },
  {
    question: "What is the result of '2' + 2 in JavaScript?",
    a: "4",
    b: "'4'",
    c: "'22'",
    d: "NaN",
    correct: "c"
  },
  {
    question: "How do you define a function in JavaScript?",
    a: "function myFunc()",
    b: "def myFunc()",
    c: "fun myFunc()",
    d: "function:myFunc()",
    correct: "a"
  },
  {
    question: "Which method adds one or more elements to the end of an array?",
    a: "push()",
    b: "pop()",
    c: "shift()",
    d: "unshift()",
    correct: "a"
  },
  {
    question: "What is the output of typeof null in JavaScript?",
    a: "null",
    b: "object",
    c: "undefined",
    d: "boolean",
    correct: "b"
  },
  {
    question: "What does DOM stand for?",
    a: "Document Object Model",
    b: "Data Object Management",
    c: "Digital Ordinance Model",
    d: "Desktop Object Management",
    correct: "a"
  },
  {
    question: "What is the output of typeof null in JavaScript?",
    a: "null",
    b: "object",
    c: "undefined",
    d: "boolean",
    correct: "b"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    a: "onchange",
    b: "onmouseover",
    c: "onclick",
    d: "onmouseclick",
    correct: "c"
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    a: "Current object",
    b: "Parent object",
    c: "Child object",
    d: "None",
    correct: "a"
  },
  {
    question: "What is the output of typeof null in JavaScript?",
    a: "null",
    b: "object",
    c: "undefined",
    d: "boolean",
    correct: "b"
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    a: "JSON.parse()",
    b: "JSON.stringify()",
    c: "JSON.convert()",
    d: "JSON.toObject()",
    correct: "a"
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    a: "Current object",
    b: "Parent object",
    c: "Child object",
    d: "None",
    correct: "a"
  },
  {
    question: "How do you define a function in JavaScript?",
    a: "function myFunc()",
    b: "def myFunc()",
    c: "fun myFunc()",
    d: "function:myFunc()",
    correct: "a"
  },
  {
    question: "How do you round a number in JavaScript?",
    a: "Math.round()",
    b: "Math.floor()",
    c: "Math.ceil()",
    d: "round()",
    correct: "a"
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    a: "Current object",
    b: "Parent object",
    c: "Child object",
    d: "None",
    correct: "a"
  },
  {
    question: "How do you define a function in JavaScript?",
    a: "function myFunc()",
    b: "def myFunc()",
    c: "fun myFunc()",
    d: "function:myFunc()",
    correct: "a"
  },
  {
    question: "What does DOM stand for?",
    a: "Document Object Model",
    b: "Data Object Management",
    c: "Digital Ordinance Model",
    d: "Desktop Object Management",
    correct: "a"
  },
  {
    question: "Which method adds one or more elements to the end of an array?",
    a: "push()",
    b: "pop()",
    c: "shift()",
    d: "unshift()",
    correct: "a"
  },
  {
    question: "What is the result of '2' + 2 in JavaScript?",
    a: "4",
    b: "'4'",
    c: "'22'",
    d: "NaN",
    correct: "c"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    a: "onchange",
    b: "onmouseover",
    c: "onclick",
    d: "onmouseclick",
    correct: "c"
  },
  {
    question: "How do you round a number in JavaScript?",
    a: "Math.round()",
    b: "Math.floor()",
    c: "Math.ceil()",
    d: "round()",
    correct: "a"
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    a: "Current object",
    b: "Parent object",
    c: "Child object",
    d: "None",
    correct: "a"
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    a: "==",
    b: "===",
    c: "!=",
    d: "=",
    correct: "b"
  },
  {
    question: "Which method adds one or more elements to the end of an array?",
    a: "push()",
    b: "pop()",
    c: "shift()",
    d: "unshift()",
    correct: "a"
  },
  {
    question: "How do you round a number in JavaScript?",
    a: "Math.round()",
    b: "Math.floor()",
    c: "Math.ceil()",
    d: "round()",
    correct: "a"
  },
  {
    question: "What is the output of typeof null in JavaScript?",
    a: "null",
    b: "object",
    c: "undefined",
    d: "boolean",
    correct: "b"
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    a: "==",
    b: "===",
    c: "!=",
    d: "=",
    correct: "b"
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    a: "==",
    b: "===",
    c: "!=",
    d: "=",
    correct: "b i love jesu"
  },
];


let currentQuiz = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const progress = document.getElementById('progress');
const quiz = document.getElementById('quiz');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentData = quizData[currentQuiz];

  questionEl.innerText = currentData.question;
  a_text.innerText = currentData.a;
  b_text.innerText = currentData.b;
  c_text.innerText = currentData.c;
  d_text.innerText = currentData.d;
  progress.innerText = `Question ${currentQuiz + 1} of ${quizData.length}`;

  // Restore previously selected answer
  if (userAnswers[currentQuiz]) {
    document.getElementById(userAnswers[currentQuiz]).checked = true;
  }

  prevBtn.disabled = currentQuiz === 0;
  nextBtn.innerText = currentQuiz === quizData.length - 1 ? 'Finish' : 'Next';
}

function deselectAnswers() {
  answerEls.forEach(el => el.checked = false);
}

function getSelected() {
  let answer;
  answerEls.forEach(el => {
    if (el.checked) {
      answer = el.id;
    }
  });
  return answer;
}

nextBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    userAnswers[currentQuiz] = answer;
  }

  if (currentQuiz < quizData.length - 1) {
    currentQuiz++;
    loadQuiz();
  } else {
    // Calculate final score
    userAnswers.forEach((ans, idx) => {
      if (ans === quizData[idx].correct) {
        score++;
      }
    });

    const percentage = ((score / quizData.length) * 100).toFixed(2);
    quiz.innerHTML = `
      <h2>You scored ${score} out of ${quizData.length} (${percentage}%)</h2>
      <button onclick="location.reload()">Reload</button>
    `;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentQuiz > 0) {
    currentQuiz--;
    loadQuiz();
  }
});
