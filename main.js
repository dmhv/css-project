const modal = document.querySelector(".modal");
const selectPlanBtns = document.querySelectorAll(".plan button");
const modalNoBtn = document.querySelector(".modal__action--negative");
// backdrop defined in shared.js

selectPlanBtns.forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.add("modal_open")
    backdrop.classList.add("modal_open")
  });
});

const closeModal = () => {
  modal.classList.remove("modal_open")
  backdrop.classList.remove("modal_open")
};

backdrop.addEventListener("click", closeModal);
modalNoBtn.addEventListener("click", closeModal);
