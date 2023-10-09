$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1240: {
                items: 2
            }
        }
    });
});