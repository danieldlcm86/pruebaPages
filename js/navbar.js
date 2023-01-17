window.addEventListener("scroll", function () {
    var navbar = document.getElementById('nav');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#9D2449";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});
