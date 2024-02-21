## Introdução
  No ínicio do capítulo, o autor nos faz refletir sobre fazer algo funcionar uma vez não é tão difícil e que fazer da maneira correta (com eficiência e eficácia) é difícil. Pela expêriência do autor, ele sugere que adquirir _conhecimentos_ e _habilidades_, desenvolver _raciocínio lógico_, _insighists_, _dedicação_ e _disciplina_ faz parte de ser um bom profissional. Um bom software para ser criado e mantido, só exige uma fração dos recursos humanos (ou pelo menos deveria), pois mudanças são simples e rápidas, o esforço é reduzido em proporção que a funcionalidade e flexibilidade são maximizadas. Ainda que isso soe um pouco fantasioso para quem já vive no mercado, a experiência do autor reforça que esse nível de organização é possível. No fim do texto, o autor indaga sobre a experiência do leitor:
  
- Você já trabalhou em sistemas tão interconectados e intrincadamente acoplados que qualquer mudança?
- Já trabalhou em sistemas passando por mudanças triviais por semanas e envolvendo grandes riscos?
- Já experimentou impedância de um código ruim e um péssimo design?
- O design de algum dos sistemas em que você trabalhoi já provocou um efeito negativo sobre a moral da equipe, a confiança dos clientes e a paciência dos gerentes?
- Você já viu equipes, departamentos e até empresas serem prejudicadas pela péssima estrutura de um software?
- Já esteve no INFERNO DA PROGRAMAÇÃO?
  
## Cap.1 – O que são Design e Arquitetura?
  1.1 Objetivo
  - Um dos objetivos principais e introdutórios do livro é definir de uma vez por todas que não existe diferença entre _design_ e _arquitetura_. As pessoas normalmente tendem a usar a arquitetura no contexto de algo em um nível mais alto, independente dos detalhes dos níveis mais baixos, enquanto para design, parece sugerir as estruturas e decisões de nível mais baixo. Contudo, ao observar de uma maneira global, os detalhes de baixo nível e a estrutura de alto nível são partes do mesmo todo: juntos, formam um tecido que define e molda um sistema, há uma linha constante de decisões que se estende dos níveis mais altos para os mais baixos, como em um design de software. (Poético, não?).
  - Mas, qual é objetivo dessas decisões? Qual o objetivo do bom design de software? [O objetivo da arquitetura de software é minimizar os recursos humanos necessários para construir e manter um determinado sistema.] A medida da qualidade do design corresponde à medida do esforço necessário para satisfazer as demandas do cliente. 
  > Se o esforço for baixo ao longo da vida do sistema, o design é bom. Se o esforço aumenta a cada nova versão ou release, o design é ruim. Simples assim - Robert C. Martin

  1.2 Estudo de caso
  - O autor nos apresenta 4 gráficos representando o perído do ciclo de vida do produto de software de uma empresa anônima, mostrando crescimento da equipe de engenharia, produtividade no mesmo período, custo por linha de código em função do tempo, produtividade por release e no final, a folha de pagamento do desenvolvedor por release. Em cada caso gráfico são feitas intepretações:
  ### Gráfico 1
  Nesse gráfico se mostra a necessidade contínua de mais engenheiros, por um lado isso pode se atribuir a complexidade do projeto ou dificuldade na manutenção.
  ### Gráfico 2
  Não faz sentido você aumentar a quantidade de engenheiros e o código ficar mais complexo, menos código produzido implica numa maior eficiência e qualidade, justamente o que está acontendo aqui
  ### Gráfico 3
  Esse é um dos gráficos assustadores, pois o custo por linha de código cresce muito rápido. O que justifica um aumento do custo de produção de 40x entre o primeiro e oitavo release?
  ### Gráfico 4
  Esse gráfico indica que apesar do aumento da equipe e do código produziado, a eficácia de cada release está diminuindo preocupantemente, pois os desenvolvedores são consumidos pela gestão da bagunça.
  ### Gráfico 5 
  Na visão estratégica, os custos deveriam se justificar pelo desenvolvimento eficiente, mas nesse gráfico, os custos crescentes associados ao desenvolvimento ineficiente e improdutivo estão exigindo que uma atitude drástica seja tomada, pois talvez não seja o caso, mas em algum ponto a receita vai ser ultrapassada pelos custos.
  
  1.3 Conclusão
  - A preocupação de lançar o produto  no mercado o quanto antes significa que você tem um horda de concorrentes e precisa ficar à frente deles, correndo o mais rápido que puder. Não dá para voltar e limpar tudo pois tem sempre um próximo recurso para terminar, ao ponto que a bagunça vai se acumulando e a produtividade continua a se aproximar assintoticamente do zero. Uma das mentiras que desenvolvedores acreditam é a noção de que escrever um código bagunçado permite fazer tudo mais rápido a curto prazo e só diminui o ritmo a longo prazo, e se esquecem que **fazer bagunça é sempre mais lento do que organizar e manter tudo limpo!** Para a organização de desenvolvimento, a melhor opção é **reconhecer e evitar seu próprio excesso de confiança** e **levar a sério a qualidade da arquitetura de software**. Construir um sistema com um design e arquitetura que minimizem o esforço e maximizem a produtividade, para isso, saber quais atributos da arquitetura do sistama podem concretizar esse objetivo.

## Cap.2 – Um conto de Dois Valores

  2.1 Comportamento
  - 
  2.2 Arquitetura
  - 
  2.3 O Valor Maior
  - 
