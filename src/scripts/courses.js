import data from "../data/courses.json" assert { type: "json" };

export const generateCards = () => {
  const cardsContainer = document.querySelector(".courses__cards");
  const cards = data
    .map((course, i) => {
      return `<div class="card">
            <img
              src="../src${course?.img}"
              alt="course-${i + 1}"
              class="card__img"
            />
            <div class="card__content">
              <div class="card__information">
                <p class="card__title">${course?.title}</p>
                <span class="card__description">რეგისტრაცია დასრულებულია </span>
              </div>
              <div class="card__button-wrapper">
                <img
                  src="/src/assets/general/arror-right.svg"
                  alt="arrow-right"
                />
                <a href="${course?.link}">კურსის დეტალები</a>
              </div>
            </div>
          </div>`;
    })
    .join("");

  cardsContainer.innerHTML = cards;
};



