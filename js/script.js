const projOneButtons = document.querySelectorAll(".proj-1_change-button");
const projOneInfoElements = document.querySelectorAll(".proj-1_info-element");
const projOneCloseButtons = document.querySelectorAll(".proj-1_close-button");
const projOneNextButtons = document.querySelectorAll(".proj-1_next-button");
const projTwoButtons = document.querySelectorAll(".proj-2_change-button");
const projTwoInfoElements = document.querySelectorAll(".proj-2_info-element");
const projTwoCloseButtons = document.querySelectorAll(".proj-2_close-button");
const projTwoNextButtons = document.querySelectorAll(".proj-2_next-button");
const projThreeButtons = document.querySelectorAll(".proj-3_change-button");
const projThreeInfoElements = document.querySelectorAll(".proj-3_info-element");
const projThreeCloseButtons = document.querySelectorAll(".proj-3_close-button");
const projThreeNextButtons = document.querySelectorAll(".proj-3_next-button");
let width = window.innerWidth;

const checkPageWidth = () => {
  if (width <= 600) {
    projOneButtons.forEach((button) => {
      button.classList.remove("selected");
    });
    projTwoButtons.forEach((button) => {
      button.classList.remove("selected");
    });
    projThreeButtons.forEach((button) => {
      button.classList.remove("selected");
    });
  }
};

checkPageWidth();

window.addEventListener("resize", (e) => {
  width = e.target.innerWidth;
  checkPageWidth();
});

const addEventListenersToChangesViewer = (projButtons, infoElements, closeButtons, nextButtons) => {
  projButtons.forEach((projButton, buttonIndex) => {
    projButton.addEventListener("click", (e) => {
      projButtons.forEach((button, index) => {
        if (button.classList.contains("selected")) {
          button.classList.remove("selected");
        }
        if (
          infoElements[index].classList.contains("visible") &&
          !button.classList.contains("selected")
        ) {
          infoElements[index].classList.remove("visible");
          if (width <= 600) {
            infoElements[index].classList.remove("open");
          }
        }
      });
      infoElements[buttonIndex].classList.add("visible");
      projButton.classList.add("selected");
      if (width <= 600) {
        infoElements[buttonIndex].classList.add("open");
      }
    });
  });

  closeButtons.forEach((closeButton, closeButtonIndex) => {
    closeButton.addEventListener("click", (e) => {
      const currentSelectedButton = projButtons[closeButtonIndex];
      const currentInfoElement = infoElements[closeButtonIndex];
      currentInfoElement.classList.remove("visible");
      currentSelectedButton.classList.remove("selected");
      if (width <= 600) {
        currentInfoElement.classList.remove("open");
      }
    });
  });

  nextButtons.forEach((nextButton, nextButtonIndex) => {
    nextButton.addEventListener("click", (e) => {
      const currentInfoElement = infoElements[nextButtonIndex];
      const nextInfoElement = infoElements[nextButtonIndex + 1]
        ? infoElements[nextButtonIndex + 1]
        : infoElements[0];
      const currentSelectedButton = projButtons[nextButtonIndex];
      const nextSelectedButton = projButtons[nextButtonIndex + 1]
        ? projButtons[nextButtonIndex + 1]
        : projButtons[0];

      currentInfoElement.classList.remove("visible");
      currentSelectedButton.classList.remove("selected");
      if (width <= 600) {
        currentInfoElement.classList.remove("open");
      }

      nextInfoElement.classList.add("visible");
      nextSelectedButton.classList.add("selected");
      if (width <= 600) {
        nextInfoElement.classList.add("open");
      }
    });
  });
};

addEventListenersToChangesViewer(
  projOneButtons,
  projOneInfoElements,
  projOneCloseButtons,
  projOneNextButtons
);
addEventListenersToChangesViewer(
  projTwoButtons,
  projTwoInfoElements,
  projTwoCloseButtons,
  projTwoNextButtons
);
addEventListenersToChangesViewer(
  projThreeButtons,
  projThreeInfoElements,
  projThreeCloseButtons,
  projThreeNextButtons
);
