/*Custom Hook. Es la forma de extraer una lógica de algun componente para luego 
reutilizar de una manera sencilla. Los custom hook tambien tiene estado y podría
indicarle a otros componentes que lo utilicen cuando deben renderizarse por que algo
cambio.

Custom Hook = Función con estado.

El estado inicial del useFetchGifs va hacer un objeto que va a tener un arreglo 
data vacio y un loading. Cuando se utilice x 1era vez el useFetchGifs se cargara el
estado por defecto.


OJO: La importanción de React no es necesaria a menos que utilicen o regresen
código JSX*/

import { useState } from 'react'

export const useFetchGifs = () =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    setTimeout(() => {
        setState({
            data: [1,2,3,4,5],
            loading: false
        }
            )
    }, 3000);
    return state; //retorna {data [], loadin:true}
}