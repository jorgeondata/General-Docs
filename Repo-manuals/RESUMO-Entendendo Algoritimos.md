## Entendendo Algoritimos, por Aditya Y. Bhargava
[Repositório do Livro](github.com/egonschiele/grokking_algorithms)

## Conteúdo
O autor mostra o conteúdo dividido em duas partes: 
 - Aplicações fundamentais: pesquisa binária, velocidade do algoritmo, notação Big O, estrutura de dados fundamentais (arrays e listas encadeadas) e recursão;

 - Aplicações amplas: técnicas de resolução de problemas, tabelas hash, algoritmos de grafos, KNN e algoritimos adicionais (árvores, índices invertidos, transformada de Fourier, algoritmos paralelos, MapReduce, Filtro de Bloom, HyperLogLog, algoritmos SHA, hash sensitivo local, Troca de chaves de Diffe-Hellman e Programação Linear)

## Introdução a algoritmos
 - Um algoritmo é um conjunto de instruções que realizam uma tarefa.
 - Algoritmos são _precisos_ (indicam a ordem de realização de cada passo), _definidos_ (se seguido duas vezes, obtém-se o mesmo resultado toda vez) e _finito_ (têm um fim, um número determinado de passos).
 - Por conta dessas características, o ***desempenho do algoritmo*** deve ter uma atenção adequada, pois até a estrutura de dados podem fazer uma grande diferença (Como por exemplo de um algoritmo que passa de 4 bilhões de etapas para apenas 32 etapas!)

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




