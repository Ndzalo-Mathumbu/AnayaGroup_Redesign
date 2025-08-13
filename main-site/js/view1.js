const wordContainer = document.querySelector(".word__container");
const word1 = document.querySelector(".w1");
const word2 = document.querySelector(".w2");

export const slideIn = function () {
  /////   real estate   /////
  setTimeout(() => {
    wordContainer.classList.add("word__animation");
  }, 1000);

  setTimeout(() => {
    wordContainer.classList.add("word__animation--addSkew");
  }, 1500);

  setTimeout(() => {
    word1.classList.add("w1__remove");
  }, 5500);
  /////   construction   /////
  /* setTimeout(() => {
    word2.classList.add("w2__add");
  }, 11000); */
};
