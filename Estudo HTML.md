/h1 Formas de verificar o aprendizado do uso de React
1. Entender a semelhança do React com tags HTML.
2. Conseguir criar e interpretar um componente.
3. Acessar, interpretar e editar a propriedade-filha de um componente (pai).
4. Modificar um componente de forma que ele possa ter memória (state): Lidar com Componentes JavaScript requer a parte Visual (HTML/CSS), Funcionalidade (Props) e a Memória (State).
5. Entender o Comportamento Declarativo da parte visual. Esse último se mescla com o penúltimo, pois ao entender isso, dá pra fazer os componentes se atualizarem sozinhos, entre outras palavras, entender como funcionam e são usados os "Hooks".

PERGUNTAS PARA REFLETIR SOBRE APRENDIZADO JAVASCRIPT
a) O que é escopo?
    Ele define onde sua variável estará disponível, de forma que você não possa ter partes do código quaisquer consigam acessar variáveis de qualquer outra parte do código, evitando "Namespace Collision". Além disso, variáveis definidas dentro de uma função não são acessíveis (ou visíveis) fora da função e temos o Scope Chain, que define o acesso a essas variáveis são propagadas em JavaScript: "Essa variável existe no meu escopo local? Caso negativo, a procura continua nos escopos superiores até chegar no Global, se ainda assim não encontrar, uma mensagem de erro aparecerá."

b) Qual a diferença de var, let e const?
    Quando se trata de declaração de variáveis, existem 3 conceitos que estão amarrados: Escopo, Redeclaração e Hoisting. 

c) Qual a diferença entre os dois exemplos abaixo de criar uma função?
    function myFunc(){
        // alguma lógica
    }
    and
    var myFunc = function(){
        // alguma lógica
    }
    Primeiro existe duas formas de registrar funções no JavaScript: 'Function Declaration' e 'Function Expression'. A primeira é declarando diretamente a função com <function>, já na segunda, é uma declaração ao lado de uma expressão. Quando é feita a declaração de uma função ou uma variável, ambas sofrem hoisting, mas no caso do <var>, independente do valor atribuido a ela, apenas a variável sofre hoisting e ela recebe o valor de _undefined_, como visto no exemplo abaixo:

    testeExpression();
    var testeExpression = function(){
        console.log('Testando Function Expressions);
    }
    >> Uncaught TypeError: testeExpression is not a function