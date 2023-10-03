window.addEventListener("scroll", function () {   
    var menu = this.document.getElementById("menu");
    menu.classList.toggle("menu-scroll", window.scrollY > 0);
    menu.classList.toggle("menu-reset", window.scrollY == 0);
});