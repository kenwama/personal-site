const opneMenuButton = document.querySelector(".opne-button");
const closeMenuButton = document.querySelector(".close");

const menuBackground = document.querySelector(".main-mobile-nav-background");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

const aboutMeContent = document.querySelector(".about-me .left-content");

opneMenuButton.addEventListener("click", (e) => {
  menuBackground.classList.add("isActive");
  mobileMenuContainer.classList.add("isActive");
  aboutMeContent.style.display = "none";
});

closeMenuButton.addEventListener("click", (e) => {
  menuBackground.classList.remove("isActive");
  mobileMenuContainer.classList.remove("isActive");
  aboutMeContent.style.display = "block";
});

const likeCategoryItems = Array.from(
  document.querySelectorAll(".like-category-item")
);

const categoryBoxList = document.querySelector(".like-answer-box ul");

{
  /* <!-- <li class="answer-item">おにぎり</li> --> */
}
{
  /* <!-- <li class="answer-item">おにぎり</li> --> */
}
{
  /* <!-- <li class="answer-item">おにぎり</li> --> */
}
{
  /* <!-- <li class="answer-item">おにぎり</li> --> */
}
{
  /* <!-- <li class="answer-item">おにぎり</li> --> */
}

const foodList = `
  <li class="answer-item">カツ丼</li>
  <li class="answer-item">カツ丼</li>
  <li class="answer-item">カツ丼</li>
  <li class="answer-item">カツ丼</li>
  <li class="answer-item">カツ丼</li>
`;

const animeList = `
  <li class="answer-item">推しの子</li>
  <li class="answer-item">推しの子</li>
  <li class="answer-item">推しの子</li>
  <li class="answer-item">推しの子</li>
  <li class="answer-item">推しの子</li>
`;

const baseballList = `
  <li class="answer-item">大谷翔平</li>
  <li class="answer-item">大谷翔平</li>
  <li class="answer-item">大谷翔平</li>
  <li class="answer-item">大谷翔平</li>
  <li class="answer-item">大谷翔平</li>
`;

const wantList = `
  <li class="answer-item">ニンテンドースイッチ</li>
  <li class="answer-item">ニンテンドースイッチ</li>
  <li class="answer-item">ニンテンドースイッチ</li>
  <li class="answer-item">ニンテンドースイッチ</li>
  <li class="answer-item">ニンテンドースイッチ</li>
`;

const songList = `
  <li class="answer-item">カワキヲアメク</li>
  <li class="answer-item">カワキヲアメク</li>
  <li class="answer-item">カワキヲアメク</li>
  <li class="answer-item">カワキヲアメク</li>
  <li class="answer-item">カワキヲアメク</li>
`;

likeCategoryItems.map((item) => {
  item.addEventListener("mouseover", (e) => {
    const item = e.target;
    const categoryId = item.id;

    let category;

    if (categoryId === "food") category = foodList;
    if (categoryId === "anime") category = animeList;
    if (categoryId === "baseball") category = baseballList;
    if (categoryId === "want") category = wantList;
    if (categoryId === "song") category = songList;

    categoryBoxList.innerHTML = category;
  });

  item.addEventListener("mouseleave", (e) => {
    categoryBoxList.innerHTML = ``;
  });
});
