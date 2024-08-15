const questions = [
    {
        sentence: "She was tired, ____ she kept working.",
        options: ["but", "however", "although", "despite", "nevertheless"],
        correct: "but"
    },
    {
        sentence: "I wanted to join them; ____, I had to finish my work first.",
        options: ["although", "but", "despite", "however", "on the other hand"],
        correct: "however"
    },
    {
        sentence: "He went out ____ it was raining.",
        options: ["despite", "although", "but", "however", "yet"],
        correct: "although"
    },
    {
        sentence: "He tried hard, ____ he didn't succeed.",
        options: ["although", "but", "despite", "however", "on the other hand"],
        correct: "but"
    },
    {
        sentence: "The movie was very entertaining; ____, it was too long.",
        options: ["on the other hand", "despite", "but", "although", "nevertheless"],
        correct: "on the other hand"
    },
    {
        sentence: "The project was difficult; ____, we managed to finish it on time.",
        options: ["although", "but", "even though", "however", "nevertheless"],
        correct: "however"
    },
    {
        sentence: "She agreed to help, ____ she was very busy.",
        options: ["despite", "but", "although", "however", "yet"],
        correct: "although"
    },
    {
        sentence: "I was exhausted; ____, I stayed up late to finish the book.",
        options: ["nevertheless", "but", "despite", "although", "however"],
        correct: "nevertheless"
    },
    {
        sentence: "The weather was cold; ____, we decided to go hiking.",
        options: ["despite", "but", "although", "however", "yet"],
        correct: "despite"
    },
    {
        sentence: "She is very talented; ____, she is quite modest.",
        options: ["but", "on the other hand", "even though", "however", "nevertheless"],
        correct: "on the other hand"
    },
    {
        sentence: "He didn't enjoy the meal; ____, he was polite about it.",
        options: ["however", "but", "although", "despite", "yet"],
        correct: "however"
    },
    {
        sentence: "The team won the match, ____ it was a close game.",
        options: ["although", "despite", "nevertheless", "but", "yet"],
        correct: "although"
    },
    {
        sentence: "She missed the bus; ____, she arrived at work on time.",
        options: ["despite", "but", "even though", "however", "yet"],
        correct: "even though"
    },
    {
        sentence: "The concert was great; ____, the venue was uncomfortable.",
        options: ["on the other hand", "however", "but", "despite", "although"],
        correct: "on the other hand"
    }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0; // Variável para contar respostas corretas
const passingScore = 7; // Define o limite para passar

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.sentence;

    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.onclick = () => checkAnswer(currentQuestion.options[index]);
    });

    document.getElementById('result').textContent = '';
    document.getElementById('result').className = ''; // Reseta a cor
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultElement = document.getElementById('result');

    if (selectedOption === currentQuestion.correct) {
        resultElement.textContent = 'Correct!';
        resultElement.className = 'correct';
        correctAnswersCount++; // Incrementa o contador de acertos
    } else {
        resultElement.textContent = `Wrong! The correct answer is "${currentQuestion.correct}".`;
        resultElement.className = 'wrong';
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // Mensagem final com a avaliação de "passou" ou "não passou"
        let finalMessage = `Your score is ${correctAnswersCount}/${questions.length}. `;
        if (correctAnswersCount >= passingScore) {
            finalMessage += "You passed!";
        } else {
            finalMessage += "You did not pass.";
        }

        document.getElementById('question').textContent = finalMessage;
        document.getElementById('options').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';
        // Desativa todos os botões de opções para evitar cliques após o término
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(button => {
            button.disabled = true;
        });
    }
}

loadQuestion();
