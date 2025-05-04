// Mensaje en consola
console.log("Catálogo cargado correctamente.");

// Evento para los botones
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".producto button");

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Producto agregado al carrito 🛒");
    });
  });
});
