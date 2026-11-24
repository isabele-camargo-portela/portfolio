const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
      menuButton.textContent = "☰";
    });
  });
}

// Mantém apenas um painel de projeto aberto por vez, para facilitar a leitura.
const projectDetails = document.querySelectorAll(".project-more");
projectDetails.forEach((current) => {
  current.addEventListener("toggle", () => {
    if (!current.open) return;
    projectDetails.forEach((other) => {
      if (other !== current) other.open = false;
    });
  });
});
