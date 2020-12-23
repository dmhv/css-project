const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanBtns = document.querySelectorAll(".plan button");
const modalNoBtn = document.querySelector(".modal__action--negative");

selectPlanBtns.forEach((element) => {
  element.addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
});

const hideElement = (element) => {
  element.style.display = "none";
};

const closeModal = () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
};

backdrop.addEventListener("click", closeModal);
modalNoBtn.addEventListener("click", closeModal);
