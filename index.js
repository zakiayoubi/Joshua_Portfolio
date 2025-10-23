const hamburger = document.querySelector(".hamburger");
const nav_items = document.querySelector(".nav_items");

hamburger.addEventListener("click", function () {
  nav_items.classList.toggle("active");
});

var resizeTimer

window.addEventListener("resize", function () {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    let width = this.innerWidth;
    console.log(width)
    if (width > 600) {
      nav_items.classList.remove("active")
    }
  }, 250);
  
});

const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("formStatus"); // renamed variable

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // stop normal form submission

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      statusMessage.textContent = "✅ Message sent successfully!";
      form.reset(); // clear the form
    } else {
      statusMessage.textContent = "❌ Oops! Something went wrong. Please try again.";
    }
  } catch (error) {
    statusMessage.textContent = "❌ Network error. Please try again later.";
  }
});