function goToSectionNew(accordionItemId, listItemId, tabItemId, containerId) {
    // Almacena la pestaña activa en localStorage
    localStorage.setItem('activeAccordionItem', accordionItemId);
    localStorage.setItem('activeListItem', listItemId);
    localStorage.setItem('activeTabItem', tabItemId);
    localStorage.setItem('activeParentTabItem', containerId);

    // Redirige a expeditions.html
    window.location.href = './expeditions.html';
}
