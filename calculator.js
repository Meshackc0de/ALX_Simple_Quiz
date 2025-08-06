function add(number1, number2){
  return number1 + number2;
}

function subtract(number1, number2){
  return number1 - number2;
}

function product(number1, number2){
  return number1 * number2;
}
function division(number1, number2){
  return number1 / number2;
}

// arithmetic add

document.getElementById('add').addEventListener('click',function(){

  const number1 = parseFloat(document.getElementById('number1').value) || 0;

  const number2 = parseFloat(document.getElementById('number2').value) || 0;

  const result = add(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

//arithmetic subtract

document.getElementById('subtract').addEventListener('click', function(){

  const number1 = parseFloat(document.getElementById('number1').value) || 0;

  const number2 = parseFloat(document.getElementById('number2').value) || 0;

  const result = subtract(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

//arithmetic product

document.getElementById('multiply').addEventListener('click', function(){
  const number1 = parseFloat(document.getElementById('number1').value) || 0;

  const number2 = parseFloat(document.getElementById('number2').value) || 0;

  const result = product(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

//arithmetic division

document.getElementById('divide').addEventListener('click', function(){
  const number1 = parseFloat(document.getElementById('number1').value) || 0;

  const number2 = parseFloat(document.getElementById('number2').value) || 0;

  const result = division(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});









