
// --- Efecto al hacer scroll: header transparente y con sombra ---
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// --- Manejo del formulario de contacto ---
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por contactarte con CERSEU. Pronto te responderemos.");
  this.reset();
});

