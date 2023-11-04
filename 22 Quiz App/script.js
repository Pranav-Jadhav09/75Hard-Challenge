"use strict";

// Quiz Data
const quizData = [
  {
    question: "What is the real name of the superhero Iron Man?",
    a: "Steve Rogers",
    b: "Tony Stark",
    c: "Peter Parker",
    d: "Bruce Wayne",
    correct: "b",
  },
  {
    question:
      "Which actor plays the role of Tony Stark/Iron Man in the Marvel Cinematic Universe?",
    a: "Robert Pattinson",
    b: "Chris Hemsworth",
    c: "Chris Evans",
    d: "Robert Downey Jr.",
    correct: "d",
  },
  {
    question:
      "What is the name of the artificial intelligence system in Tony Stark's suit?",
    a: "J.A.R.V.I.S.",
    b: "S.H.I.E.L.D.",
    c: "C.O.R.D.A.N.A.",
    d: "U.L.T.R.O.N.",
    correct: "a",
  },
  {
    question:
      "What element is used to power the Arc Reactor in Tony Stark's chest?",
    a: "Kryptonite",
    b: "Unobtainium",
    c: "Palladium",
    d: "Vibranium",
    correct: "c",
  },
  {
    question:
      "What is the name of Tony Stark's company in the Marvel Universe?",
    a: "Wayne Enterprises",
    b: "Stark Industries",
    c: "Oscorp",
    d: "LuthorCorp",
    correct: "b",
  },
  {
    question:
      "In the first Iron Man movie, where is Tony Stark held captive by terrorists?",
    a: "Afghanistan",
    b: "Iraq",
    c: "Syria",
    d: "North Korea",
    correct: "a",
  },
  {
    question:
      "Which character serves as Iron Man's best friend and helps him operate his suits?",
    a: "Happy Hogan",
    b: "Nick Fury",
    c: "Thor",
    d: "Black Widow",
    correct: "a",
  },
  {
    question:
      "What is the name of the powerful villain who possesses a set of armored suits similar to Iron Man's?",
    a: "The Vulture",
    b: "The Lizard",
    c: "The Mandarin",
    d: "Red Skull",
    correct: "c",
  },
  {
    question:
      "Which Iron Man suit is known for its ability to transform into different forms and is featured in 'Iron Man 3'?",
    a: "Mark I",
    b: "Mark II",
    c: "Mark XLII",
    d: "Mark XLIV",
    correct: "c",
  },
  {
    question:
      "What is the name of Tony Stark's personal AI butler, who also helps him in his superhero endeavors?",
    a: "Alfred",
    b: "Hank Pym",
    c: "Edwin Jarvis",
    d: "Jeeves",
    correct: "c",
  },
];

// Selecting Elements
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const atext = document.getElementById("a-text");
const btext = document.getElementById("b-text");
const ctext = document.getElementById("c-text");
const dtext = document.getElementById("d-text");
const submitBtn = document.getElementById("submit");

// Required Variables
let currentQuiz = 0;
let score = 0;

// Load The Quiz
loadQuiz();

function loadQuiz() {
  // No options should be selected
  deSelectAnswers();

  // Get the json quiz data
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  atext.innerText = currentQuizData.a;
  btext.innerText = currentQuizData.b;
  ctext.innerText = currentQuizData.c;
  dtext.innerText = currentQuizData.d;
}

// No Options Should Be Selected onload
function deSelectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// Get Selected
function getSelected() {
  let answer;

  // Get answer -> label -> id
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

// On Submit
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    // if Answer is correct increment the score
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    // Next Question
    currentQuiz++;

    // if question are over than show result
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correctly</h2>

      <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
