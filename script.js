
const toggle = document.getElementById("theme-toggle");

// Detecta preferência do sistema na 1ª visita (prefers-color-scheme)
function getThemePreference() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

if (getThemePreference() === "dark") {
  document.body.classList.add("dark");
}

toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
};



const btn = document.getElementById("copy-email");
const email = document.getElementById("email").innerText;
const feedback = document.getElementById("feedback"); 
btn.onclick = () => {
  navigator.clipboard.writeText(email);
  feedback.innerText = "✓ Copiado!";
  setTimeout(() => {
    feedback.innerText = "";
  }, 2000);
};



const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));



const typewriterText = "Estudante dedicada com foco em tecnologia e desenvolvimento contínuo.";
let i = 0;
const typewriterEl = document.getElementById("typewriter");

function typeWriter() {
  if (i < typewriterText.length) {
    typewriterEl.innerHTML += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

typeWriter();