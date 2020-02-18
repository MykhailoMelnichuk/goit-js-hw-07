console.log('Задание 1 ---------')

const nameCategories = document.querySelectorAll('li.item');
console.log(`В списке ${nameCategories.length} категории.`);

nameCategories.forEach((elem) =>
  console.log(`Категория: ${elem.firstElementChild.textContent}` + `\n`
    + `Количество элементов: ${elem.lastElementChild.children.length}` + `\n`
  ),
);