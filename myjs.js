window.addEventListener("scroll", function () {   
    var menu = this.document.getElementById("menu");
    menu.classList.toggle("menu-scroll", window.scrollY > 0);
    menu.classList.toggle("menu-reset", window.scrollY == 0);
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-right-show");
            entry.target.classList.add("slide-left-show");
        }
        else{
            entry.target.classList.remove("slide-right-show");
            entry.target.classList.remove("slide-left-show");
        }
    });
});

const hiddenElements = document.querySelectorAll('.animation');
hiddenElements.forEach((el) => observer.observe(el));