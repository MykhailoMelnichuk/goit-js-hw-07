console.log('Задание 2 ---------');

const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы"
  ];

  const liItems = ingredients.map(ingredientsElements => {
    const liInsert = document.createElement('li');
    liInsert.textContent = ingredientsElements;
    console.log(liInsert);
    return liInsert;
  });
  
  document.getElementById('ingredients').append(...liItems);