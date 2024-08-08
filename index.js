// Navigation
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

const dropDownMenu = document.querySelector(".drop-down-menu");

openMenu.addEventListener("click", () => {
  openMenu.classList.add("hide-menu");
  closeMenu.classList.remove("hide-menu");
  dropDownMenu.classList.remove("hide-menu");
});

closeMenu.addEventListener("click", () => {
  openMenu.classList.remove("hide-menu");
  closeMenu.classList.add("hide-menu");
  dropDownMenu.classList.add("hide-menu");
});

// Collaborations Animation

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const innerScroller = scroller.querySelector(".inner-scroller");
    const scrollContent = Array.from(innerScroller.children);

    scrollContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);

      duplicatedItem.setAttribute("aria-hidden", true);
      innerScroller.appendChild(duplicatedItem);
    });
  });
}

// FAQs

const arrowDown = document.querySelectorAll(".arrow-down");
const designAnswer = document.querySelectorAll(".design-answer");

arrowDown.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    arrow.classList.toggle("arrow-down");
    designAnswer[index].classList.toggle("hide");
  });
});
