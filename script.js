// animação simples de entrada
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section, i) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(30px)";
    setTimeout(() => {
      section.style.transition = "0.6s";
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }, i * 200);
  });
});
