window.addEventListener('DOMContentLoaded', () => {
    let widthScreen = window.innerWidth;
    if (widthScreen < 600) mobileScreen()

    window.addEventListener('resize', () => {
        if (widthScreen < 600) mobileScreen()
    })

    renderTechs(techs)
    renderProjects(projects)

    document.getElementsByClassName('loader')[0].remove()

})

function mobileScreen() {
    let navColumn = document.getElementById('nav-column-list');
    let navOrigin = document.querySelector('#navbar-links-toggle').innerHTML;
    navColumn.innerHTML = navOrigin;
}

function renderTechs(obj) {
    let element = document.getElementById('my-techs');

    obj.forEach(el => {
        let iconElement = document.createElement('i');
        let descElement = document.createElement('div');

        iconElement.id = el.name;
        iconElement.addEventListener('click', clearColorize)
        if (el.name === "react" || el.name === "redux" || el.name === "electron") {
            iconElement.classList = `icons-events devicon-${el.name}-original`
        } else {
            iconElement.classList = `icons-events devicon-${el.name}-plain`
        }

        descElement.id = el.name;
        descElement.classList = 'desc-popup'
        descElement.innerHTML = `<button type="button" class="btn-close btn-desc">
                                    <span class="material-symbols-outlined">
                                    close
                                    </span>
                                </button>
                                <p>${el.description}</p>`;
        descElement.style.display = 'none'

        element.appendChild(iconElement)
        iconElement.appendChild(descElement)

    })
}
function clearColorize() {
    document.querySelectorAll(".icons-events").forEach(icon => {
        icon.classList.remove('colored')
    })
}

function renderProjects(obj) {
    let personalElement = document.getElementById('personal-projects');
    let studyElement = document.getElementById('study-projects');

    obj.forEach(project => {
        let element = document.createElement('div');
        let nameReplaced = project.name.replace(/\s+/g, '-').toLowerCase();
        element.id = nameReplaced;
        element.classList = 'projects'
        if(nameReplaced == 'sis-financeiro') nameReplaced = 'default'
        

        if (project.type == "personal") {
            element.innerHTML = `<div>
                                <div>
                                    ${renderIconTechs(project.techs)}
                                </div>
                                <h3>${project.name}</h3>
                                <p>${project.theme}</p>
                            </div>
                            <figure>
                                <img src="assets/project-${nameReplaced}.png" alt="Project">
                                <div class="img-links">
                                    ${renderProjectLinks(project.links)}
                                </div>
                            </figure>`
            personalElement.appendChild(element);
        }
        if (project.type == "study") {
            element.innerHTML = `<div>
                                <div>
                                    ${renderIconTechs(project.techs)}
                                </div>
                                <h3>${project.name}</h3>
                                <p>Estudo de: <br>- <strong style="color: #000000">${project.theme}</strong></p>
                            </div>
                            <figure>
                                <img src="assets/project-${nameReplaced}.png" alt="Project">
                                <div class="img-links">
                                    ${renderProjectLinks(project.links)}
                                </div>
                            </figure>`
            studyElement.appendChild(element)
        }

    })
}

function renderIconTechs(array) {
    // <i id="html5" class="icons-events devicon-html5-plain"></i>
    let result = ``
    for (let i in array) {
        result += `<i id="${array[i]}" class="devicon-${array[i]}-plain colored"></i>`
    }
    return result;
}
function renderProjectLinks(array) {
        if (array[1]) return `<div>
                                    <span class="material-symbols-outlined">
                                        find_in_page
                                    </span>
                                    <a href="${array[0]}">Repositório</a>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        web
                                    </span>
                                    <a href="${array[1]}">Prévia</a>
                                </div>`;
        if (array[0]) return `<div>
                                    <span class="material-symbols-outlined">
                                        find_in_page
                                    </span>
                                    <a href="${array[0]}">Repositório</a>
                                </div>`;
        if (array.length < 1) return '';
}