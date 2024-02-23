# Texto original: 10,776 palavras / Texto editado: 2,412 palavras

## Introdução
  No ínicio do capítulo, o autor nos faz refletir sobre fazer algo funcionar uma vez não é tão difícil e que fazer da maneira correta (com eficiência e eficácia) é difícil. Pela expêriência do autor, ele sugere que adquirir _conhecimentos_ e _habilidades_, desenvolver _raciocínio lógico_, _insighists_, _dedicação_ e _disciplina_ faz parte de ser um bom profissional. Um bom software para ser criado e mantido, só exige uma fração dos recursos humanos (ou pelo menos deveria), pois mudanças são simples e rápidas, o esforço é reduzido em proporção que a funcionalidade e flexibilidade são maximizadas. Ainda que isso soe um pouco fantasioso para quem já vive no mercado, a experiência do autor reforça que esse nível de organização é possível. No fim do texto, o autor indaga sobre a experiência do leitor:
  
- Você já trabalhou em sistemas tão interconectados e intrincadamente acoplados que qualquer mudança?
- Já trabalhou em sistemas passando por mudanças triviais por semanas e envolvendo grandes riscos?
- Já experimentou impedância de um código ruim e um péssimo design?
- O design de algum dos sistemas em que você trabalhoi já provocou um efeito negativo sobre a moral da equipe, a confiança dos clientes e a paciência dos gerentes?
- Você já viu equipes, departamentos e até empresas serem prejudicadas pela péssima estrutura de um software?
- Já esteve no INFERNO DA PROGRAMAÇÃO?
  
## Cap.1 – O que são Design e Arquitetura?
  ### 1.1 Objetivo
  - Um dos objetivos principais e introdutórios do livro é definir de uma vez por todas que não existe diferença entre _design_ e _arquitetura_. As pessoas normalmente tendem a usar a arquitetura no contexto de algo em um nível mais alto, independente dos detalhes dos níveis mais baixos, enquanto para design, parece sugerir as estruturas e decisões de nível mais baixo. Contudo, ao observar de uma maneira global, os detalhes de baixo nível e a estrutura de alto nível são partes do mesmo todo: juntos, formam um tecido que define e molda um sistema, há uma linha constante de decisões que se estende dos níveis mais altos para os mais baixos, como em um design de software. (Poético, não?).
  - Mas, qual é objetivo dessas decisões? Qual o objetivo do bom design de software? [O objetivo da arquitetura de software é minimizar os recursos humanos necessários para construir e manter um determinado sistema.] A medida da qualidade do design corresponde à medida do esforço necessário para satisfazer as demandas do cliente. 
  > Se o esforço for baixo ao longo da vida do sistema, o design é bom. Se o esforço aumenta a cada nova versão ou release, o design é ruim. Simples assim - Robert C. Martin

  ### 1.2 Estudo de caso
  - O autor nos apresenta 4 gráficos representando o perído do ciclo de vida do produto de software de uma empresa anônima, mostrando crescimento da equipe de engenharia, produtividade no mesmo período, custo por linha de código em função do tempo, produtividade por release e no final, a folha de pagamento do desenvolvedor por release. Em cada caso gráfico são feitas intepretações:
  ### Gráfico 1
  > Nesse gráfico se mostra a necessidade contínua de mais engenheiros, por um lado isso pode se atribuir a complexidade do projeto ou dificuldade na manutenção.
  ### Gráfico 2
  > Não faz sentido você aumentar a quantidade de engenheiros e o código ficar mais complexo, menos código produzido implica numa maior eficiência e qualidade, justamente o que está acontendo aqui
  ### Gráfico 3
  > Esse é um dos gráficos assustadores, pois o custo por linha de código cresce muito rápido. O que justifica um aumento do custo de produção de 40x entre o primeiro e oitavo release?
  ### Gráfico 4
  > Esse gráfico indica que apesar do aumento da equipe e do código produziado, a eficácia de cada release está diminuindo preocupantemente, pois os desenvolvedores são consumidos pela gestão da bagunça.
  ### Gráfico 5 
  > Na visão estratégica, os custos deveriam se justificar pelo desenvolvimento eficiente, mas nesse gráfico, os custos crescentes associados ao desenvolvimento ineficiente e improdutivo estão exigindo que uma atitude drástica seja tomada, pois talvez não seja o caso, mas em algum ponto a receita vai ser ultrapassada pelos custos.
  
  ### 1.3 Conclusão
  - A preocupação de lançar o produto  no mercado o quanto antes significa que você tem um horda de concorrentes e precisa ficar à frente deles, correndo o mais rápido que puder. Não dá para voltar e limpar tudo pois tem sempre um próximo recurso para terminar, ao ponto que a bagunça vai se acumulando e a produtividade continua a se aproximar assintoticamente do zero. Uma das mentiras que desenvolvedores acreditam é a noção de que escrever um código bagunçado permite fazer tudo mais rápido a curto prazo e só diminui o ritmo a longo prazo, e se esquecem que **fazer bagunça é sempre mais lento do que organizar e manter tudo limpo!** Para a organização de desenvolvimento, a melhor opção é **reconhecer e evitar seu próprio excesso de confiança** e **levar a sério a qualidade da arquitetura de software**. Construir um sistema com um design e arquitetura que minimizem o esforço e maximizem a produtividade, para isso, saber quais atributos da arquitetura do sistama podem concretizar esse objetivo.

## Cap.2 – Um conto de Dois Valores

  ### Comportamento x Arquitetura
  - Há um consenso de que todo sistema de software fornece dois valores para os stakeholders: comportamento e estrutura. Da mesma forma, há uma crença de que o trabalho de um programador é apenas fazer a máquina implementar os requisitos e corrigir qualquer bug, quando na verdade não é só isso. Já quanto a estrutura, e uma bem feita, cumpre o propósito de um software (produto[ware] suave[soft], que é ser fácil de mudar e a dificuldade em fazer essas mudanças deve ser proporcional apenas ao escopo da mudança e não à _forma_ da mudança. Mas qual desses fornece o maior valor? Considerando que existem sistemas praticamente impossíveis de mudar, pois o custo da mudança excede seu benefício?
  > Usando a matriz Einsenhower podemos responder essas perguntas da seguinte forma: o comportamente é urgente, mas nem sempre é particularmente importante, enquanto a arquitetura é importante, mas nunca é particularmente urgente. O erro que gerentes e desenvolvedores cometem com frequência é falhar em separar recursos que são urgentes, mas não importantes, daqueles que são realmente urgentes e importantes.
  - Infelizmente a maioria dos gerentes de negócios não estão equipados para avaliar a importância da arquitetura, para isso são _contratados os desenvolvedores de software_. Portanto, é responsabilidade do time de desenvolvimento (ou um squad) garantir que a importância da arquitetura sobre a urgência dos recursos.
  - Francamente, a equipe de desenvolvimento precisa lutar pelo que acredita ser melhor para a empresa, assim como fazem os outros setores. Lembre-se que se a arquitetura vier por último, então o sistema ficará cada vez mais caro para desenvolver, tornando qualquer mudança impossível para uma parte ou todo o sistema.

## Cap.3 - Paradigmas da Programação
 A arquitetura de software começa com o código. Em 1938, Alan Turing estabeleceu as bases do que se tornaria programação de computadores. Em meados da década de 40, Turing já escrevia programas de computador (com laços, ramificações, atribuições, sub-rotinas e outras estruturas familiares) com a linguagem binária. Depois, em 1951, Grace Hopper cunhou o termo _compilador_ e inventou o primeiro compilador, o A0. Depois que o Fortran foi inventado em 1953, começaram a criação constante de linguagens de programação. Por consequência, A seguir explicam-se os paradigmas da programação:
 
 - [Programação Estruturada]: Surgiu como uma reação contra o estilo de programação baseado em _GO TO_, promovendo o uso de estruturas de controle sequênciais (_if_/_then_/_else_), de seleção e de repetição (_do_/_while_/_until_), facilitando a escrita de cógigo mais claro de entender e manter.
 - [Programação Orientada a Objetos]: O conceito de objetos como entidade que contêm tanto _dados_ quanto _métodos_ para operar esses dados, ajudou a desenvolver programas como as pessoas entendm o mundo, promovendo o re-uso de código, encapsulamento e abstração.
 - [Programação Funcional]: Inpirada na matemática e no cálculo lambda, esse paradigma foca em funções e imutabilidade; enfatiza o uso de funções que permitem abstrações e facilitando o racíocinio sobre o código, especialmente em sistemas distribuídos e concorrentes.

 > Deve-se manter um excelente alinhamento desses três paradigmas com as três grandes grandes preocupações da arquitetura: função, separação de componentes e gerenciamento de dados.

## Cap.4 - Programação Estruturada
  > *A programação estruturada impõe disciplina sobre a transferência direta do controle.*
  - A estrutura de controle quando combinadas em uma execução sequencial provavam que todos programas (pelo menos na época) poderiam ser construídos a partir de três estruturas: [sequência], [seleção] e [iteração]. Essas estruturas de controle correspondiam ao mesmo conjunto mínimo de estruturas de controle a partir das quais todos os programas podem ser construídos.
  - As declarações sequenciais podem ser comprovadas por meio de enumeração simples, traçando as entradas da sequência até as saídas da sequência.
  - Declarações de seleção são reaplicações da enumeração: cada caminho na seleção é enumerado, se ambos caminhos retornassem atribuições adequadas, é comprovável.
  - Para comprovar declarações de iteração, é necessário o uso de indução, conceitos de prova matemática. 
  > Provar o uso de declarações requer conhecimento matemático, por isso não se entra muito em detalhe sobre isso.
  - A programação estruturada permite que os módulos sejam decompostos por meio de recursos em unidades comprováveis, ou seja decompor funcionalmente os módulos: pegar a declaração de um problema de larga escala e docompô-la em funções de alto nível, onde cada uma dessas funções pode ser decomposta em funções de níveis mais baixos indefinidamente (A não ser que você represente as funções decompostas por meio de estruturas de controle restritas a programação estruturada).
  > "A matemática é a disciplina que provas as declarações como verdadeiras. Por outro lado, a ciência é a disciplina que prova as declarações como falsas."
  - A programação estruturada força os programadores a decompor um programa recursivamente em um conjunto de pequenas funções comprováveis. Dessa forma, podem ser realizados testes para provar que essas pequenas funções estão incorretas: se os testes falharem na comprovação da inexatidão, consideramos as funções como suficientemente corretas para nossos propósitos.
  - Um programa comprovável é um programa que apresenta algum resultado e os testes mostram a presença, não a ausência, de bugs. _Decomposição funcional_ é uma das melhores práticas de programação moderna.

## Cap.5 - Programação Orientada a Objetos
  > *A programação orientada a objetos impõe disciplina sobre a transferência indireta do controle.*
  - A POO dá suporte a três conceitos estabelecidos: [encapsulamento], [herança] e [polimorfismo].
  - *Encapsulamento* se refere a declarar estruturas de dados e funções em arquivos de cabeçalho, para em seguida, implementá-las em arquivos de implementação. Algumas palavras-chave envolvendo esse conceito incluem _public_,_private_ e _protected_, suportando a ideia de que os programadores não precisem contornar os dados encapsulados.
  - *Herança* é simplesmente a redeclaração de um grupo de variáveis e funções dentro de um escopo fechado. Esse mascaramento acaba sendo conveniente, embroa não ofereça nada de tão diferente.
  - *Polimorfismo* é quando objetos de diferentes classes podem ser tratados através de uma interface comum, permitindo métodos com o mesmo nome, mas implementações diferentes, sejam chamados dependendo do tipo de objeto referenciado.
  - Existe um problema ao criar um comportamento polimórfico usando explicitamete ponteiros para funções, pois seu uso é orientado por um conjunto de convenções manuais: deve-se seguir as convenções de inicializar os ponteiros e para chamar suas funções através desses ponteiros, pois se não lembrar das convenções, [o bug resultante será muito difícil de encontrar e eliminar]. 
  - É possível definir classes abstratas que estabelecem contratos comuns  para interações com dispositivos IO (Input/Output). Plug-ins ou implementações específicas de dispositivos podem ser desenvolvidas como classes que herdam dessas interfaces ou classes abstratas, garantindo que sigam o mesmo contrato de métodos sem expor os detalhes externos.
  - Linguagens orientadas a objetos oferencem um polimorfismo seguro e conveniente, significando que qualquer dependência de código fonte, não importando onde esteja, pode ser invertida. Por exemplo, você pode reorganizar as dependências do código fonte do seu sistema para que o [banco de dados] e [interface do usuário] dependam de regras de negócio em vez o contrário. Como consequência, as regras de negócio, UI e banco de dados podem ser compiladas em três componentes separados ou unidades implantáveis que tenham as mesmas dependências de código fonte.
  - Desenvolvimento independente significa implantar os módulos do seu sistema de forma independente, assim como desenvolvidos independentemente por equipes diferentes.

## Cap.6 - Programação Funcional
  > *A programação funcional impõe diciplina sobre a atribuição.*
  - Primeiro o autor faz uma comparação sobre a diferenças de programas em Java e Clojure: o programa em Java usa uma variável mutável (que muda de estado durante a execução do programa), enquanto no programa em Clojure, as variváveis são inicializadas, mas nunca modificadas. Apesar do exemplo complexo, percebemos uma declaração óbvia: *variáveis em linguagens funcionais não variam*.
  - Todas as condições de corrida ('race conditions'), condições de impasse ('deadlock conditions') e problemas de atualizações simultâneos decorrem das variáveis mutáveis, ou seja, todos os problemas que exigem várias threads e múltiplos processadores não podem acontecer se não houver variáveis mutáveis. A imutabilidade é praticavem dentro de certas concessões.
  - Uma dessas concessões é segregar a aplicação ou serviços contidos nelas, em componentes mutáveis e imutáveis, onde estes últimos realizam suas tarefas de funcionalmente, sem usar nenhuma variável mutável. Então se comunicam com um ou mais dos componentes que não são puramente funcionais e permitem que o estado das variáveis seja modificado. (É um uso bem elegante, se pararmos para analisar).
  - Por conta da mudança de estados, os componentes são expostos a todos problemas de concorrência, recorrenco a prática de _memória transacional_ para proteger as variáveis mutáveis de atualizações concorrentes e condições de corrida. A memória transacinal trata as variáveis na memória do mesmo jeito que um banco de dados: protege as variáveis com esquemas de transação ou repetição.
  - Aplicações bem estruturadas devem ter o máximo possível de processamento para esses componentes imutáveis e o máximo possível de código para fora desses componentes que permitem mutação.
  - Existem também uma estratégia chamada de _Event Sourcing_, em que as transações são armazenadas, mas não o estado e quando este for solicitado, se aplicam todas as transações desde o ínicio. 
  > *Se tivermos armazenamento e poder de processamento suficientes, podemos tornar nossas aplicações imutáveis e, portanto, inteiramente funcionais. O software é composto de sequência, seleção, iteração e indireção. Nada mais, nada menos.*


## Cap.7 - SRP: O princípio da Responsabiildade Única

- SRP
- OCP
- LSP
- ISP
- DIP