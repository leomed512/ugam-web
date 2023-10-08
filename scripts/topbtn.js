// script.js

document.addEventListener("DOMContentLoaded", function () {
    const scrollTopButton = document.querySelector(".scroll-top-btn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    });

    scrollTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});