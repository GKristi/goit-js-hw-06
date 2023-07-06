const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsListElement = document.getElementById('ingredients');

const ingredientsItems = ingredients.map(ingredient => {
  const ingredientItemElement = document.createElement('li');
  ingredientItemElement.textContent = ingredient;
  ingredientItemElement.classList.add('item');
  return ingredientItemElement;
});

ingredientsListElement.append(...ingredientsItems);

