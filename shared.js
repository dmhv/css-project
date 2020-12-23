const backdrop = document.querySelector(".backdrop");
const sideDrawerBtn = document.querySelector(".toggle-button")
const sideDrawer = document.querySelector(".mobile-nav")

sideDrawerBtn.addEventListener("click", () => {
  sideDrawer.style.display = "block";
  backdrop.style.display = "block";
});

const hideElement = (element) => {
  element.style.display = "none";
};

const closeSideDrawer = () => {
  backdrop.style.display = "none";
  sideDrawer.style.display = "none";
};

backdrop.addEventListener("click", closeSideDrawer);
