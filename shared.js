const backdrop = document.querySelector(".backdrop");
const sideDrawerBtn = document.querySelector(".toggle-button");
const sideDrawer = document.querySelector(".mobile-nav");

sideDrawerBtn.addEventListener("click", () => {
  sideDrawer.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);
});

backdrop.addEventListener("click", () => {
  sideDrawer.classList.remove("open");
  backdrop.classList.remove("open");
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200); // this has to match the transition duration!
});
