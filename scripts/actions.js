window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nav-btn-toggle').addEventListener('click', () => {
        let nav = document.getElementById('nav-column-toggle');
        nav.style.animation = '';
        setTimeout(() => {
            nav.classList.add('nav-active');
            nav.style.animation = 'nav-toggle-animation-show 200ms ease-in';
        }, 5);
    })

    document.querySelectorAll('.nav-link').forEach(link => {
        // let docStates = document.querySelector(`[data-location]`)
        if (link.innerHTML === 'Contato') return;
        link.addEventListener('click', () => {
            let target = link.innerHTML.toLocaleLowerCase();
            let element = document.querySelector(`[data-location="${target}"]`)
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeNav();
        })
    })

    document.querySelectorAll(".icons-events").forEach(icon => {
        icon.addEventListener('click', (el) => {
            document.querySelectorAll(".desc-popup").forEach(popups => {
                popups.style.display = 'none'
            })
            let tech = el.target
            tech.classList.add('colored');
            if (tech.children[0]) {
                tech.children[0].style.display = 'block'
            }
        })
    })

    document.getElementsByClassName('btn-desc')[0].addEventListener('click', () => {
        document.querySelectorAll(".desc-popups").forEach(popups => {
            popups.style.display = 'none'
        })
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
