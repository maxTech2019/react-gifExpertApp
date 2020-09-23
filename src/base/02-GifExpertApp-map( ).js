import React, { useState } from "react";

export const GifExpertApp = () => {

    const [categoria, setCategoria] = useState(['One Puch','Samurai X','Drago Ball']);

    const AgregarCategoria = () => {
        //setCategoria((cat) => ['Super Campeones',...cat,]);
        //setCategoria((cat) => [...cat,'Super Campeones']);
        setCategoria([...categoria,'Super Campeones',]);
        
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={AgregarCategoria}>Agregar</button>
            <ol>
                {
                    categoria.map (elemento => {
                        return <li key={elemento}> {elemento} </li>;
                    })
                }
            </ol>
        </>
    )
}