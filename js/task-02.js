const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const allItemsRef = ingredients.map(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  itemRef.classList.add('item');

  return itemRef;
});

const allIngredients = document.querySelector('#ingredients');

allIngredients.append(...allItemsRef);
