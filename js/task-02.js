const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

function createItems(items) {
  const ingredients = [];
  items.forEach((element) => {
    const ingredient = document.createElement("li");

    ingredient.textContent = element;
    ingredient.classList.add("item");
    ingredients.push(ingredient);
  });

  return ingredients;
}

ingredientsList.append(...createItems(ingredients));
