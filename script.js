const correctAnswers = {
    q1: 'B',
    q2: 'A',
    q3: 'A',
    q4: 'B',
    q5: 'B',
    q6: 'A',
    q7: 'A',
    q8: 'C',
    q9: 'A',
    q10: 'A'
};

function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    let score = 0;

    // Controlla le risposte
    for (let i = 1; i <= 10; i++) {
        const question = `q${i}`;
        const selectedOption = form.querySelector(`input[name="${question}"]:checked`);

        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        }
    }

    // Mostra i risultati
    document.getElementById('score').innerText = `Hai ottenuto ${score} su 10`;
    resultDiv.style.display = 'block';
    form.style.display = 'none';
}
