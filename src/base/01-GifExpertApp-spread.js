import React, { useState } from "react";

export const GifExpertApp = () => {

    //Array de categorias que nunca cambien su estado.
    //const categorias = ['One Puch','Samurai X','Drago Ball','Super Campeones'];

   //Implementar un Hook para manejar dinamicamente las categorias, al useState lo iniciamos
   //con el arreglo de categorias.
    const [categoria, setCategoria] = useState(['One Puch','Samurai X','Drago Ball']);


    const AgregarCategoria = () => {
        //Para agregar una nueva categoria al useState utilizamos el operador de propagación 
        //spread sintaxis: [...contenido_anterior, nuevo_contenido]
        
        //Forma 1:
        //setCategoria([...categoria,'Super Campeones']);
        
        //Forma 2:
        //El método setCategoria recibe un callback el cual recibe 2-param el 1ero el estado 
        //anterio y el 2do el nuevo estado
        setCategoria((cat) => [...cat,'Super Campeones']);
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />

            {/*Forma 1: Mostrar las categorias 
             {
                categorias
             }
            */}
            <button onClick={AgregarCategoria}>Agregar</button>

            {/*Forma 2: Mostrar las categorias */}
            <ol>
                {
                    categoria.map (elemento => {
                        return <li key={elemento}> {elemento} </li>;
                    })
                }
            </ol>
        </div>
    )
}


