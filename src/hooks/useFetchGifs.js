import { useState, useEffect } from 'react'
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (Categoria) =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifs(Categoria)
        .then(img => {
            setState({
                    data: img,
                    loading: false
                })
        }); 
    },[ Categoria ])

    return state;
}

/*El custom hook es el que tiene el trabajo pesado:
A. recibe como parametro la categoria y posee un useState "estado" que con un parametro de
   inicialización un objeto con 2 atributos: arreglo data vacio y loading con true.

B. useEffect, ejecutara solo cuando cambie la Categoria, cuando ejecuta llama al helper
   getGifs, este hace la petición HTTP enviando categoria como parametro, recibe 
   una promesa con .then(img => ...), recibimos las imagenes, ubicamos un setTimeout 
   hacer + lento 3 milisegundos una vez tengamos la data llamanos al setState para
   cambiar la información, en el arreglo data cargamos las imagenes y en
   la variable loading cagamos false. 
   
C. El custom hook retorna un state que provocara una renderización al componente
   GifGrid desde donde lo estan llamando.

 */