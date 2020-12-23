const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanBtns = document.querySelectorAll(".plan button");

selectPlanBtns.forEach(element => {
  element.addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  })
});