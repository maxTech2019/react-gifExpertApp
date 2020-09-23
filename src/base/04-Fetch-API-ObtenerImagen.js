import React from 'react'

export const GifGrid = ({_categoria}) => {

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Mory&limit=10&api_key=S7QXL6iLyqxHesWbzqsZNa9sMhzHmSZU';
        const resp = await fetch (url);
        //resp.json retorna información sobre: data, meta, pagination del API estos son array.
        //--> const data = await resp.json();

        //Desestructuramos los elementos de la respuesta y unicamente tomamos el array data
        const {data} = await resp.json();

        //Procesamos el array data extrayendo información especifica, barremos cada elemento del
        //array data mediante la función map esta función recibe un callback "Funcion flecha"
        //se ejecutara por cada elemento del array data, el return va a transformar cada uno de 
        //los elementos que estan en el parametro del callback osea el array img y retornara un
        //objeto {} de los elementos con la información que nos interesa.
        //==>En conclusión: mutamos el arreglo a un objeto.
        //con el operador ? estamos preguntando si viene la imagen en img.images utilice el url.

        const gifs = data.map((img) =>{
            return {
                id:img.id,
                title:img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
    }

    getGifs();
    
    return (
        <>
          <h3> {_categoria} </h3>  
        </>
    )
}
