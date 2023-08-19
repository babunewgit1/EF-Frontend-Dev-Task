const searchBtn = document.getElementById("searchbtn");
const searchBox = document.getElementById("searchBoxwrap");
const closex = document.getElementById("close");
const mclose = document.getElementById("mclose");
const dropdownTriggers = document.querySelectorAll("#dropdownHolder");
const hambargur = document.getElementById("hambargur");
const closeMenu = document.getElementById("closeMenu");
const mobileSearch = document.getElementById("mobileSearch");
const headerMenu = document.querySelector(".headerMenu");
const body = document.querySelector("body");
const mobileSearchBox = document.querySelector(".mobileSearchBox");

// display search area
searchBtn.addEventListener("click", () => {
  searchBox.classList.add("show");
  dropdownTriggers.forEach((items) => {
    items.classList.remove("selected");
  });
});
closex.addEventListener("click", () => {
  searchBox.classList.remove("show");
});

// Function to close dropdowns and remove selected class from all items
dropdownTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    dropdownTriggers.forEach((item) => {
      if (item !== trigger) {
        item.classList.remove("selected");
      }
    });
    trigger.classList.toggle("selected");
  });
});

// responsive mobile menu.
hambargur.addEventListener("click", () => {
  headerMenu.classList.add("menuActive");
  body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  headerMenu.classList.remove("menuActive");
  body.style.overflow = "visible";
});

// mobile search
mobileSearch.addEventListener("click", () => {
  mobileSearchBox.classList.add("mobileshow");
});

mclose.addEventListener("click", () => {
  mobileSearchBox.classList.remove("mobileshow");
});
