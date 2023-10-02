window.addEventListener("scroll", function () {

    var nav = document.querySelector("nav");
    nav.classList.toggle("nav-scroll", window.scrollY > 0);
    nav.classList.toggle("nav-reset", window.scrollY == 0);

    var name = this.document.getElementById("nom");
    name.classList.toggle("name-scroll", window.scrollY > 0);
    name.classList.toggle("name-reset", window.scrollY == 0);

    
    var menu = this.document.getElementById("menu");
    menu.classList.toggle("menu-scroll", window.scrollY > 0);
    menu.classList.toggle("menu-reset", window.scrollY == 0);
});