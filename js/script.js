 // Script para abrir y cerrar el menú desplegable
 const menuButton = document.getElementById("menu-toggle");
 const nav = document.querySelector("nav.barraNav");

 menuButton.addEventListener("click", () => {
     nav.classList.toggle("movil");
 });