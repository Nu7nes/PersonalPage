

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-btn-toggle").addEventListener("click", () => {
    let nav = document.getElementById("nav-column-toggle");
    nav.style.animation = "";
    setTimeout(() => {
      nav.classList.add("nav-active");
      nav.style.animation = "nav-toggle-animation-show 200ms ease-in";
    }, 5);
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    // let docStates = document.querySelector(`[data-location]`)
    if (link.dataset.target === "Contato") return;
    link.addEventListener("click", () => {
      let target = link.dataset.target;
      let element = document.querySelector(`[data-location="${target}"]`);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
      removeIsActiveClass();
      link.classList.add("isActiveLink");
      setTimeout(() => {
        closeNav();
      }, 500);
      return;
    });
  });

  document.querySelector("#nav-column-toggle").addEventListener("click", (e) => {
    if(e.target.id === "nav-column-toggle") closeNav();
  });

  document.querySelectorAll(".icons-events").forEach((icon) => {
    icon.addEventListener("click", (el) => {
      document.querySelectorAll(".desc-popup").forEach((popups) => {
        popups.style.display = "none";
      });
      let tech = el.target;
      tech.classList.add("colored");
      if (tech.children[0]) {
        tech.children[0].style.display = "block";
      }
    });
  });

  document
    .getElementsByClassName("btn-desc")[0]
    .addEventListener("click", () => {
      document.querySelectorAll(".desc-popups").forEach((popups) => {
        popups.style.display = "none";
      });
    });
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function closeNav() {
  let nav = document.getElementById("nav-column-toggle");
  nav.style.animation = "";
  setTimeout(() => {
    nav.style.animation = "nav-toggle-animation-hide 200ms ease-out";
    setTimeout(() => {
      nav.classList.remove("nav-active");
    }, 180);
  }, 5);
}

function removeIsActiveClass() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("isActiveLink");
  });
}
