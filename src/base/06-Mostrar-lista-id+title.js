import React, { useEffect, useState } from 'react'

export const GifGrid = ({pCategoria}) => {

    const [images, setImages] = useState([]);

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

        setImages(gifs);
    }

    return (
        <>
          <h3> { pCategoria } </h3>
          <ol>
                {/* Forma 1:
                  {
                    images.map (img => {
                        return <li key={ img.id }> { img.title } </li>;
                    })
                  } 
                 -- Vamos a desestructurar el objeto, observe q img se repite img.id y
                 -- img.title, vamos extraer solo los elementos de ese objeto.
                */}

                {
                    images.map (({id, title}) => {
                        return <li key={ id }> { title } </li>;
                    })
                }
            </ol>
        </>
    )
}
