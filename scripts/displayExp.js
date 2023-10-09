function goToSectionNew(accordionItemId, listItemId, containerId) {
    localStorage.setItem('activeAccordionItem', accordionItemId);
    localStorage.setItem('activeListItem', listItemId);
    localStorage.setItem('activeParentTabItem', containerId);
    window.location.href = './expeditions.html';
}

document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('activeAccordionItem') || !localStorage.getItem('activeListItem') || !localStorage.getItem('activeParentTabItem')) {
        localStorage.clear();
    } else {
        const activeAccordionItem = localStorage.getItem('activeAccordionItem');
        const activeListItem = localStorage.getItem('activeListItem');
        const activeParentTabItem = localStorage.getItem('activeParentTabItem');

        const accordionItem = document.getElementById(activeAccordionItem);
        if (accordionItem) {
            accordionItem.classList.add('show');
        }

        const listItem = document.getElementById(activeListItem);
        if (listItem) {
            listItem.click();
        }

        const parentTabItem = document.getElementById(activeParentTabItem);
        if (parentTabItem) {
            parentTabItem.classList.remove('collapsed');
        }
    }
});



//toma 3 parámetros: 1. el link que redirige al contenedor con toda la información del destino turistico que se encuentra en <li><a href=#idContenedor> Ese debe ser el mismo id del contenedor destino. 2. el id de la pestaña que corresponde al destino en <li><a id="pestaña". 3. el id del contenedor padre, bien sea "grandes cumbres", "cumbres para todos etc"