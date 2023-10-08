// Espera a que el documento esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    const scrollTopButton = document.getElementById("scrollTopButton");

    // Muestra u oculta el botón según la posición de desplazamiento de la página
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }

        // Calcula la altura de la ventana y el contenido de la página
        const windowHeight = window.innerHeight;
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
        );

        // Calcula la posición fija del botón al final de la página
        if (
            documentHeight - (window.scrollY + windowHeight) < 100 &&
            scrollTopButton.style.position !== "absolute"
        ) {
            scrollTopButton.style.position = "absolute";
            scrollTopButton.style.bottom = "20px";
        } else if (
            documentHeight - (window.scrollY + windowHeight) >= 100 &&
            scrollTopButton.style.position !== "fixed"
        ) {
            scrollTopButton.style.position = "fixed";
            scrollTopButton.style.bottom = "20px";
        }
    };

    // Vuelve al principio de la página cuando se hace clic en el botón
    scrollTopButton.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
