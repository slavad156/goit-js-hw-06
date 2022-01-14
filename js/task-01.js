const categoriesRef = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach((elem) => {
  const textRef = elem.querySelector("h2");
  const listRef = elem.querySelectorAll("li");
  console.log(`Category: ${textRef.textContent}`);
  console.log(`Elements: ${listRef.length}`);
});
