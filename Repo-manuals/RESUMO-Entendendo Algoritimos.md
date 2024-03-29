## Entendendo Algoritimos, por Aditya Y. Bhargava
Repositório do Livro <github.com/egonschiele/grokking_algorithms>

## Conteúdo
O autor mostra o conteúdo dividido em duas partes: 
 - Aplicações fundamentais: pesquisa binária, velocidade do algoritmo, notação Big O, estrutura de dados fundamentais (arrays e listas encadeadas) e recursão;

 - Aplicações amplas: técnicas de resolução de problemas, tabelas hash, algoritmos de grafos, KNN e algoritimos adicionais (árvores, índices invertidos, transformada de Fourier, algoritmos paralelos, MapReduce, Filtro de Bloom, HyperLogLog, algoritmos SHA, hash sensitivo local, Troca de chaves de Diffe-Hellman e Programação Linear).

## I. Introdução a algoritmos
 - Um algoritmo é um conjunto de instruções que realizam uma tarefa.
 - Algoritmos são _precisos_ (indicam a ordem de realização de cada passo), _definidos_ (se seguido duas vezes, obtém-se o mesmo resultado toda vez) e _finito_ (têm um fim, um número determinado de passos).
 - Por conta dessas características, o ***desempenho do algoritmo*** deve ter uma atenção adequada, pois até a estrutura de dados podem fazer uma grande diferença (Como por exemplo de um algoritmo que passa de 4 bilhões de etapas para apenas 32 etapas!).

### Pesquisa Binária
 > Esse algoritmo tem como entrada uma lista ordenada de elementos, e se o elemento que você está buscando está na lista, a pesquisa binária retorna a sua localização. Caso contrário, o retorno é ```none```.
- Numa _pesquisa simples_, você pesquisa os elementos um por um até achar o elemento que você está buscando, o que seria considerado ineficiente, pois demoraria muito tempo (O autor se refere como "pesquisa estúpida").
- Já na _pesquisa binária_, com base nas "características" do elemento que você está buscando, você parte a busca a partir dessas referências, melhorando o desempenho do algoritmo.
> [!TIP]
> De maneira geral, para uma lista de _n_ números, a pesquisa binária precisa de log de n na base 2[^1] para retornar o valor correto, enquanto a pesquisa simples precisa de _n_ etapas.
- Vale lembrar que a pesquisa binária só funciona quando a lista está _ordenada_ , exemplificado pelo código em Python 2.7 abaixo:
```
def pesquisa_binaria(lista,item):
    low = 0
    high = len(lista) - 1
        
    while low <= alto:
    mid = (low + high) / 2
    guess = lista[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None
    minha_lista = [1,3,5,7,9]

print pesquisa_binaria (minha_lista, 3) # => 1 // Aqui se refere a posição 1 para o item 3
print pesquisa_binaria (minha_lista,-1) # => None // Não retorna nada pois não exite posião -1
```

[^1]: "Numa lista com n elementos, qual a quantidade máximas de buscas que você precisaria tentar para encontrar um elemento específico?"

### Tempo de Execução e Notação Big O
 - Quando se fala de eficiência com algoritmos, sempre se está tentando otimizar tempo e espaço: numa pesquisa simples, o número máximo de tentativas é igual ao tamanho da lista, o que chamamos de _tempo linear_. Já para a pesquisa binária, sua execução é com _tempo logarítmico_.
 - Por conta de ambas pesquisas terem _tempos de execução_ distintos devido ao número de itens a serem processados, a ***notação Big O*** foi uma notação criada por Bachmann-Landau, de modo a "descrever a complexidade de um código por termos algébricos".
 > [!WARNING]
 > Imagine que você tem uma lista de tamanho _n_. Seu tempo de execução na notação Big O é "O(n)", onde a mesma NÃO fornece o tempo em segundos, ela permite que você compara o número de operações, ou seja, o quão rápido o algoritmo cresce: ela estabelece o tempo de execução para a pior hipótese.
 - Além do tempo de execução para o pior dos casos, o tempo de execução para um "caso intermediário" também é importante, mais a frente no livro, o autor irá entrar em detalhes. Entretanto, existem cinco tempos de execução ordenados por rapidez:
 ---
1. O(log n)[^2] -> Tempo logarítmico (mais rápido)
2. O(n) -> Tempo linear
3. O(n*log n) -> Algoritmo rápido de ordenação
4. O(n²) -> Algoritmo lento de ordenação
5. O(n!) -> Algoritmo bastante lento

 - Como podemos ver, a notação Big O expressa o tempo de execução ou o espaço necessário de um algoritmo por meio de seu crescimento, ou seja, de acordo com o tamanho da entrada, não sendo medido em segundos mas pelo _número de operações_.

[^2]: Todos os log's mostrados no livro se referem a log na base 2 e não na base 10, como é comumente adotado em livros matemáticos.

## II. Ordenação por Seleção
- Quando queremos armazenar um item na memória do computador, primeiro "pedimos" um espaço para armazenar esse item e ele "responde" com um endereço no qual o item pode ser armazenado. Mas se quisermos armazenar múltiplos itens, usamos _arrays_ e _listas encadeadas_.
> [!TIP]
> Array (vetor) é uma coleção de elementos, todos do mesmo tipo, armazenado em posições adjacentes (contínguas) de memória. Por essas características, arrays podem ser aplicados para:
> - Armazenar dados que precisam ser acessados frequentemente e de forma rápida;
> - Implementar outras estruturas de dados que necessitam de acesso direto a seus elementos;
> - Manipulação de dados em algoritmos de ordenação e busca, para acesso sequencial ou direto a elementos.

> [!TIP2]
> Lista Encadeada é uma estrutura de dados que consiste em uma sequência de _nós_ (elemento básico da lista), onde cada nó armazena duas informações: dados (ou valores) e referência (ou _ponteiros_). Por essas características, listas podem ser aplicados para:
> - Gerenciamento dinâmico de dados com pilhas e filas;
> - Aplicações com incerções e remoções frequentes, como sistemas de gerenciamento de memória e implementação de listas de espera;
> - Manipulação de dados complexos, como editores de texto e históricos de navegação, por exemplo.

| *OPERAÇÃO*[^3] | **ARRAY** |  **LISTA** |
| --- | :---: | :---: |
|   ***LEITURA***      |    O(1)   |    O(n)    |
|   ***INSERÇÃO***     |    O(n)   |    O(1)    |
|   ***ELIMINAÇÃO***   |    O(n)   |    O(1)    |
[^3]: Tabela de tempos de execução
- Embora não tenha apenas uma maneira correta de armazenar itens em cada caso específico, o que determinará o método usado para armazenamento dependerá do caso em questão.
- A posição de um elemento em um array se chama **"índice"**, por isso a terminologia é "o elemento n está no índice tal."
- Existem dois tipos de acesso aos elementos =>
    - _Aleatório_: Apesar do nome, implica dizer que você encontre diretamente o elemento que está buscando através de um índice, sem a necessidade de percorrer outros elementos.
    - _Sequencial_: Significa ler os elementos, um a um, começando pelo primeiro (índice 0). Dessa forma, listas encadeadas só podem lidar com acesso sequencial, sendo necessário passar pelos elementos anteriores a fim de encontrar o elemento buscado.
- Ordenação por seleção

## III. Recursão
- Recursão é quando uma função chama a si mesma.
- Toda função recursiva tem dois casos: caso-base e caso recursivo
- Uma pilha tem duas operações: push e pop
- Todas as chamadas de função vão para a pilha de chamada
- A pilha de chamada pode ficar muito grande e ocupar muita memória
