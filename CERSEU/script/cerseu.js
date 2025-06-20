// --- Efecto al hacer scroll: header transparente y con sombra ---
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// document.getElementById("formulario").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const form = e.target;
//   const formData = new FormData(form);

//   fetch("https://script.google.com/macros/s/AKfycbw94V4JAy9qjtAGYueZj3vLSFgwA6iorXRsDhpOcInJ8IFMFTVqCjgKK7gIQ2IcWHp4/exec", {
//     method: "POST",
//     body: formData,
//   })
//   .then(response => response.text())
//   .then(result => {
//     // Opcional: mostrar mensaje de éxito
//     alert("Formulario enviado correctamente ✅");

//     // Redirigir después de enviar
//     window.location.href = "https://economia.unmsm.edu.pe/FCE/cerseu.html";
//   })
//   .catch(error => {
//     alert("Error al enviar el formulario ❌");
//     console.error(error);
//   });
// });


