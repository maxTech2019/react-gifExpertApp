import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

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
          {
            images.map ((img) => 
                <GifGridItem 
                    key = {img.id}
                    //Forma 1: img = {img} 
                    //Forma 2: 
                    {...img}
                      /*Estamos enviando como argumento al GifGridItem un nuevo objeto, 
                      utilizamos el operador spread del img, para enviar cada   
                      uno de los propiedades de las imagenes como elementos 
                      independientes */
                />          
            )
          }
        </>
    )
}
