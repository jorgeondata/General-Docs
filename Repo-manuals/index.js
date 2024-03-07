import {useState} from 'react';
function Contador(){
    const [contador,setcontador] = useState(1); //Aqui o useState retorna um Array (índice), onde a variável está na 1ª posição e a função especializada em atualizar a variável está na 2ª posição
    function adicionarContador (){
       setcontador(contador + 1);
    }
    
    return ( // A partir daqui, é a parte Visual do React
        <div>
            <div2>1</div2>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
function Page2 () {
    return <Contador
    
    />
}