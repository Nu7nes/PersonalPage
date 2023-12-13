window.addEventListener("DOMContentLoaded", () => {
    let widthScreen = window.innerWidth;
    if (widthScreen < 600) mobileScreen();

    window.addEventListener("resize", () => {
        if (widthScreen < 600) mobileScreen();
    });
    window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        if (window.scrollY > 10) {
            document.getElementById('navbar').classList.remove('navbar-transparent');
        } else {
            document.getElementById('navbar').classList.add('navbar-transparent');
        }
    })
    renderTechs(techs);
    renderProjects();
    document.getElementsByClassName("loader")[0].remove();
    
});

function mobileScreen() {
    let navColumn = document.getElementById("nav-column-list");
    let navOrigin = document.querySelector("#navbar-links-toggle").innerHTML;
    navColumn.innerHTML = navOrigin;
}

function renderTechs(obj) {
    let element = document.getElementById("my-techs");

    obj.forEach((el) => {
        let iconElement = document.createElement("i");
        let descElement = document.createElement("div");

        iconElement.id = el.name;
        iconElement.addEventListener("click", clearColorize);
        if (
            el.name === "react" ||
            el.name === "redux" ||
            el.name === "electron"
        ) {
            iconElement.classList = `icons-events devicon-${el.name}-original`;
        } else {
            iconElement.classList = `icons-events devicon-${el.name}-plain`;
        }
        descElement.id = el.name;
        descElement.classList = "desc-popup";
        descElement.innerHTML = `<button type="button" class="btn-close btn-desc">
                                    <span class="material-symbols-outlined">
                                    close
                                    </span>
                                </button>
                                <p>${el.description}</p>`;
        descElement.style.display = "none";

        element.appendChild(iconElement);
        iconElement.appendChild(descElement);
    });
}
function clearColorize() {
    document.querySelectorAll(".icons-events").forEach((icon) => {
        icon.classList.remove("colored");
    });
}

async function renderProjects() {
    let projectsDiv = document.getElementById("personal-projects");
    const repos = await getApi();
    console.log(repos);
    repos.forEach((repo) => {
        let element = document.createElement("div");
        element.id = repo.name;
        element.classList = "projects";
        element.innerHTML = `<div>
                                <div>
                                    ${renderIconTechs(repo.technologies)}
                                </div>
                                <h3>${repo.name}</h3>
                                <p>${repo.description ? repo.description : 'Descrição em produção'}</p>
                                <label>
                                    <span class="material-symbols-outlined">
                                        arrow_outward
                                    </span>
                                    <a href=${repo.html_url}>Repositório</a>
                                    </label>
                            </div>`;
        projectsDiv.appendChild(element);
    });
}

function renderIconTechs(array) {
    let result = '';
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
                                    <a href="${array[0]}" target="_blank">Repositório</a>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        web
                                    </span>
                                    <a href="${array[1]}" target="_blank">Prévia</a>
                                </div>`;
        if (array[0]) return `<div>
                                    <span class="material-symbols-outlined">
                                        find_in_page
                                    </span>
                                    <a href="${array[0]}" target="_blank">Repositório</a>
                                </div>`;
        if (array.length < 1) return '';
}