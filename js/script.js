 // Script para abrir y cerrar el menú desplegable
 const menuButton = document.getElementById("menu-toggle");
 const nav = document.querySelector("nav.barraNav");

 menuButton.addEventListener("click", () => {
     nav.classList.toggle("movil");
     console.log("boton")
 });


 // SCRIPT AMPLIACION IMAGENES GALERIA
const galleryImages = document.querySelectorAll('div.gallery img');

const overlay = document.getElementById('overlay');
const largeImage = document.getElementById('large-image');
const closeOverlay = document.getElementById('close-overlay');


galleryImages.forEach(image => {
    image.addEventListener('click', (e) => {
      
        largeImage.src = e.target.src;
    
        overlay.style.display = 'flex';
    });
});


// Cerrar el overlay si se hace clic fuera de la imagen
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});