function goToSectionNew(accordionItemId, listItemId, containerId) {
    localStorage.setItem('activeAccordionItem', accordionItemId);
    localStorage.setItem('activeListItem', listItemId);
    localStorage.setItem('activeParentTabItem', containerId);

    // Redirige a expeditions.html
    window.location.href = './expeditions.html';
}

document.addEventListener('DOMContentLoaded', function () {
    // Verifica si hay algún valor en el localStorage
    if (!localStorage.getItem('activeAccordionItem') || !localStorage.getItem('activeListItem') || !localStorage.getItem('activeParentTabItem')) {
        // Si no se han establecido todos los valores necesarios, limpia todo el localStorage
        localStorage.clear();
    } else {
        // Recupera los valores de localStorage
        const activeAccordionItem = localStorage.getItem('activeAccordionItem');
        const activeListItem = localStorage.getItem('activeListItem');
        const activeParentTabItem = localStorage.getItem('activeParentTabItem');

        // Activa la pestaña correspondiente en el accordion
        const accordionItem = document.getElementById(activeAccordionItem);
        if (accordionItem) {
            accordionItem.classList.add('show'); // Abre el elemento del accordion si es necesario
        }

        // Activa la pestaña correspondiente en la lista
        const listItem = document.getElementById(activeListItem);
        if (listItem) {
            listItem.click(); // Simula un clic en la lista para activar la pestaña
        }

        // Activa la pestaña contenedora correspondiente
        const parentTabItem = document.getElementById(activeParentTabItem);
        if (parentTabItem) {
            parentTabItem.classList.remove('collapsed');
        }
    }
});



//toma 3 parámetros: 1. el link que redirige al contenedor con toda la información del destino turistico que se encuentra en <li><a href=#idContenedor> Ese debe ser el mismo id del contenedor destino. 2. el id de la pestaña que corresponde al destino en <li><a id="pestaña". 3. el id del contenedor padre, bien sea "grandes cumbres", "cumbres para todos etc"