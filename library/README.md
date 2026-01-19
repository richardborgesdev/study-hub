# Algoritmos
## Desafios
1. https://www.codewars.com/

# Carreira
## artigos
1. [How to understand any programming task](https://medium.freecodecamp.org/how-to-understand-any-programming-task-aea41eabe66e) (Justin Fuller)
## cursos
1. [Reaprendizagem criativa e Técnicas de criatividade](https://murilogun.com.br/#cursos) (Murilo Gun)
## livros
1. [Dicas de carreira para devs](https://leanpub.com/dicas-carreira-devs) ([eminetto](https://github.com/eminetto))
1. [14 inspiring books to grow your career](https://www.atlassian.com/blog/inside-atlassian/14-inspiring-books-to-grow-your-career) (atlassian)
## vídeos
1. [5 dicas incríveis para melhorar seus skills em programação](https://youtu.be/3AbREg8ZNxs)

# CSS
## sites
1. http://flexboxfroggy.com/

# Engenharia de software
## artigos
1. [TDD](http://tdd.caelum.com.br/) (caelum)
## cursos
1. [TDD](https://pt.coursera.org/learn/tdd-desenvolvimento-de-software-guiado-por-testes) (coursera)

# Front-End Operations
## artigos
1. [The Front-End Operations Engineer](https://www.smashingmagazine.com/2013/06/front-end-ops/) (Alex Sexton, 2013)
1. [Front End Ops Conf 2014 - Keynote by Alex Sexton, "Front End Operations"](https://www.youtube.com/watch?v=7HGe8zZ1G6k) (Alex Sexton, 2014)
1. [Front End Operations: The Concept and Tools Overview](https://dinarys.com/blog/front-end-operations-the-concept-and-tools-overview) (dinarys, 2020)
## AWS
1. [Ramp-Up Guides](https://aws.amazon.com/training/ramp-up-guides/)
## CI/CD
1. 
## links
1. [front-end checklist](https://github.com/thedaviddias/Front-End-Checklist#---------front-end-checklist-)
1. [front-end performance checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist#---------front-end-performance-checklist-)
1. [front-end design checklist](https://github.com/thedaviddias/Front-End-Design-Checklist#front-end-design-checklist)
## module bundler
1. [A mostly complete guide to webpack (2020)](https://www.valentinog.com/blog/webpack/) (Valentino Gagliardi, 2020)
1. [Summary of Webpack 4 Fundamentals by Sean Larkin (Part 1 of 4: Why Webpack?)](https://medium.com/@j_lim_j/summary-of-webpack-4-fundamentals-by-sean-larkin-part-1-of-4-why-webpack-e9112d81a588) (Lim, 2018)
## transpiler
1. [babeljs](https://babeljs.io/)

# Git
* https://learngitbranching.js.org/

# Javascript
## artigos
1. [ryanmcdermott/clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript#table-of-contents)
1. [typescript o guia definitivo](https://medium.com/@oieduardorabelo/typescript-o-guia-definitivo-1a63b04259cc)
1. [gerenciamento de memória](https://medium.com/reactbrasil/como-o-javascript-funciona-gerenciamento-de-mem%C3%B3ria-como-lidar-com-4-vazamentos-comuns-de-5cfa341b9e39)
1. [understanding design patterns in javascript](https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd) (Sukhjinder Arora
)
1. [Understanding Execution Context and Execution Stack in Javascript](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0) (Sukhjinder Arora)
1. [https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4) (Addy Osmani, 2018)
## cursos
1. [node js para iniciantes (Erick Wendel)](https://cursos.nodebr.org/p/node-js-para-iniciantes-nodebr)
1. [Mastering Async JavaScript](https://frontarm.com/courses/async-javascript/promises/why-async/) (frontarm)
## links
1. [exploringjs (Dr. Axel Rauschmayer)](http://exploringjs.com/)
1. [javascript testing best practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

# Vuejs
## artigos
1. https://medium.com/@anthonygore/vue-development-in-2019-what-you-need-to-know-2170942f0e54
## cursos
1. https://www.vuemastery.com
1. https://vueschool.io
1. https://courses.vuejsdevelopers.com
1. [vueschool/vue-js-performance](https://vueschool.io/articles/series/vue-js-performance/)

# Time
## artigos
1. [why your huge tech team isn’t delivering](https://blog.usejournal.com/why-your-huge-tech-team-isnt-delivering-3851be27712c) (Roger Nesbitt
)

# UX
## artigos
1. [Users Don’t Want Filters, They Want Better Content](https://medium.com/@hopper_travel/users-dont-want-filters-they-want-better-content-3146f650b8f6) (Hopper)

# Testes
## artigos
1. https://medium.com/@fagnerbrack/the-test-should-verify-if-the-code-solves-the-problem-not-if-it-runs-afea37a3a6e

# Tooling
* https://www.markdownguide.org
* Visual Studio code
    * settings.json
    ```json
    {
        "workbench.startupEditor": "newUntitledFile",
        "eslint.enable": true,
        "eslint.alwaysShowStatus": true,
        "eslint.validate": [
            "javascript",
            "javascriptreact",
            {
                "language": "vue",
            },
            {
                "language": "html",
            }
        ],
        "eslint.options": {
            "extensions": [
                ".js",
                ".jsx",
                ".ts",
                ".tsx",
                ".vue"
            ]
        },
        "editor.minimap.enabled": false,
        "editor.rulers": [
            100
        ],
        "editor.renderWhitespace": "all",
        "files.watcherExclude": {
            "**/.git/objects/**": true,
            "**/.git/subtree-cache/**": true,
            "**/node_modules/*/**": true
        },
        "workbench.editor.enablePreview": false,
        "editor.tabSize": 2,
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        },
        "javascript.updateImportsOnFileMove.enabled": "always",
        "editor.fontSize": 12,
        "diffEditor.ignoreTrimWhitespace": false,
        "eslint.format.enable": true
    }
    ```
    * keybindings.json
    ```json
    [
        {
            "key": "ctrl+shift+down",
            "command": "editor.action.copyLinesUpAction",
            "when": "editorTextFocus && !editorReadonly"
        },
        {
            "key": "ctrl+shift+alt+up",
            "command": "-editor.action.copyLinesUpAction",
            "when": "editorTextFocus && !editorReadonly"
        },
        {
            "key": "ctrl+alt+u",
            "command": "editor.action.transformToUppercase"
        },
        {
            "key": "ctrl+alt+l",
            "command": "editor.action.transformToLowercase"
        }
    ]
    ```
# Outros
1. [free ebooks for web designers web developers](https://medium.com/web-development-zone/top-free-ebooks-for-web-designers-web-developers-f8c6a70465ad)
1. [vercel](https://vercel.com/home#get-started)

# livros que já li
1. [Convite à filosofia](https://www.amazon.com.br/Convite-%C3%A0-Filosofia-Marilena-Chaui/dp/850813469X) (Marilena de Souza Chauí)
1. [O guia definitivo do mochileiro das galáxias](https://www.amazon.com.br/guia-definitivo-mochileiro-das-gal%C3%A1xias/dp/8530601491) (Douglas Adams)
1. [A árvore do conhecimento](https://www.amazon.com.br/%C3%A1rvore-do-conhecimento-Humberto-Maturana/dp/8572420320) (Humberto R. Maturana)
1. [Teoria geral dos sistemas: Fundamentos, desenvolvimento e aplicações](https://www.amazon.com.br/Teoria-geral-dos-sistemas-desenvolvimento/dp/853263690X) (Ludwig Von Bertalanffy)
1. [Uml - Guia do Usuário](https://www.amazon.com.br/UML-Guia-Usu%C3%A1rio-Grady-Booch/dp/8535217843) (Grady Booch, James Rumbaugh, Ivar Jacobson)
1. [O livro da filosofia](https://www.amazon.com.br/Livro-Filosofia-V%C3%A1rios-Autores/dp/8525063096)
1. [O hobbit](https://www.amazon.com.br/Hobbit-p%C3%B4ster-J-R-R-Tolkien/dp/8595084742https://www.amazon.com.br/Hobbit-p%C3%B4ster-J-R-R-Tolkien/dp/8595084742) (J.R.R. Tolkien)
1. [O silmarillion](https://www.amazon.com.br/Silmarillion-J-R-Tolkien/dp/8595084378) (J. R. R. Tolkien)
1. [Trilogia do Mago Negro](https://www.amazon.com.br/Trilogia-do-Mago-Negro/dp/8581630510) (Trudi Canavan)
1. [Game of thrones](https://www.amazon.com.br/Box-As-Cr%C3%B4nicas-Gelo-Fogo/dp/8544100120) (
George R. R. Martin)
1. [O cavaleiro dos sete reinos](https://www.amazon.com.br/Cavaleiro-dos-Sete-Reinos-Cr%C3%B4nicas/dp/8580449731) (George R. R. Martin)
1. [O príncipe](https://www.amazon.com.br/pr%C3%ADncipe-Nicolau-Maquiavel/dp/8563560034) (Nicolau Maquiavel)
1. [A Arte da Guerra](https://www.amazon.com.br/Arte-Guerra-Sun-Tzu/dp/856001800X) (Sun Tzu)
1. [Sistemas colaborativos](https://www.amazon.com.br/Sistemas-Colaborativos-Mariano-Pimentel/dp/853524669X) (Mariano Pimentel, Hugo Fuks)
1. [O Exorcista](https://www.amazon.com.br/Exorcista-William-Peter-Blatty/dp/8595086230) (William Peter Blatty)
1. [Prince of thorns](https://www.amazon.com.br/Prince-Thorns-Trilogia-Espinhos-Livro-ebook/dp/B0167129PE) (Mark Lawrence)
1. [King of thorns](https://www.amazon.com.br/King-Thorns-Trilogia-Espinhos-Livro-ebook/dp/B016726H74) (Mark Lawrence)
1. [A Culpa É das Estrelas](https://www.amazon.com.br/Culpa-%C3%89-das-Estrelas/dp/8580572266) (John Green)
1. [protocolo bluehand: zumbis](https://www.amazon.com.br/Protocolo-Bluehand-Abu-Fobiya-outros/dp/859132773X) (Abu Fobiya)
1. [O livro da psicologia](https://www.amazon.com.br/Livro-Psicologia-V%C3%A1rios-Autores/dp/8525062499)
1. [A vida que vale a pena ser vivida](https://www.amazon.com.br/Vida-que-vale-pena-vivida/dp/8532639585) (Clóvis de Barros Filho)
1. [Sprint](https://www.amazon.com.br/Sprint-M%C3%A9todo-Google-Testar-Aplicar/dp/8551001523) (Jake Knapp, John Zeratsky, Braden Kowitz, Andrea Gottlieb)
1. [O design do dia a dia](https://www.amazon.com.br/Design-do-Dia/dp/8532520839) (	
Donald A. Norman)
1. [A Sutil Arte de Ligar o F*da-Se](https://www.amazon.com.br/Sutil-Arte-Ligar-Se/dp/855100249X) (Mark Manson)
1. [Mindset](https://www.amazon.com.br/Mindset-Carol-S-Dweck/dp/8547000240) (Carol S. Dweck)
1. [O milagre da manhã](https://www.amazon.com.br/milagre-manh%C3%A3-Hal-Elrod/dp/8576849941) (Hal Elrod)
1. [As cinco linguagens do amor](https://www.amazon.com.br/cinco-linguagens-amor-expressar-compromisso/dp/8573258926) (Gary Chapman)
1. [O poder do hábito](https://www.amazon.com.br/poder-do-h%C3%A1bito-Charles-Duhigg/dp/8539004119) (Charles Duhigg)
1. [O jeito harward de ser feliz](https://www.amazon.com.br/Jeito-Harvard-Ser-Feliz/dp/8502180266) (	
Shawn Achor)
1. [Extreme Programming: Aprenda Como Encantar Seus Usuários Desenvolvendo Software com Agilidade e Alta Qualidade](https://www.amazon.com.br/Extreme-Programming-Vin%C3%ADcius-Manh%C3%A3es-Teles/dp/857522400X) (Vinícius Manhães Teles )
1. [Peopleware](https://www.amazon.com.br/Peopleware-Productive-Projects-Tom-DeMarco/dp/0321934113) (Tom DeMarco, Timothy Lister, Dorset House)
1. [Sapiens - Uma Breve História da Humanidade](https://www.amazon.com.br/Sapiens-Uma-Breve-Hist%C3%B3ria-Humanidade/dp/8525432180) (Yuval Noah Harari)
