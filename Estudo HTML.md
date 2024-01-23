/h1 Formas de verificar o aprendizado do uso de React
1. Entender a semelhança do React com tags HTML.
2. Conseguir criar e interpretar um componente.
3. Acessar, interpretar e editar a propriedade-filha de um componente (pai).
4. Modificar um componente de forma que ele possa ter memória (state): Lidar com Componentes JavaScript requer a parte Visual (HTML/CSS), Funcionalidade (Props) e a Memória (State).
5. Entender o Comportamento Declarativo da parte visual. Esse último se mescla com o penúltimo, pois ao entender isso, dá pra fazer os componentes se atualizarem sozinhos, entre outras palavras, entender como funcionam e são usados os "Hooks".

# PERGUNTAS PARA REFLETIR SOBRE APRENDIZADO JAVASCRIPT <h1>
## a) O que é escopo? <h2>
    Se refere à região do código em que uma variável está acessível. Ele define onde sua variável estará disponível, de forma que você não possa ter partes do código quaisquer consigam acessar variáveis de qualquer outra parte do código, evitando "Namespace Collision". Além disso, variáveis definidas dentro de uma função não são acessíveis (ou visíveis) fora da função e temos o _Scope Chain_, que define o acesso a essas variáveis são propagadas em JavaScript: "Quando uma variável é refernciada em uma função, o interpretador primeiro verifica o escopo local (Local Scope) dessa função, caso não seja encontrada, o interpretador continuará procurando na cadeia do escopo até atingit o escopo global, se necessário. Se ainda assim o interpretador não a encontrar, uma mensagem de erro aparecerá." --> Se você tiver funções uma dentro da outra (aninhadas, vulgo _nest_), a _Scope Chain_ é formada.

## b) Qual a diferença de var, let e const? <h2>
    Quando se trata de declaração de variáveis, existem 3 conceitos que estão amarrados: Escopo, Redeclaração e Hoisting. Como vimos antes, o escopo determina onde uma variável está acessível, já a redefinição refere-se à declaração repetida no mesmo escopo, enquanto o Hoisting move as declarações para o topo do escopo durante a fase de compilação. 
        Em relação ao escopo, **var** tem escopo de função, que a variável é acessível em toda a função que foi declarada. Já **let** e **const**, tem escopo de bloco, significando que só são acessíveis apenas dentro do bloco onde foram declaradas;
        Em relação a Redeclaração, **var** permite a redeclaração no mesmo escopo, enquanto **let** e **const** não permitem;
        Em relação ao Hoisting, todas têm esse comportamento, mas para **var**, a inicialização não é movida, apenas a declaração. Enquanto para **let** e **const**, antes da declaração real, essas declarações não podem ser acessadas (temporal dead zone).

## c) Qual a diferença entre os dois exemplos abaixo de criar uma função? <h2>
    function myFunc(){
        // alguma lógica
    }
    and
    var myFunc = function(){
        // alguma lógica
    }
    Primeiro existe duas formas de registrar funções no JavaScript: 'Function Declaration' e 'Function Expression'. A primeira é declarando diretamente a função com **function**, já na segunda, é uma declaração ao lado de uma expressão. Quando é feita a declaração de uma função ou uma variável, ambas sofrem hoisting, mas no caso do **var**, independente do valor atribuido a ela, apenas a variável sofre hoisting e ela recebe o valor de _undefined_, como visto no exemplo abaixo:

    testeExpression();
    var testeExpression = function(){
        console.log('Testando Function Expressions);
    }
    >> _Uncaught TypeError: testeExpression is not a function_

# Idéias de programas <h1>
    https://github.com/florinpop17/app-ideas -> Border-radius Previewer com Carbon Ads, O objetivo desses projetos é encontrar uma forma de subir um site próprio de forma que cada site gere pelo menos 1 centavo de receita; Countdown-Timer-App, com as user stories bem definidas; Lorem-Ipsum-Generator, para gerar temporariamente contexto falso de um layout a trabalhar; Pomodoro-Clock; Apps-Quiz, semelhante ao Buzzfeed, porém com menos spam, mais leve e que entregam assuntos que mexem emocionalmente com as pessoas;  Projetos Intermediários:: Book-Finder-App;Chrome-Theme-Extension;Drawing-App;Slack-Bot-Timezone; Projetos Avançados:: Battleship-Game-Engine;Elevator-Simulator;FastFood-Simulator;Instagram-Clone.

    https://github.com/brillout/awesome-react-components?tab=readme-ov-file#buttons -> Componentes REACT

    https://github.com/enaqx/awesome-react -> Repositório de aprendizado em REACT

    https://www.florin-pop.com/blog/2019/09/100-days-100-projects/ -> Lista de Projetos do FlorinPop

# Guia Definitivo de Programar e Hospedar Sites <h1>
    No começo do desenvolvimento web, se programavam páginas na internet de forma estática, então após os anos 
    2000, começaram as Single Page Application (SPA) e mais recentemente a forma dinâmica. 

Usando NEXT.js , de forma que ele pode implementar todas as três formas de páginas-web. 

    Páginas Estáticas                                    | 
    ---------------------------------------------------- |
    1. Vão domindar a entrega de conteúdos na internet   |
    2. Riscos e custos no processamento antecipados      |
    3. Resultados com sucesso ficam congelados           |
    4. Processado uma vez -> Distribuído infinitas vezes |
    5. Múltiplas cópias em múltiplas CDNs                |
    6. Altíssima disponibilidade                         |
    7. Menor latência possível                           |
    8. Difíceis de serem hackeadas                       |
    Tudo que é dinâmico deve ser "cozinhado" com estática|
## Ambiente de desenvolvimento NEXT.js <h2>
- Criar um novo repositório no GitHub, adicionar .gitignore com o template de Node
- Pegue o link dele e clone-o na sua máquina (Certifique de que você tem instalado o NODE.js com a versão compativel com NEXT.js)
- No terminal crie um arquivo _package.json_ com o comando 'npm init -y'
- Entre com os comandos 'npm install next'; 'npm install react'(servirá para renderizar componentes-web); 'npm install react-dom' para baixar as dependências restantes
- No arquivo _package.json_, na linha 7 "scripts", apague o conteúdo do bloco e escreva "dev": next dev
- Crie uma pasta chamada _pages_ e um arquivo chamado **index.js**
- Escreva uma função na estrutura function Home(){
                                                    return <div>Home</div>
                                                }
                                                export default Home
- Escreva o comando 'npm run dev' e veja o auto-reload já embutido, juntamente com o fast-refresh
- A partir daqui, pare o servidor de desenvolvimento para dar o commit e push
- Entrar no site Versel e logar na conta. Após isso cole o link do repositório que irá trabalhar
- Após fazer o deploy do site, sua página terá as seguintes características:
a. Endereços customizados
b. Replicada em 70 pontos
c. HTTPS automático e gratuito
d. Compressão de arquivos
e. Invalidação automática de cache
f. Code splitting (carregar só o necessário)
g. Inúmeras boas práticas de serviços profissionais