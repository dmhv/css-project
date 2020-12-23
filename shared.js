const backdrop = document.querySelector(".backdrop");
const sideDrawerBtn = document.querySelector(".toggle-button")
const sideDrawer = document.querySelector(".mobile-nav")

sideDrawerBtn.addEventListener("click", () => {
  sideDrawer.classList.add("open")
  backdrop.classList.add("open")
});

backdrop.addEventListener("click", () => {
  sideDrawer.classList.remove("open")
  backdrop.classList.remove("open")
});
