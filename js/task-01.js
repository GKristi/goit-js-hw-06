const categoriesTitles = document.querySelectorAll('.item');
console.log("Number of categories: " + categoriesTitles.length);

const categoriesInfoDiscriptions = [...categoriesTitles].map(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
});