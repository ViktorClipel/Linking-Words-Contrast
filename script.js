const questions = [
    {
        sentence: "She was tired, ____ she kept working.",
        options: ["but", "however", "although", "on the other hand", "in contrast"],
        correct: "but"
    },
    {
        sentence: "I wanted to join them; ____, I had to finish my work first.",
        options: ["but", "however", "although", "on the other hand", "in contrast"],
        correct: "however"
    },
    {
        sentence: "He went out ____ it was raining.",
        options: ["but", "however", "although", "on the other hand", "in contrast"],
        correct: "although"
    },
    {
        sentence: "The weather was sunny. ____, the beach was crowded.",
        options: ["but", "however", "although", "on the other hand", "in contrast"],
        correct: "on the other hand"
    },
    {
        sentence: "She prefers coffee; ____ he likes tea.",
        options: ["but", "however", "although", "on the other hand", "in contrast"],
        correct: "in contrast"
    },
    {
        sentence: "I am allergic to cats; ____, I adopted a kitten.",
        options: ["but", "however", "although", "on the other hand", "in contrast"],
        correct: "but"
    },
    {
        sentence: "The restaurant was expensive; ____, the food was not very good.",
        options: ["but", "however", "although", "on the other hand", "in contrast"],
        correct: "however"
    },
    {
        sentence: "She studied hard for the exam, ____ she passed with flying colors.",
        options: ["but", "however", "although", "on the other hand", "in contrast"],
        correct: "and"
    },
    {
        sentence: "They enjoy hiking in the mountains, ____ their friends prefer relaxing at the beach.",
        options: ["but", "however", "although", "on the other hand", "in contrast"],
        correct: "on the other hand"
    },
    {
        sentence: "The company is growing rapidly, ____ its competitors are struggling.",
        options: ["but", "however", "although", "on the other hand", "in contrast"],
        correct: "in contrast"
    },
    {
        sentence: "The book was long; ____, it was very engaging.",
        options: ["but", "however", "although", "on the other hand", "in contrast"],
        correct: "but"
    },
    {
        sentence: "She enjoys cooking at home; ____, she often dines out with friends.",
        options: ["but", "however", "although", "on the other hand", "in contrast"],
        correct: "on the other hand"
    },
    {
        sentence: "He is an excellent student, ____ his grades are not always perfect.",
        options: ["but", "however", "although", "on the other hand", "in contrast"],
        correct: "although"
    }
    // Adicione mais perguntas conforme necessário
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
    document.getElementById('result').textContent = '';
    document.getElementById('result').className = ''; // Reseta a cor
    document.getElementById('next-btn').style.display = 'none';
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
