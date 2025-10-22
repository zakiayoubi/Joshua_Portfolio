const hamburger = document.querySelector(".hamburger");
const nav_items = document.querySelector(".nav_items");

hamburger.addEventListener("click", function () {
  nav_items.classList.toggle("active");
});


window.addEventListener("resize", function () {
  let width = this.innerWidth;
  console.log(width)
  if (width > 600) {
    
  }
});
