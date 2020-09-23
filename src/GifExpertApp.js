import React, { useState } from "react";
import { AddCategoria } from "./Componentes/AddCategoria";
import { GifGrid } from "./Componentes/GifGrid";

export const GifExpertApp = () => {

    const [categoria, setCategoria] = useState(['One Puch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategoria setCategoria={setCategoria}/>
            <hr />
            <ol>
                {
                    categoria.map (cat => (
                        <GifGrid 
                            key={cat}
                            pCategoria={cat}
                        />
                    ))
                }
            </ol>
        </>
    )
}