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
    iconElement.title = el.name.toUpperCase();
    iconElement.addEventListener("click", clearColorize);
    if (el.name === "react" || el.name === "redux" || el.name === "electron" || el.name === "express") {
      iconElement.classList = `icons-events devicon-${el.name}-original`;
    } else {
      iconElement.classList = `icons-events devicon-${el.name}-plain`;
    }
    descElement.id = el.name;
    descElement.classList = "desc-popup";
    descElement.innerHTML = `<button type="button" class="btn-close btn-desc">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24"
                                    viewBox="0 -960 960 960"
                                    width="24"
                                >
                                    <path
                                        fill="#fff"
                                        d="M256-213.847 213.847-256l224-224-224-224L256-746.153l224 224 224-224L746.153-704l-224 224 224 224L704-213.847l-224-224-224 224Z"
                                    />
                                </svg>
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
    const hasWebPage = `<a href=${'https://nu7nes.github.io/' + repo.name} target="_blank">
                          <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="24"
                      >
                          <path
                              fill="#2972dd"
                              d="M172.309-180.001q-30.308 0-51.308-21t-21-51.308v-455.382q0-30.308 21-51.308t51.308-21h615.382q30.308 0 51.308 21t21 51.308v455.382q0 30.308-21 51.308t-51.308 21H172.309Zm0-59.999h417.692v-147.693H160v135.384q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Zm477.69 0h137.692q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-343.075H649.999V-240ZM160-447.691h430.001v-147.693H160v147.693Z"
                          />
                      </svg>
                          Prévia
                        </a>`

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
                                <a href=${
                                  repo.html_url
                                } target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24"
                                    viewBox="0 -960 960 960"
                                    width="24"
                                >
                                    <path
                                        fill="#2972dd"
                                        d="M251.769-254.232 210.001-296l393.616-394.001H245.77v-59.998h459.998v459.998H645.77v-357.847L251.769-254.232Z"
                                    />
                                </svg>
                                Saiba mais</a>
                                ${repo.has_pages ? hasWebPage : ''}
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
