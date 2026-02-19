const d = document,
  html = d.documentElement;
const year = d.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const tBtn = d.querySelector(".theme-toggle");
const saved = localStorage.getItem("theme");
if (saved) html.dataset.theme = saved;

tBtn &&
  tBtn.addEventListener("click", () => {
    const next = html.dataset.theme === "dark" ? "light" : "dark";
    html.dataset.theme = next;
    localStorage.setItem("theme", next);
  });

const nBtn = d.querySelector(".nav-toggle"),
  links = d.querySelector("#navLinks");
nBtn &&
  nBtn.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    nBtn.setAttribute("aria-expanded", String(open));
  });

///////////////Form pop-up for demo instead of live Web3 Forms hookup//////////
const form = document.querySelector("#contactForm");
form &&
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Demo: On live-business site, this form would be hooked up to Web3Forms."
    );
  });

///////////////////////Slide-in from right on scroll Js for Utility//////////////////
// Animate on scroll: add .is-visible when elements enter viewport
const revealOnScroll = document.querySelectorAll(
  ".u-slide-in-right, .u-fade-in-up, .u-fade-in"
);

const io = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target); // animate once
    });
  },
  {
    threshold: 0.15, // % of element visible before triggering
    rootMargin: "0px 0px -10% 0px", // trigger a bit before it's fully in view
  }
);

revealOnScroll.forEach((el) => io.observe(el));
