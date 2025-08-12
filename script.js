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
    question: "How do you round a number in JavaScript?",
    a: "Math.round()",
    b: "Math.floor()",
    c: "Math.ceil()",
    d: "round()",
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
    question: "What is the output of typeof null in JavaScript?",
    a: "null",
    b: "object",
    c: "undefined",
    d: "boolean",
    correct: "b"
  },
  {
    question: "Which method removes the last element from an array?",
    a: "push()",
    b: "pop()",
    c: "shift()",
    d: "unshift()",
    correct: "b"
  },
  {
    question: "What is the correct way to create an array in JavaScript?",
    a: "var arr = []",
    b: "var arr = ()",
    c: "var arr = {}",
    d: "var arr = <>",
    correct: "a"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    a: "*",
    b: "=",
    c: "-",
    d: "x",
    correct: "b"
  },
  {
    question: "What will the following code return: Boolean(10 > 9)?",
    a: "true",
    b: "false",
    c: "NaN",
    d: "undefined",
    correct: "a"
  },
  {
    question: "Which method can be used to find the length of a string?",
    a: "len()",
    b: "length()",
    c: "size()",
    d: "length",
    correct: "d"
  },
  {
    question: "How do you create a function in JavaScript?",
    a: "function = myFunction() {}",
    b: "function myFunction() {}",
    c: "create myFunction() {}",
    d: "def myFunction() {}",
    correct: "b"
  },
  {
    question: "Which method removes the first element from an array?",
    a: "push()",
    b: "pop()",
    c: "shift()",
    d: "unshift()",
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
    question: "How does a WHILE loop start?",
    a: "while i = 1 to 10",
    b: "while (i <= 10; i++)",
    c: "while (i <= 10)",
    d: "while i <= 10",
    correct: "c"
  },
  {
    question: "How does a FOR loop start?",
    a: "for (i = 0; i <= 5)",
    b: "for i = 1 to 5",
    c: "for (i <= 5; i++)",
    d: "for (i = 0; i <= 5; i++)",
    correct: "d"
  },
  {
    question: "What is the correct way to write a conditional statement for executing some code if 'i' is NOT equal to 5?",
    a: "if i =! 5 then",
    b: "if (i <> 5)",
    c: "if i <> 5",
    d: "if (i != 5)",
    correct: "d"
  },
  {
    question: "How can you add a comment in a JavaScript?",
    a: "'This is a comment",
    b: "<!--This is a comment-->",
    c: "//This is a comment",
    d: "*This is a comment*",
    correct: "c"
  },
  {
    question: "Which built-in method returns the length of the string?",
    a: "length()",
    b: "size()",
    c: "index()",
    d: "length",
    correct: "d"
  },
  {
    question: "Which built-in method combines the text of two strings and returns a new string?",
    a: "append()",
    b: "concat()",
    c: "attach()",
    d: "None of the above",
    correct: "b"
  },
  {
    question: "Which of the following function of Number object returns the value of the number?",
    a: "toString()",
    b: "valueOf()",
    c: "toLocaleString()",
    d: "toPrecision()",
    correct: "b"
  },
  {
    question: "Which of the following function of Array object adds one or more elements to the front of an array?",
    a: "unshift()",
    b: "push()",
    c: "join()",
    d: "reverse()",
    correct: "a"
  },
  {
    question: "Which of the following function of String object returns the character at the specified index?",
    a: "charAt()",
    b: "charCodeAt()",
    c: "concat()",
    d: "indexOf()",
    correct: "a"
  },
  {
    question: "Which of the following function of String object combines the text of two strings?",
    a: "add()",
    b: "merge()",
    c: "concat()",
    d: "append()",
    correct: "c"
  },
  {
    question: "Which of the following function of Array object returns the first index at which a given element can be found in the array?",
    a: "indexOf()",
    b: "join()",
    c: "lastIndexOf()",
    d: "map()",
    correct: "a"
  },
  {
    question: "Which keyword is used to check whether a given property exists or not?",
    a: "exists",
    b: "exist",
    c: "in",
    d: "lies",
    correct: "c"
  },
  {
    question: "What does the delete operator do?",
    a: "Deletes a property from an object",
    b: "Deletes an object",
    c: "Deletes a variable",
    d: "Deletes a function",
    correct: "a"
  },
  {
    question: "What does the isNaN() function do?",
    a: "Returns true if the argument is not a number",
    b: "Returns false if the argument is not a number",
    c: "Returns true if the argument is a number",
    d: "Converts a string to a number",
    correct: "a"
  },
  {
    question: "Which method is used to convert a JavaScript value to a JSON string?",
    a: "JSON.parse()",
    b: "JSON.stringify()",
    c: "JSON.convert()",
    d: "JSON.toString()",
    correct: "b"
  },
  {
    question: "What is the result of 0.1 + 0.2 in JavaScript?",
    a: "0.3",
    b: "0.30000000000000004",
    c: "0.12",
    d: "NaN",
    correct: "b"
  },
  {
    question: "Which method is used to remove whitespace from both ends of a string?",
    a: "strip()",
    b: "trim()",
    c: "clean()",
    d: "remove()",
    correct: "b"
  },
  {
    question: "What is the difference between '==' and '===' operators?",
    a: "No difference",
    b: "=== checks type and value, == only checks value",
    c: "== checks type and value, === only checks value",
    d: "=== is faster than ==",
    correct: "b"
  },
  {
    question: "Which method is used to convert a string to lowercase?",
    a: "toLowerCase()",
    b: "toLower()",
    c: "lower()",
    d: "lowerCase()",
    correct: "a"
  },
  {
    question: "What is the purpose of the 'use strict' directive?",
    a: "Makes JavaScript run faster",
    b: "Enables strict mode for better error checking",
    c: "Compresses JavaScript code",
    d: "Makes variables global",
    correct: "b"
  },
  {
    question: "Which method is used to sort the elements of an array?",
    a: "order()",
    b: "sort()",
    c: "arrange()",
    d: "organize()",
    correct: "b"
  },
  {
    question: "What does the setTimeout() function do?",
    a: "Executes code immediately",
    b: "Executes code after a specified delay",
    c: "Stops code execution",
    d: "Loops code execution",
    correct: "b"
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    a: "constant",
    b: "const",
    c: "final",
    d: "static",
    correct: "b"
  }
];

// Remove duplicates and keep only unique questions
const uniqueQuizData = quizData.filter((item, index, arr) => 
  index === arr.findIndex(t => t.question === item.question)
);

let currentQuiz = 0;
let score = 0;
let userAnswers = new Array(uniqueQuizData.length).fill(null);
let timeRemaining = 15;
let timer = null;
let isQuizFinished = false;

// DOM Elements
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const timerText = document.getElementById('timerText');
const timerCircle = document.querySelector('.timer-circle');
const quiz = document.getElementById('quiz');
const quizContent = document.getElementById('quizContent');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const paginationEl = document.getElementById('pagination');
const paginationNumbersEl = document.getElementById('paginationNumbers');

function createPagination() {
  // Create dots pagination
  paginationEl.innerHTML = '';
  
  for (let i = 0; i < uniqueQuizData.length; i++) {
    const dot = document.createElement('div');
    dot.className = 'pagination-do';
    
    if (i === currentQuiz) {
      dot.classList.add('active');
    }
    if (userAnswers[i] !== null) {
      dot.classList.add('answered');
    }
    
    dot.addEventListener('click', () => {
      if (!isQuizFinished) {
        goToQuestion(i);
      }
    });
    
    paginationEl.appendChild(dot);
  }
  
  // Create numbered pagination
  paginationNumbersEl.innerHTML = '';
  
  for (let i = 0; i < uniqueQuizData.length; i++) {
    const numberEl = document.createElement('div');
    numberEl.className = 'pagination-number';
    numberEl.textContent = i + 1;
    
    if (i === currentQuiz) {
      numberEl.classList.add('active');
    }
    if (userAnswers[i] !== null) {
      numberEl.classList.add('answered');
    }
    
    numberEl.addEventListener('click', () => {
      if (!isQuizFinished) {
        goToQuestion(i);
      }
    });
    
    paginationNumbersEl.appendChild(numberEl);
  }
}

function goToQuestion(index) {
  if (index >= 0 && index < uniqueQuizData.length) {
    currentQuiz = index;
    loadQuiz();
  }
}

function startTimer() {
  clearInterval(timer);
  timeRemaining = 15;
  timerText.textContent = timeRemaining;
  timerCircle.classList.remove('warning');
  
  timer = setInterval(() => {
    timeRemaining--;
    timerText.textContent = timeRemaining;
    
    if (timeRemaining <= 5) {
      timerCircle.classList.add('warning');
    }
    
    if (timeRemaining <= 0) {
      clearInterval(timer);
      autoAdvance();
    }
  }, 1000);
}

function autoAdvance() {
  // Don't save an answer if time runs out
  if (currentQuiz < uniqueQuizData.length - 1) {
    currentQuiz++;
    loadQuiz();
  } else {
    finishQuiz();
  }
}

function loadQuiz() {
  if (isQuizFinished) return;
  
  deselectAnswers();
  const currentData = uniqueQuizData[currentQuiz];

  // Animate question change
  questionEl.style.opacity = '0';
  setTimeout(() => {
    questionEl.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
    questionEl.style.opacity = '1';
  }, 150);

  progressText.innerText = `Question ${currentQuiz + 1} of ${uniqueQuizData.length}`;
  
  // Update progress bar
  const progressPercentage = ((currentQuiz + 1) / uniqueQuizData.length) * 100;
  progressFill.style.width = progressPercentage + '%';

  // Restore previously selected answer
  if (userAnswers[currentQuiz]) {
    document.getElementById(userAnswers[currentQuiz]).checked = true;
  }

  prevBtn.disabled = currentQuiz === 0;
  nextBtn.innerHTML = currentQuiz === uniqueQuizData.length - 1 ? 'Finish Quiz 🏁' : 'Next →';
  
  // Update pagination
  createPagination();
  
  // Start timer
  startTimer();
}

function deselectAnswers() {
  answerEls.forEach(el => {
    el.checked = false;
  });
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

function finishQuiz() {
  isQuizFinished = true;
  clearInterval(timer);
  showResults();
}

function showResults() {
  // Calculate final score
  score = 0;
  let answeredCount = 0;
  
  userAnswers.forEach((ans, idx) => {
    if (ans !== null) {
      answeredCount++;
      if (ans === uniqueQuizData[idx].correct) {
        score++;
      }
    }
  });

  const percentage = answeredCount > 0 ? Math.round((score / answeredCount) * 100) : 0;
  const overallPercentage = Math.round((score / uniqueQuizData.length) * 100);
  
  let performanceText = '';
  let performanceEmoji = '';
  
  if (overallPercentage >= 90) {
    performanceText = 'Excellent!';
    performanceEmoji = '🏆';
  } else if (overallPercentage >= 80) {
    performanceText = 'Great Job!';
    performanceEmoji = '🎉';
  } else if (overallPercentage >= 70) {
    performanceText = 'Good Work!';
    performanceEmoji = '👏';
  } else if (overallPercentage >= 60) {
    performanceText = 'Not Bad!';
    performanceEmoji = '👍';
  } else {
    performanceText = 'Keep Learning!';
    performanceEmoji = '📚';
  }

  const unansweredCount = uniqueQuizData.length - answeredCount;

  quizContent.innerHTML = `
    <div class="results-container">
      <div class="results-title">${performanceText} ${performanceEmoji}</div>
      <div class="score-circle">
        <div class="score-content">
          <div class="score-percentage">${overallPercentage}%</div>
          <div class="score-label">SCORE</div>
        </div>
      </div>
      <div class="score-details">
        <div style="margin-bottom: 12px;">
          ✅ Correct: ${score}/${uniqueQuizData.length}
        </div>
        <div style="margin-bottom: 12px;">
          📝 Answered: ${answeredCount}/${uniqueQuizData.length}
        </div>
        ${unansweredCount > 0 ? `<div style="margin-bottom: 12px; color: #ff6b6b;">⏰ Timed out: ${unansweredCount}</div>` : ''}
      </div>
      <button class="restart-button" onclick="location.reload()">
        🔄 Try Again
      </button>
    </div>
  `;
}

nextBtn.addEventListener('click', () => {
  const answer = getSelected();
  
  if (answer) {
    userAnswers[currentQuiz] = answer;
    
    if (currentQuiz < uniqueQuizData.length - 1) {
      currentQuiz++;
      loadQuiz();
    } else {
      finishQuiz();
    }
  } else {
    // Highlight that an answer must be selected
    const answers = document.querySelector('.answers');
    answers.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
      answers.style.animation = '';
    }, 500);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentQuiz > 0) {
    // Save current answer before going back
    const answer = getSelected();
    if (answer) {
      userAnswers[currentQuiz] = answer;
    }
    
    currentQuiz--;
    loadQuiz();
  }
});

// Auto-save answer when user selects an option
answerEls.forEach(el => {
  el.addEventListener('change', () => {
    const answer = getSelected();
    if (answer) {
      userAnswers[currentQuiz] = answer;
      createPagination(); // Update pagination to show answered status
    }
  });
});

// Handle window resize for pagination
window.addEventListener('resize', () => {
  createPagination();
});

// Initialize quiz
loadQuiz();