// import { useState } from 'react';
import Link from 'next/link';

function Home() {
    return (

        <div>
            <h1>Home</h1>

            <Link href="/sobre">
                <a>Acessar Pagina Sobre</a>
            </Link>

        </div>
    )
}



// function Contador() {
//     const [contador, setContador] = useState(1);

//     function adicionarContador() {
//         setContador(contador + 1)
//         console.log(contador);
//     }

//     return (
//         <div>
//             <div>{contador}</div>
//             <button onClick={adicionarContador}>Adicionar</button>
//         </div>
//     )
// }



export default Home