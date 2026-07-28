const quizData= [
    
    {
        question: "What does HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
         question: "Which language is used for styling web pages?",
         options: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],
        answer: "CSS"
    },
    {
        question: "Which language is used to make web pages interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: "JavaScript"
    }
];
let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");

const answersElement = document.getElementById("answers");

const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {

    const currentQuiz = quizData[currentQuestion];

    questionElement.innerText = currentQuiz.question;

    answersElement.innerHTML = "";

    currentQuiz.options.forEach((option) => {

        answersElement.innerHTML += `
            <label>
                <input type="radio" name="answer" value="${option}">
                ${option}
            </label><br><br>
        `;

    });

}

function getSelectedAnswer(){
    const answers= document.getElementsByName("answer");

    let selectedAnswer = "";
    answers.forEach((answer)=>{
      if(answer.checked) {
        selectedAnswer = answer.value;
      }
    });
    return selectedAnswer;
}
function showScore() {

    document.querySelector(".quiz-container").innerHTML = `
        <h2>Quiz Completed!</h2>
        <h3>Your Score: ${score} / ${quizData.length}</h3>
    `;

}

nextBtn.addEventListener("click", () => {

    const selectedAnswer = getSelectedAnswer();

    if (selectedAnswer === "") {
        alert("Please select an answer.");
        return;
    }

    if (selectedAnswer === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }

});
loadQuestion();

