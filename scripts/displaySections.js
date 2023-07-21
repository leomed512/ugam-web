function goToSection(clase, tab) {
    localStorage.clear()
    localStorage.setItem('claseActiva', clase);
    localStorage.setItem('tabActivo', tab);
}

document.addEventListener('DOMContentLoaded', function () {
    var claseActiva = localStorage.getItem('claseActiva');
    var tabActivo = localStorage.getItem('tabActivo');

    if (claseActiva) {

        var seccion = document.getElementById(claseActiva);
        var tabulador = document.getElementById(tabActivo);
        //

        const sections = document.querySelectorAll('.pestana');
        sections.forEach((section) => {
            section.classList.remove('active');
            section.classList.remove('show');

        });
        //
        const tabs = document.querySelectorAll('.list-group-item');
        tabs.forEach((section) => {
            section.classList.remove('active');
        });

        if (seccion) {
            seccion.classList.add('active');
            seccion.classList.add('show');
            tabulador.classList.add('active');

        }
    }
});

