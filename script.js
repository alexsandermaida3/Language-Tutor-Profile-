// Burger menu
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

// Theme toggle with localStorage
function toggleTheme() {
  const body = document.body;
  const isLight = body.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

// Load theme on start
(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light");
  }
})();

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

// (Optional) prevent form submit reload for now
const bookingForm = document.querySelector(".booking-form");
if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks! This is a demo form. Connect it to your email or booking tool later.");
  });
}
