const feedback = document.getElementById('feedback');
const submitAnswer = document.getElementById('submit-answer');


function checkAnswer(){
  let correctAnswer = '4';
  const userAnswer = document.querySelector('[name="quiz"]:checked').value;
  if (userAnswer === correctAnswer)
     {
    feedback.textContent = 'Correct! Well done.';
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}


submitAnswer.addEventListener('click', checkAnswer);