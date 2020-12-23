const modal = document.querySelector(".modal");
const selectPlanBtns = document.querySelectorAll(".plan button");
const modalNoBtn = document.querySelector(".modal__action--negative");

selectPlanBtns.forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.add("open")
    backdrop.classList.add("open")
  });
});

const closeModal = () => {
  modal.classList.remove("open")
  backdrop.classList.remove("open")
};

backdrop.addEventListener("click", closeModal);
modalNoBtn.addEventListener("click", closeModal);
