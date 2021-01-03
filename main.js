const modal = document.querySelector(".modal");
const selectPlanBtns = document.querySelectorAll(".plan button");
const modalNoBtn = document.querySelector(".modal__action--negative");
// backdrop defined in shared.js

selectPlanBtns.forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.add("modal_open")
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("modal_open")
    }, 10);
  });
});

const closeModal = () => {
  modal.classList.remove("modal_open")
  backdrop.classList.remove("modal_open")
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200); // this has to match the transition duration!
};

backdrop.addEventListener("click", closeModal);
modalNoBtn.addEventListener("click", closeModal);
