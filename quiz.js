const feedback = document.getElementById('feedback');
const submitAnswer = document.getElementById('submit-answer');

function checkAnswer() {
    const correctAnswer = '4';
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        if (userAnswer === correctAnswer) {
            feedback.textContent = 'Correct! Well done.';
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = 'Please select an answer before submitting.';
    }
}

submitAnswer.addEventListener('click', checkAnswer);



