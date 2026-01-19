### todo
- [X] Montar estrutura de tópicos baseados no vídeo do akita
  - [A História do Front-End para Iniciantes em Programação | Série "Começando aos 40"](https://www.youtube.com/watch?v=VKmPGmFY7H4&t=3s)
    - [The Front-End Spectrum](https://medium.com/@withinsight1/the-front-end-spectrum-c0f30998c9f0) | 1:23
    - "a história do front-end é a própria história da web" (AKITA) | 2:40
    - dominio para IP (DNS - Domain Name Server) | 3:22
      - "lista telefônica nomes para números
      - navegador -> servidor
      - a internet funcionar porque todas pontos entendem o mesmo formato de mensagem (protocolo)
      - TCP/IP cliente e servidor
      - conceito: servirdor mais simples de todos
      - URL (Universal Resource Locator): protocolo, dominio, caminho do arquivo
        - direto para o arquivo (segurança)
      - navegar, exemplo de programa que é cliente de TCP
        - traduz as marcações para elementos visuais
        - exemplo a (a = anchor, href = hypertext reference)
        - principio fundamental da web referenciar textos para outros textos
        - WWW
      - Se ao invés de digitar o nome de um arquivo, digitar o nome de um executável
        - servidor tentar executar arquivo e envia para o navegador o resultado da execução
        - primeira geração de sites dinâmicos
        - CGI (Common Gateway Interface)
        - "usar C para gerar html = usar canhão para matar mosca" (AKITA)
        - Manipulação de string, PEARL possuia uma sublinguagem REGEX
        - surgimento de servidores web netscape
          - ascenção do APACHE (open source)
           - A PATCH = remendo
      - Começo anos 90, site com 10 páginas (copiar e colar tudo)
        - Cada navegador estilizasse a página do jeito que quisesse
        - HTML foi insipirado no SGML (estruturar documentos governamentais que pudessem ser lidos por um computador)
        - usuário poderia customizar (TRETA)
        - style já existia antes do css (óbvio)
        - 95, 96 aparecimento do css
        - netscape superando mosaic
        - ie 95 sai na frente porque implementava melhor o css
        - acid3
        - [A brief history of CSS until 2016](https://www.w3.org/Style/CSS20/history.html)
        - browser wars IE vs netscape
        - [The True Story of the Internet: Browser Wars](https://www.youtube.com/watch?v=VANORrzKX50)
        - netscape mudou da ideia de vender o navegador e fundou a mozila
        - opera, pioneiro em responsividade, palmtops, pockets pcs da época (antes da blackberry)
        - surgimento do media types (media queries, oficiais 2012)
        - dispositivos tatéis (cegos, surdos) tipo de media types
        - opera popularizou o @media
        - IE fortaleceu a integração do browser com o SO
          - MIME, envio de arquivos por e-mail
          - file explorer
          - MS forçava o uso do IE treta na europa
      - apache posibilitava manipular o html antes de enviat (templates)
        - nascimento da profissão de web designer (começou com designer de revistas tentando traspor o conteúdo da revista para a web)
        - período barroco do design na web (AKITA)
      - Surgimento do IIS, salvar dados da enviados pela web no banco de dados
        - e-comerces
        - internet information services
        - front page server extensions (páginas dinâmicas com validações de formulários)
          - páginas com essa extensão só podiam rodar em IIS e IE
        - PHP - servidor possui a lógica para devolver o HTML
        - MS, adicionando a extensão de ASP no IIS
        - guerra do server side PHP x ASP
        - codefusion (XML) inspirado pelo JSP
      - servidor web x servidor de aplicação
      - abertura de capital da netscape
        - ssl
      - primeiros CMS (filenet, vignette) e então wordpress
      - css 1 para css 2 (web fonts, de tabela para tableless)
        - DHTML, AJAX
        - surgimento do gmail (personificação de tudo que bill gates temia, AKITA)
        - navegadores web se tornassem subtitutos dos SOs
        - gmail primeiro case de sucesso para substituição de uma aplicação nativa
      - tudo na web são trees
      - era java, surgimentos de frameworks
       - estrutura pré-definida para desenvolvimento (segurança, templates)
       - zend
       - ruby on rails
       - blog em 15 minutos (fisl 2005)
      - microframewroks, especializados em renderizar no navegador (independente)
        - mootools, dojo toolkit, jquery, prototype, scriptaculous
      - 2007 smartphones
       - KHTML (webkit)
       - 1024x768 vs 320x240
      - 90s applets, java no browser, sandbox
        - MS active x (c++ ou vb6)
        - flash (action script)
        - hardware limitado dos smartphones da época mataram esse tipo de abordagem
        - apple se recusou a implementar flash no iphone
    - 30:00
      - carta aberta de steve jobs contra o flash
      - ver vídeos era impossível sem plugins
      - apple acelerou a reprodução de MP4 pelo browser (HTML5)
      - surgimento do canvas, necessidade de animações canvas (css webgl)
      - queda sun adquirida pela oracle, fim dos applets
      - acontecimentos que forçaram o aceleramento do html5 (2014 - css3, javascript)
      - 2008 ~ 20015, pior fase do desenvolvimento web, falta de padronização
        - jquery quase obrigatório
        - fim do flash, crescimen do javascript horrível (sem evoluções desde 2000)
      - transpilers
        - sass (ruby)
        - less (twiter)
        - coffeescript (ruby), conceitos de ruby e python (arrow functions)
        - tableless, design responsivo nova classe de pesquisa UX
      - primeiro smartphone apple, influenciou design (bauhaus 1919, 'design minimalista', valorização dos espaços em branco entre elementos)
        - bibliotecas de estilos reusáveis (bootstrap (twitter), frameworks css)
      - assets
        - mundo pearl CPAN
        - mundo ruby Bundler
        - js npm, começou a se coçar depois do surgimento do yarn
        - lentidão para baixar todos esses assets
        - minificação
          - assets pipeline
          - grunt, gulp, webpack + babel
          - * menos necessário com http2
      - necessidade de ter o controle do estado da aplicação no lado do cliente
        - frameworks js
        - componentes, controlar individualmente estava ficando muito trabalhoso
        - exemplo spotify
        - ember, agularjs, react, vuejs
        - SPA (ajax)
        - google docks, slack, spotify
        - sproutcore: apple na dianteira (icloud)
        - google: GWT > angular > polymer
        - facebook: react (virtual DOM, melhorar velocidade do redesenho)
        - vuejs + laravel
      - aplicativos hibridos (desktop + mobile)
       - electron: encapsular tecnologias do chrome e abrir como aplicativo nativo
       - react native
       - flutter
      - 25 anos de história
        - importância da história
        - autor original
        - empresa que criou e por que
        - "se você tem poucas perguntas, você não está se esforçando o suficiente" (AKITA)
        - enxergar linha do tempo
- [X] Montar estrutura de tópicos história do javascript fireship.io
  - [The Weird History of JavaScript](https://www.youtube.com/watch?v=Sh6lK57Cuk4)
    - 00:00
      - tim berners lee: cristmas day 1990, first world web browser, switzerland, first web server
      - 4 anos depois e ninguém sabia o que era internet direito
      - december 5 1991
      - https://www.w3.org/People/Berners-Lee/WorldWideWeb.html
      - https://www.ecma-international.org/publications/standards/Ecma-262-arch.htm
      - https://thenewstack.io/brendan-eich-on-creating-javascript-in-10-days-and-what-hed-do-differently-today/
      - Al gore "Did Al Gore invented the internet?"
        - provided founding to mosaic browser, first mainstream browser
      - Marc Andreesen and Eric bina (illinois university)
        - no JS only DOM
        - Marc Andreesen co-found netscape
        - Brendan Eich, scheme program language in the browser
      - first js name was Mocha
        - first class functions, dynamic typing and prototye inheritance (self programing language, sun)
        - 10 days? :thinking:
        - 95, mocha to livescript, netscape 2.0, rename to JS
        - MS did a reverse engineering and created jscript
        - created the necessity of a standard, ECMA (European Computer Manufacturers Association)
        - 1997 first version of ECMA
      - Brendan's regrets about strict equality operator, make "easier" to start learn JS
    - 4:40
      - 1999 - dot com crash
      - stock market crash
      - ES3 - strict equality operator ===
      - netscape was bought for AOL
      - "56k are faster than never"
      - ie 80% of market share
      - ajax - pre cursor of SPA
      - 2000
        - ES4 - focus on javascript on enterprise scale
        - Douglas Crockford (json 2003, Yahoo)
        - ES3.1 vs ES4 (2008)
        - ran applications in all browsers
        - 2006 jquery (documentation)
        - 2008 chrome + v8 (completely change the way how js was compiled)
        - 2009 Ryan Dahl (nodejs)
        - 2009 ES5, 10 years after the last oficial spec
          - json support, array object methods, strict mode
        - 2010 js frameworks (SPA)
          - backbone and angularjs
          - Jeremy Ashkenas (coffeescript, underscore js)
        - 2015 ES6: promises, let and const, arrow functions, spread syntax
         - prolific use of babel
         - rise of react
          - uniderectional dataflow, immutability, vDOM
        - bundlers
        - 2019 webassembly

### Links
1. https://cmo.adobe.com/articles/2017/7/a-brief-history-of-ui-and-whats-coming.html#gs.c2503g
1. https://www.wired.com/1997/12/web-101-a-history-of-the-gui/

### Tópicos e fatos durante a pesquisa
1. Buscar por front-end history, não é uma boa
1. indagação: "Sem GUI existiria PC?"
1. indagação: "Com GUI e sem mouse existira PC?"

### timeline
https://www.computerhope.com/issues/ch001802.htm
|Ano|Acontecimento|Descrição|link|
|---|---|---|---|
|1946|ENIAC|Teclado para digitar em cartões perfurados|https://www.computerhope.com/jargon/e/eniac.htm|
|1963|Mouse|Douglas Engelbart, Difundido com o apple lisa|https://www.computerhope.com/jargon/m/mouse.htm, https://www.computerhope.com/issues/ch001083.htm
|1964|Monitor|Monitores crts| https://www.computerhope.com/history/monitor.htm
|1964|Multics, VDTs,|Ver o que estava sendo digitado|https://www.computerhope.com/jargon/m/multics.htm, https://www.computerhope.com/jargon/m/monitor.htm|
|inicio 1970|Altair|Sem teclados| https://www.computerhope.com/jargon/a/altair.htm|
|**1968**|The Mother of All Demos| Primeira demonstração GUI| https://www.computerhope.com/jargon/t/the-mother-of-all-demos.htm
|final 1970|Apple, Radio Shack, Commodore| Teclados vinham com o computador|
|1978|TCP/IP|Bob Kahn and Vint Cerf| https://www.computerhope.com/jargon/t/tcpip.htm
|1981|IBM Model F Keyboard| Origem do teclado atual| 
|1983|DNS|Paul Mockapetris and Jon Postel|https://www.computerhope.com/jargon/d/dns.htm
|1986|IBM Model M Keyboard| teclas de funções | mecanico para membrana
---
## Estrutura apresentação
## Título: ???, Do led que pisca ao fronte-end spectrum
### motivação
- Fabio Akita a história do front-end, série "Começando aos 40"
- Fireship.io, série the weird javascript course
- Black mirror, S04E06 - Black Museum
- Aula de introdução acelera dev
- Minha história
  - paixão gráfica:
    - Crash Bandicoot - 1996 - 5 anos
    - Curso de informática - 1999 - 8 anos
      - programação em excel
      - HowStuffWorks
    - Tibia - 1997 - jogos online
    - Técnico em informática Tupy - 2006 ~ 2008
      - Percebi que a programação de jogos não era algo tão simples
    - Ciências da computação - 2009 ~ 2013
      - Computação gráfica
      - Animação
      - Sistemas multiagentes
      - Inteligência artificial
      - TCC: Avaliação de uma estratégia para garantir coerência de cache e percepção em sistemas cooperativos com apoio à mobilidade
    - Primeiro emprego 2013, flash > html5, CaFE (Canvas Flowchart Engine - vanilla js)
      - **paixão pelo front-end (HTML + JS + CSS)**
    - Especialização em tecnologias e inovações web - 2017 ~ 2018
      - cobrir falhas da graduação (não queria fazer engenharia de software)
### antes da "The Mother of All Demos" 1968
- como saimos da interface hardware para GUI (Graphical User Interface)
  - cartões perfurados, máquina de escrever para cartões perfurados
  - interfaces sem teclados
  - **Douglas Engelbart**, mouse e teclado, pais do IHC 
- evolução das redes
  - começo do vídeo do akita
    - IP, DNS, URL
### criação HTML
- começo vídeo do akita
### guerras e mais guerras
- server side war
- browser war
- js frameworks war