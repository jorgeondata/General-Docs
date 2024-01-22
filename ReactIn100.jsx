import { useState } from "react";
function Fun() {
    const [state, setState] = useState(0); // Função impura com estados e efeitos. Usar dessa forma é um pouco complexo, mas divertido - Fireship.io
    useEffect(() => {
        alert('Por que é desse jeito?');
    },[state])
    return <p>Olá moindo</p>
}
function Welcome(props){
    return <h1>
        Descobrindo as props com, {props.name}
    </h1>;
}
class WelcomeToHell extends React.Component {
    render(){
        return <h1>
            Agora são as classes, {this.props.name}
        </h1>;
    }
}
function Welcome2 (props){ //Esse aqui seria o chamado Hook resolve a necessidade de usar classes no React -Fireship.io
    const [magic] = useMagic()
    useEffect(() => {
        magic.start()
        return () => magic.stop()
    },[magic])
    return <h1>Agora a mágica, {props.name} 
    </h1>;
}
<button>
    className="btn"
    onClick= [doSomething] </button> // Evento sintético
// Estilizar por si só um componente no React é bem exaustivo mas existem milhares de bibliotecas de CSS para React