import { useState} from 'react';

function Home()
{
    return (
        <div>
            <h1>Home</h1>
            <Contador />
            <h5>Testando</h5>
        </div>
    )
}


function Contador()
{
 const [contador,setContador] = useState(1);

    function adicionarContador() 
    {
        setContador(contador+1)
        console.log(contador);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}



export default Home