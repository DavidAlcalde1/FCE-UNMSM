document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por contactarte con CERSEU. Pronto te responderemos.");
  this.reset();
});