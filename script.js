const root = document.documentElement;
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");
const cursorGlow = document.getElementById("cursorGlow");

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Theme preference
let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch (e) {}
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
root.setAttribute("data-theme", savedTheme || (prefersLight ? "light" : "dark"));

function updateThemeIcon() {
  themeBtn.textContent = root.getAttribute("data-theme") === "dark" ? "☼" : "◐";
}
updateThemeIcon();

themeBtn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  updateThemeIcon();
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Subtle cursor light on desktop
if (window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";
  });
} else {
  cursorGlow.style.display = "none";
}

// Contact form opens the visitor's email app
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");
  const subject = encodeURIComponent("Portfolio enquiry from " + name);
  const body = encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")");
  window.location.href = `mailto:thungolerato@gmail.com?subject=${subject}&body=${body}`;
});
