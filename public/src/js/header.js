document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const closeButton = document.querySelector(".close-button");
    const menu = document.querySelector(".menu");

    menuButton.addEventListener("click", function () {
        menu.style.right = "0";
    });

    closeButton.addEventListener("click", function () {
        menu.style.right = "-250px"; // Oculta el menú lateral
    });

    // Agrega una verificación de pantalla pequeña para mostrar el menú por defecto
    window.addEventListener("resize", function () {
        if (window.innerWidth >= 768) { // Cambia este valor según tus necesidades
            menu.style.right = "0";
        } else {
            menu.style.right = "-250px";
        }
    });
});
