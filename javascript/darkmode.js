// Obtenemos el elemento con id "icon" (el botón o imagen para cambiar el tema)
var icon = document.getElementById("icon");

// Cuando el icono se clickea...
icon.onclick = function () {
    // Alternamos (añadimos o quitamos) la clase "dark-mode" al body
    document.body.classList.toggle("dark-mode");

    // Si el body tiene la clase "dark-mode"...
    if(document.body.classList.contains("dark-mode")){
        // Cambiamos la imagen del icono a "moon.png"
        icon.src = "../images/dark_theme_icon/moon.png";
    } else {
        // Si no tiene la clase (modo claro), cambiamos el icono a "sun.png"
        icon.src = "../images/dark_theme_icon/sun.png";
    }
}
