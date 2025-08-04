const feedback = document.getElementById('feedback');
const submitAnswer = document.getElementById('submit-answer');


function checkAnswer(){
  let correctAnswer = '4';
  //retrieve user's answer
  const userAnswer = document.querySelector('[name="quiz"]:checked').value;

// Compare the User’s Answer with the Correct Answer

  if (userAnswer === correctAnswer) {
    feedback.textContent = 'Correct! Well done.';
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}


submitAnswer.addEventListener('click', checkAnswer);