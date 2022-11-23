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
const ans1Btn = document.querySelector("#answer-1");
const ans2Btn = document.querySelector("#answer-2");
const ans3Btn = document.querySelector("#answer-3");
const ans4Btn = document.querySelector("#answer-4");

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