import { handleHamburgerClicks } from "./scripts/menu.js";
import { trackHeaderActivity } from "./scripts/header.js";
import { generateCards } from "./scripts/courses.js";
import { toggleDrills } from "./scripts/drills.js";
import { initializeCarousel } from "./scripts/carousel.js";

handleHamburgerClicks();
trackHeaderActivity();
generateCards();
initializeCarousel();
toggleDrills();
