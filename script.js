const question = [
    {
        question: "What is the largest planet in our solar system?",
        answer: 
        [
            {Text:"Earth",correct:false},
            {Text:"Mars",correct:false},
            {Text:"Jupiter",correct:true},
            {Text:"Saturn", correct:false}
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answer: 
        [
            {Text:"Ag",correct:false},
            {Text:"Au",correct:true},
            {Text:"Pb",correct:false},
            {Text:"Fe", correct:false}
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answer: 
        [
            {Text:"Charles Dickens",correct:false},
            {Text:"William Shakespeare",correct:true},
            {Text:"Mark Twain",correct:false},
            {Text:"Jane Austen", correct:false}
        ]
    }
    ,
    {
        question: "What is the largest mammal in the world?",
        answer: 
        [
            {Text:"Elephant",correct:false},
            {Text:"Blue Whale",correct:true},
            {Text:"Giraffe",correct:false},
            {Text:"Great White Shark", correct:false}
        ]
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answer: 
        [
            {Text:"0",correct:false},
            {Text:"50",correct:false},
            {Text:"100",correct:true},
            {Text:"150", correct:false}
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answer: 
        [
            {Text:"Tomato",correct:false},
            {Text:"Avocado",correct:true},
            {Text:"Onion",correct:false},
            {Text:"Lettuce", correct:false}
        ]
    },
    {
        question: "What is the smallest prime number?",
        answer: 
        [
            {Text:"0",correct:false},
            {Text:"1",correct:false},
            {Text:"2",correct:true},
            {Text:"3", correct:false}
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answer: 
        [
            {Text:"Gold",correct:false},
            {Text:"Diamond",correct:true},
            {Text:"Iron",correct:false},
            {Text:"Platinum", correct:false}
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answer: 
        [
            {Text:"Atlantic Ocean",correct:false},
            {Text:"Indian Ocean",correct:false},
            {Text:"Arctic Ocean",correct:false},
            {Text:"Pacific Ocean", correct:true}
        ]
    },
    {
        question: "What is the speed of light?",
        answer: 
        [
            {Text:"300,000 km/s",correct:true},
            {Text:"150,000 km/s",correct:false},
            {Text:"600,000 km/s",correct:false},
            {Text:"1,000,000 km/s", correct:false}
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetQuestion();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    
    });

}
function resetQuestion() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handerNextButton();
    } else {
        startGame();
    }
});
function handerNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else{
        showScore();    
    };
};
function showScore() {
    resetQuestion();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
startGame();