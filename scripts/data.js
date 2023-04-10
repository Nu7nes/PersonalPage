function newTechs(name, description) {
    return {
        name,
        description
    }
}
const techs = [
    newTechs('html5', 'HTML5 é a última versão da linguagem de marcação HTML utilizada para criar e estruturar páginas na web, suportando novos recursos multimídia.'),
    newTechs('css3', 'CSS3 é a última versão da linguagem de estilo utilizada para estilizar páginas na web, permitindo mais controle e recursos visuais avançados.'),
    newTechs('javascript', 'JavaScript é uma linguagem de programação usada para criar e controlar comportamentos interativos em páginas da web e aplicativos.'),
    newTechs('firebase', 'Firebase é uma plataforma do Google que fornece serviços para desenvolvedores construírem aplicativos móveis e web de alta qualidade, escaláveis e seguros.'),
    newTechs('jquery', 'jQuery é uma biblioteca JavaScript popular usada para simplificar a manipulação de elementos HTML, animações, eventos e interações do usuário.'),
    newTechs('bootstrap', 'Bootstrap é um framework front-end popular usado para criar sites responsivos e móveis, fornecendo uma estrutura de design pré-construída e personalizável.'),
    newTechs('nodejs', 'Node.js é uma plataforma de desenvolvimento de aplicativos baseada em JavaScript usada para criar aplicativos de servidor escaláveis e de alta performance.'),
    newTechs('mongodb', 'O MongoDB é um banco de dados NoSQL de alto desempenho e escalável, usado para armazenar e gerenciar dados de aplicativos modernos.'),
    newTechs('react', 'React é uma biblioteca JavaScript popular usada para criar interfaces de usuário interativas e reutilizáveis, permitindo uma renderização eficiente.'),
    newTechs('redux', 'Redux é uma biblioteca de gerenciamento de estado para aplicativos JavaScript, usada para gerenciar e atualizar dados de maneira previsível e escalável.'),
    newTechs('electron', 'Electron é um framework para criação de aplicativos desktop multiplataforma usando tecnologias web como HTML, CSS e JavaScript.')
    ]

function newProject (name, theme, type, techs, links) {
    return {
        name,
        theme,
        techs,
        type,
        links
    }
}

let projects = [
    newProject('Lista simples', 'LocalStorage', 'study', ['html5', 'css3', 'javascript'], ["https://github.com/Nu7nes/StudyProjects/tree/main/Projeto%20LISTA%20DE%20TAREFAS", "https://nu7nes.github.io/StudyProjects/Projeto%20LISTA%20DE%20TAREFAS/"]),
    newProject('Calculadora', 'Functions & eval', 'study', ['html5', 'css3', 'javascript'], ["https://github.com/Nu7nes/StudyProjects/tree/main/Calculadora", "https://nu7nes.github.io/StudyProjects/Calculadora"]),
    newProject('Delivery App', 'Front-end skils', 'study', ['html5', 'css3', 'javascript'], ["https://github.com/Nu7nes/StudyProjects/tree/main/Sistema%20de%20pedidos", "https://nu7nes.github.io/StudyProjects/Sistema%20de%20pedidos/"]),
    newProject('Sis Financeiro', 'WebApp para controle de caixa.', 'personal', ['html5', 'css3', 'javascript', 'jquery', 'bootstrap', 'nodejs', 'mongodb'], ['https://github.com/Nu7nes/finan-system'])
]