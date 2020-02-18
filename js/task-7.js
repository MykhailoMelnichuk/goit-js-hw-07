console.log('Задание 7 ---------');

const fontSize = {
    slider: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
  };
  
  const changeHandle = () => {
    fontSize.text.style.fontSize = fontSize.slider.value + 'px';
  };
  
  fontSize.slider.addEventListener('input', changeHandle);