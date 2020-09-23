import React, { useState, useEffect } from 'react'

export const GifGrid = ({pCategoria}) => {

    /*Cada vez que se presiona sobre el botón se dispara la petición HTTP, es decir c/vez 
    que hay un cambio en el componente REACT esta volviendo a ejecutar todo el código del 
    componente xq detecto un cambio y hay que actualizar las referencias. 
    ESTO PODRÍA CREAR UN CICLO INFINITO. SOLUCIÓN utilizar useEfect, este me permite
    ejecutar cierto código de manera condicional. El useEfect recibe como parametro una 
    función que es la que deseo ejecutar, el segundo parametro es un arreglo de dependencias
    si le indicamos que no tiene dependencias solo ejecutara el código UNA UNICA VEZ, es decir
    se ejcutara el código cuando el componente es renderizado por primera vez*/

    const [contador, setContador] = useState(0);
    
    const contando = () =>{
        return setContador(contador + 1);
    } 

    useEffect (()=>{
        getGifs();
    },[])

     const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Mory&limit=10&api_key=S7QXL6iLyqxHesWbzqsZNa9sMhzHmSZU';
        const resp = await fetch (url);
        const {data} = await resp.json();

        const gifs = data.map(img =>{
            return {
                id : img.id,
                title : img.title,
                url : img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }

    //Este llamado a la función se esta ejecutando cada vez que se renderiza el componente
    // getGifs();
    
    return (
        <>
          <h3> { pCategoria } </h3>
          <h3> { contador } </h3>
          <button onClick = { contando } >Incrementar</button>
          {/* <button onClick ={() => 1setContador (contador + 1)}>Incrementar</button> */}
        </>
    )
}
