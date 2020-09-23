import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({pCategoria}) => {

    const [images, setImages] = useState([]);

    /*Tenemos que importar la función del helpers, getGifs recibe como parametro
    una categoria y retorna una promesa por lo cual se utiliza la instrucción then
    así: .then(img => setImages(img)) resumiendo seria:  .then(setImages)
    Nota: Si pCategoria cambia debe volver a ejecutar useEffect() para ello tengo que
    enviar esa dependencia, es decir ubicamos pCategoria en la dependencia del 
    useEffect()*/

    useEffect (()=>{
        getGifs ( pCategoria )
          .then( setImages );
    },[ pCategoria ])

    return (
        <>
             <h3> { pCategoria } </h3>
             <div className="card-grid">
                {
                    images.map ((img) => 
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />          
                    )
                }
            </div>
        </>
        
    )
}
