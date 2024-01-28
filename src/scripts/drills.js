export const toggleDrills = () => {
  const drills = [...document.querySelectorAll(".questions__drill")];

  drills.forEach((accordion) => {
    const intro = accordion.querySelector(".questions__question-container");
    const content = accordion.querySelector(".questions__answer");

    intro.onclick = () => {
      
      if (content.style.maxHeight) {
        closeAccordion(accordion);
      } else {
        drills.forEach((accordion) => closeAccordion(accordion)); 
        openAccordion(accordion); 
      }
    };
  });
};

const openAccordion = (accordion) => {
  const content = accordion.querySelector(".questions__answer");
  content.classList.add("questions__answer--active");
  content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector(".questions__answer");
  content.classList.remove("questions__answer--active");
  content.style.maxHeight = null;
};
