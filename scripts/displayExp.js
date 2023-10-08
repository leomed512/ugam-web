function goToSectionNew(accordionItemId, listItemId, tabItemId) {
    // Almacena la pestaña activa en localStorage
    localStorage.setItem('activeAccordionItem', accordionItemId);
    localStorage.setItem('activeListItem', listItemId);
    localStorage.setItem('activeTabItem', tabItemId);

    // Redirige a expeditions.html
    window.location.href = './expeditions.html';
}
