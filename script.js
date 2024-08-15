const questions = [
    {
        sentence: "She was tired, ____ she kept working.",
        options: ["but", "however", "although", "despite"],
        correct: "but"
    },
    {
        sentence: "I wanted to join them; ____, I had to finish my work first.",
        options: ["although", "but", "despite", "however"],
        correct: "however"
    },
    {
        sentence: "He went out ____ it was raining.",
        options: ["despite", "although", "but", "however"],
        correct: "although"
    },
    {
        sentence: "He tried hard, ____ he didn't succeed.",
        options: ["although", "but", "despite", "however"],
        correct: "but"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.sentence;

    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.onclick = () => checkAnswer(currentQuestion.options[index]);
    });

    document.getElementById('result').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
        document.getElementById('result').textContent = 'Correct!';
    } else {
        document.getElementById('result').textContent = `Wrong! The correct answer is "${currentQuestion.correct}".`;
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('question').textContent = "You've completed the quiz!";
        document.getElementById('options').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';
    }
}

loadQuestion();
