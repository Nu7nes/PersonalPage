window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nav-btn-toggle').addEventListener('click', () => {
        let nav = document.getElementById('nav-column-toggle');
        nav.style.animation = '';
        setTimeout(() => {
            nav.classList.add('nav-active');
            nav.style.animation = 'nav-toggle-animation-show 200ms ease-in';
        }, 5);
    })
})

function closeNav() {
    let nav = document.getElementById('nav-column-toggle');
    nav.style.animation = '';
    setTimeout(() => {
        nav.style.animation = 'nav-toggle-animation-hide 200ms ease-out';
        setTimeout(() => {
            nav.classList.remove('nav-active');
        }, 180)
    }, 5);
}
