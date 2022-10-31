// Поиск элементов в DOM
const categoryList = document.querySelector("#categories");
const categoryItems = document.querySelectorAll(".item");

function amountСategories(list) {
  const amountСategories = list.children.length;

  console.log("Number of categories:", amountСategories);
}

function contentItems(items) {
  items.forEach((item) => {
    const title = item.firstElementChild.textContent;
    const amountEl = item.lastElementChild.children.length;

    console.log("Category:", title);
    console.log("Elements:", amountEl);
  });
}

amountСategories(categoryList);
contentItems(categoryItems);
