console.log('Задание 6 ---------');

const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", event => {
  if (inputText.value.length == inputText.dataset.length) {
    inputText.classList.add("valid");
  } else {
    inputText.classList.add("invalid");
  }
});

inputText.addEventListener("focus", event => {
  if (inputText.value.length == inputText.dataset.length) {
    inputText.classList.remove("valid");
  } else {
    inputText.classList.remove("invalid");
  }
});

