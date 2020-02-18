console.log('Задание 4 ---------');

let counterValue = 0;
const Value = document.querySelector("#value");
const buttonIncrement = document.querySelector('button[data-action="increment"]');
buttonIncrement.addEventListener("click", increment);
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
buttonDecrement.addEventListener("click", decrement);

function increment() {
  counterValue += 1;
  value.innerHTML = counterValue;
}
function decrement() {
  counterValue -= 1;
  value.innerHTML = counterValue;
};