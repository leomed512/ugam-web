function goToSectionNew(accordionItemId, listItemId, containerId) {
    localStorage.setItem('activeAccordionItem', accordionItemId);
    localStorage.setItem('activeListItem', listItemId);
    localStorage.setItem('activeParentTabItem', containerId);

    // Redirige a expeditions.html
    window.location.href = './expeditions.html';
}
//toma 3 parámetros: 1. el link que redirige al contenedor con toda la información del destino turistico que se encuentra en <li><a href=#idContenedor> Ese debe ser el mismo id del contenedor destino. 2. el id de la pestaña que corresponde al destino en <li><a id="pestaña". 3. el id del contenedor padre, bien sea "grandes cumbres", "cumbres para todos etc"