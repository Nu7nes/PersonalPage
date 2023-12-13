window.addEventListener("DOMContentLoaded", () => {

    document.getElementsByClassName("loader")[0].remove();

    window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        if (window.scrollY > 10) {
            document.getElementById('navbar').classList.remove('navbar-transparent');
        } else {
            document.getElementById('navbar').classList.add('navbar-transparent');
        }
    })
    
});
