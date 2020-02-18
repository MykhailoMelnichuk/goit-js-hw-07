console.log('Задание 5 ---------');

const inputText = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');


const turnText = function() {
    if (inputText.value === '') {
        spanText.textContent = 'незнакомец';
    } else {
        spanText.textContent = inputText.value;
    }
  };
  
  inputText.addEventListener('input', turnText);


