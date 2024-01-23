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

const techs = [
    {
        name:"html5",
        description:"HTML5 é a última versão da linguagem de marcação HTML utilizada para criar e estruturar páginas na web, suportando novos recursos multimídia."
    },
    {
        name:"css3",
        description:"CSS3 é a última versão da linguagem de estilo utilizada para estilizar páginas na web, permitindo mais controle e recursos visuais avançados."
    },
    {
        name:"javascript",
        description:"JavaScript é uma linguagem de programação usada para criar e controlar comportamentos interativos em páginas da web e aplicativos."
    },
    {
        name:"typescript",
        description:"TypeScript é uma linguagem de programação de código aberto que é um superconjunto de JavaScript, adicionando tipagem estática e outros recursos avançados."
    },
    {
        name:"firebase",
        description:"Firebase é uma plataforma do Google que fornece serviços para desenvolvedores construírem aplicativos móveis e web de alta qualidade, escaláveis e seguros."
    },
    {
        name:"jquery",
        description:"jQuery é uma biblioteca JavaScript popular usada para simplificar a manipulação de elementos HTML, animações, eventos e interações do usuário."
    },
    {
        name:"bootstrap",
        description:"Bootstrap é um framework front-end popular usado para criar sites responsivos e móveis, fornecendo uma estrutura de design pré-construída e personalizável."
    },
    {
        name:"sass",
        description:"Sass é uma linguagem de script que é interpretada ou compilada em CSS, permitindo a criação de estilos reutilizáveis e mais eficientes para páginas da web."
    },
    {
        name:"nodejs",
        description:"Node.js é uma plataforma de desenvolvimento de aplicativos baseada em JavaScript usada para criar aplicativos de servidor escaláveis e de alta performance."
    },
    {
        name:"express",
        description:"Express é um framework de aplicativo da web para Node.js usado para criar APIs e aplicativos da web, fornecendo recursos avançados de roteamento e middleware."
    },
    {
        name:"mongodb",
        description:"O MongoDB é um banco de dados NoSQL de alto desempenho e escalável, usado para armazenar e gerenciar dados de aplicativos modernos."
    },
    {
        name:"mysql",
        description:"MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto, usado para armazenar e gerenciar dados de aplicativos de negócios."
    },
    {
        name:"react",
        description:"React é uma biblioteca JavaScript popular usada para criar interfaces de usuário interativas e reutilizáveis, permitindo uma renderização eficiente."
    },
    {
        name:"redux",
        description:"Redux é uma biblioteca de gerenciamento de estado para aplicativos JavaScript, usada para gerenciar e atualizar dados de maneira previsível e escalável."
    },
    {
        name:"electron",
        description:"Electron é um framework para criação de aplicativos desktop multiplataforma usando tecnologias web como HTML, CSS e JavaScript."
    }
];

async function getApi() {
    const repos = [];
    await fetch("https://api.github.com/users/nu7nes/repos")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((repo) => {
                const { name, description, html_url, has_pages } = repo;
                if (selectedRepos.some((el) => el.name === name))
                    repos.push(newProject(name, description, html_url, has_pages));
                // return { name, description, html_url };
            });
        });
    return repos;
}
function newProject(name, description, html_url, has_pages) {
    return {
        name,
        description,
        html_url,
        has_pages,
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

