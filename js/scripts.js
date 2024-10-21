// scripts.js

// Función para abrir el menú lateral
function openMenu() {
    document.getElementById("side-menu").style.width = "250px";
}

// Función para cerrar el menú lateral
function closeMenu() {
    document.getElementById("side-menu").style.width = "0";
}

// Event listeners para el botón de abrir y el de cerrar el menú
document.querySelector('.menu-btn').addEventListener('click', openMenu);
document.querySelector('.close-btn').addEventListener('click', closeMenu);



