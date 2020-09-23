import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({pCategoria}) => {

    //renombramos la desestructuración con el operador ":"

    const { data:images, loading } = useFetchGifs (pCategoria);
    
    return (
        <>
             <h3 className="animate__animated animate__fadeIn"> { pCategoria } </h3>

            {/* Si loading es true se presenta el <p> */}

             { loading && <p className="animate__animated animate__flash">Loading</p>}
            
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
