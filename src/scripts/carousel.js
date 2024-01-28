let carouselSlideIndex = 0;

export const initializeCarousel = () => {
  updateCarouselItems();
  onArrowClick("right");
  onArrowClick("left");
  initiateCarouselAnimation();
};

const updateCarouselItems = () => {
  const carouselItems = [...document.querySelectorAll(".carousel__item")];
  const carouselBullets = [...document.querySelectorAll(".carousel__bullet")];
  carouselItems.forEach((item, i) => {
    if (i !== carouselSlideIndex) {
      item.classList.add("hidden");
      carouselBullets[i].classList.remove("carousel__bullet--active");
      return;
    }
    carouselBullets[i].classList.add("carousel__bullet--active");
    item.classList.remove("hidden");
  });
};

const onArrowClick = (direction) => {
  const arrow = document.querySelector(`.carousel__arrow--${direction}`);

  arrow.addEventListener("click", () => {
    updateSlideIndex(direction);
    updateCarouselItems();
  });
};

const updateSlideIndex = (direction) => {
  const totalSlides = 3;
  if (direction === "right") {
    carouselSlideIndex = (carouselSlideIndex + 1) % totalSlides;
  } else {
    carouselSlideIndex = (carouselSlideIndex - 1 + totalSlides) % totalSlides;
  }
};

const initiateCarouselAnimation = () => {
  setInterval(() => {
    updateSlideIndex("right");
    updateCarouselItems();
  }, 5000);
};
