window.addEventListener("DOMContentLoaded", async () => {
  let widthScreen = window.innerWidth;
  if (widthScreen < 700) mobileScreen();

  window.addEventListener("resize", () => {
    if (widthScreen < 700) mobileScreen();
  });
  window.addEventListener("scroll", () => {
    changeClassOnLinks();
    if (window.scrollY > 10) {
      document.getElementById("navbar").classList.add("navbar-colored");
    } else {
      document.getElementById("navbar").classList.remove("navbar-colored");
    }
    if (window.scrollY > 300) {
      document.getElementById("btn-top").classList.remove("btn-top-hide");
    } else {
      document.getElementById("btn-top").classList.add("btn-top-hide");
    }
  });
  renderTechs(techs);
  await renderProjects();
});

function changeClassOnLinks() {
  document.querySelectorAll("[data-location]").forEach((article) => {
    const loc = article.getBoundingClientRect().top;
    if (loc <= 200) {
      removeIsActiveClass();
      document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.dataset.target === article.dataset.location)
          link.classList.add("isActiveLink");
      });
    }
  });
}

function mobileScreen() {
  let navColumn = document.getElementById("nav-column-list");
  let navOrigin = document.querySelector("#navbar-links-toggle").innerHTML;
  navColumn.innerHTML = navOrigin;
}

function clearColorize() {
  document.querySelectorAll(".icons-events").forEach((icon) => {
    icon.classList.remove("colored");
  });
}

function renderTechs(obj) {
  let element = document.getElementById("my-techs");
  let delay = 0;

  obj.forEach((el) => {
    delay += 100;
    let iconElement = document.createElement("i");
    iconElement.setAttribute("data-aos", "fade-up");
    iconElement.setAttribute("data-aos-duration", "600");
    iconElement.setAttribute("data-aos-delay", delay.toString());

    let descElement = document.createElement("div");

    iconElement.id = el.name;
    iconElement.addEventListener("click", clearColorize);
    if (el.name === "react" || el.name === "redux" || el.name === "electron") {
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

async function renderProjects() {
  let projectsDiv = document.getElementById("my-projects");
  let delay = 0;
  const repos = await getApi();
  repos.forEach((repo) => {
    delay += 100;
    let element = document.createElement("div");
    element.id = repo.name;
    element.classList = "projects";
    element.setAttribute("data-aos", "fade-up");
    element.setAttribute("data-aos-duration", "600");
    element.setAttribute("data-aos-delay", delay.toString());
    const placeholderToImage = `<img src="assets/images/projects/${repo.name}.webp" alt="Imagem do projeto ${repo.name}">`;

    element.innerHTML = `<div>
                            <figure>
                                ${repo.name === 'say-hello' ? "<p>Sem imagem!</p>" : placeholderToImage}
                            </figure>
                            <div>
                                ${renderIconTechs(repo.technologies)}
                            </div>
                            <h3>${repo.name}</h3>
                            <p>${
                              repo.description
                                ? repo.description
                                : "Descrição em produção"
                            }</p>
                            <label>
                                <span class="material-symbols-outlined">
                                    arrow_outward
                                </span>
                                <a href=${
                                  repo.html_url
                                } target="_blank">Saiba mais</a>
                                </label>
                          </div>`;
    projectsDiv.appendChild(element);
  });
}

function renderIconTechs(array) {
  let result = "";
  for (let i in array) {
    result += `<i id="${array[i]}" class="devicon-${array[i]}-plain colored"></i>`;
  }
  return result;
}
