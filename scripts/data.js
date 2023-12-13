const selectedRepos = [
    {
        name: "data-analysis-and-forecasting",
        techs: [
            "html5",
            "css3",
            "javascript",
            "nodejs",
            "mongodb",
        ],
    },
    {
        name: "delivery-app",
        techs: [
            "javascript",
            "react"
        ],
    },
    {
        name: "mvp-front-end",
        techs: [
            "html5",
            "css3",
            "javascript"
        ],
    },
    {
        name: "say-hello",
        techs: [
            "html5",
            "css3",
            "javascript",
            "nodejs",
            "mongodb",
        ],
    },
];

function newTechs(name, description) {
    return {
        name,
        description,
    };
}
const techs = [
    newTechs(
        "html5",
        "HTML5 é a última versão da linguagem de marcação HTML utilizada para criar e estruturar páginas na web, suportando novos recursos multimídia."
    ),
    newTechs(
        "css3",
        "CSS3 é a última versão da linguagem de estilo utilizada para estilizar páginas na web, permitindo mais controle e recursos visuais avançados."
    ),
    newTechs(
        "javascript",
        "JavaScript é uma linguagem de programação usada para criar e controlar comportamentos interativos em páginas da web e aplicativos."
    ),
    newTechs(
        "firebase",
        "Firebase é uma plataforma do Google que fornece serviços para desenvolvedores construírem aplicativos móveis e web de alta qualidade, escaláveis e seguros."
    ),
    newTechs(
        "jquery",
        "jQuery é uma biblioteca JavaScript popular usada para simplificar a manipulação de elementos HTML, animações, eventos e interações do usuário."
    ),
    newTechs(
        "bootstrap",
        "Bootstrap é um framework front-end popular usado para criar sites responsivos e móveis, fornecendo uma estrutura de design pré-construída e personalizável."
    ),
    newTechs(
        "nodejs",
        "Node.js é uma plataforma de desenvolvimento de aplicativos baseada em JavaScript usada para criar aplicativos de servidor escaláveis e de alta performance."
    ),
    newTechs(
        "mongodb",
        "O MongoDB é um banco de dados NoSQL de alto desempenho e escalável, usado para armazenar e gerenciar dados de aplicativos modernos."
    ),
    newTechs(
        "react",
        "React é uma biblioteca JavaScript popular usada para criar interfaces de usuário interativas e reutilizáveis, permitindo uma renderização eficiente."
    ),
    newTechs(
        "redux",
        "Redux é uma biblioteca de gerenciamento de estado para aplicativos JavaScript, usada para gerenciar e atualizar dados de maneira previsível e escalável."
    ),
    newTechs(
        "electron",
        "Electron é um framework para criação de aplicativos desktop multiplataforma usando tecnologias web como HTML, CSS e JavaScript."
    ),
];

async function getApi() {
    const repos = [];
    await fetch("https://api.github.com/users/nu7nes/repos")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((repo) => {
                const { name, description, html_url } = repo;
                if (selectedRepos.some((el) => el.name === name))
                    repos.push(newProject(name, description, html_url));
                // return { name, description, html_url };
            });
        });
    return repos;
}
function newProject(name, description, html_url) {
    return {
        name,
        description,
        html_url,
        technologies: getTechnologies(name)
    };
}

function getTechnologies(name) {
    let techs = [];
    selectedRepos.map((el) => {
        if(el.name === name) techs = el.techs;
    })
    return techs;
}

