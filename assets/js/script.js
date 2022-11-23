// VAR FOR TIMER   (global) 
var time = document.querySelector(".timer");
var score = document.querySelector("#score");
var secondsLeft = 75;

//VAR FOR BUTTONS (global )
const start = document.querySelector("#start");

// VAR FOR INTRO/START
const codersIntro = document.querySelector("#challenge-begins");

//CALL END LOAD EMLEMENT VAR
var questionsEl = document.querySelector(".all-question");

// ELEMENT LOCATIONS VAR
let questionEl = document.querySelector("#question");
const correctWrong = document.querySelector("#right-wrong");
let questionCount = 0;


// FINAL SCORE VAR
const finalEl = document.querySelector("#final-score");
let initialsInput = document.querySelector("#initials");

// HIGHSCORE VAR 
const highscoresEl = document.querySelector("#high-scores");
let scoreListEl = document.querySelector(".score-list");
let scoreList = [];

// CALL OUT THE ANSWER CLASS BUTTON ASSHOLE
const ansBtn = document.querySelectorAll("button.answer-btn")

// VAR SUBMITINT, GO, CLEAR, VIEW
let submitScrBtn = document.querySelector("#submit-score");
let clearScrBtn = document.querySelector("#clearScores");
let viewScrBtn = document.querySelector("#view-scores");
let goBackBtn = document.querySelector("#goBack");


// VAR ANSER CALL
const ans1Btn = document.querySelector("#answer-a");
const ans2Btn = document.querySelector("#answer-b");
const ans3Btn = document.querySelector("#answer-c");
const ans4Btn = document.querySelector("#answer-d");

const questions = [ 
    {
        question: "tring values must be enclosed within _____ when being assigned to variables.",
        answers: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        correctAnswer: "c"
    },
    {
        question: "The condition in an if / else statement is enclosed within _______.",
        answers: ["a. quotes", "b. curly brackets", "c. parentheses", "d. square brackets"],
        correctAnswer: "a"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        correctAnswer: "c"
    },
    {
        question: "How do you call a function named myFunction?",
        answers: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        correctAnswer: "c"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        answers: ["a. =", "b. ==", "c. 'equals'", "d. !="],
        correctAnswer: "b"
    }
];

// TIMER FUNCTION STARTS PROCESS 
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            score.textContent = secondsLeft;
        }
    }, 1000);
}

// QUIZ BEGIN FUNCTION
function startQuiz() {
    codersIntro.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}
//SETS UP THE QUESTIONS
function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[a];
        ans2Btn.textContent = questions[id].answers[b];
        ans3Btn.textContent = questions[id].answers[c];
        ans4Btn.textContent = questions[id].answers[d];
    }
}

// EVENT FUNCTION CHECK ANSWERS BEGING PROCESS
function checkAnswer(event) {
    event.preventDefault();

    correctWrong.style.display = "block";
    let p = document.createElement("p");
    correctWrong.appendChild(p);

    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } 
   
    else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong!";
    }

    if (questionCount < questions.length) {
        questionCount++;
    }
    setQuestion(questionCount);
}

//STORES SCORES
function addScore(event) {
    event.preventDefault();

    finalEl.style.display = "none";
    highscoresEl.style.display = "block";

    let init = initialsInput.value.toUpperCase();
    scoreList.push({ initials: init, score: secondsLeft });

    // HIGH SCORE SORTING LIST
    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });
    
    scoreListEl.innerHTML="";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }

    // STORAGE OF SCORE 
    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    // Parsing the JSON string to an object
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    // WHEN RETREIVED FROM LOCAL, ARRAY
    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

// CLEAR THE STORE
function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML="";
}

// Start timer and display first question when click start quiz
start.addEventListener("click", startQuiz);

// CHECK ANSER LISTENER EVENT
ansBtn.forEach(item => {
    item.addEventListener('click', checkAnswer);
});

submitScrBtn.addEventListener("click", addScore);

goBackBtn.addEventListener("click", function () {
    highscoresEl.style.display = "none";
    codersIntro.style.display = "block";
    secondsLeft = 75;
    time.textContent = `Time:${secondsLeft}s`;
});

// CLEAR SCORE
clearScrBtn.addEventListener("click", clearScores);

// HIGH SCORE BUTTON ALERT AND DISPLAY LISTENER EVENT
viewScrBtn.addEventListener("click", function () {
    if (highscoresEl.style.display === "none") {
        highscoresEl.style.display = "block";
    } 
    else if (highscoresEl.style.display === "block") {
        highscoresEl.style.display = "none";
    } 
    
    else {
        return alert("Hey. Take Quiz. There is No High Score.");
    }
});