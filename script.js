document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("comingSoonModal");
  const closeBtn = document.getElementById("closeModal");
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  document.querySelectorAll(".card.secondary").forEach(card => {
    card.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});
