import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Comunicación entre componentes: Pasamos como parametro por el props del componente
//desestructuramos los elementos y capturamos solo el método setCategoria del componente
//Padre.

export const AddCategoria = ({setCategoria}) => {
    
    //Este useState es para controlar el estado de la caja de texto
    //Siempre debe tener un valor inicial el useState (''), caso contrario sera undefined 
    //y ello significa que también inputvalue sea undefined y produzca unwarning la app. 
      const [inputvalue, setInputValue] = useState('');

    //Cada vez que se digite una tecla sobre la caja de texto se invoca aesta función 
    //la misma que actualizara el estado de la caja de texto 
      const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //Cada vez que demos enter en el <input> se activa el evento onSubmit y se invocara la 
    //función handleSumit
    const handleSumit = (e) => {
        //evitar el refresh de la página web
        e.preventDefault();

        //Validamos que exista datos en el inputvalue
        if(inputvalue.trim().length > 1)
        {
            setCategoria(cat =>[...cat,inputvalue]);
            setInputValue('');
        }
    }
    //El inputvalue siempre va hacer el último valor actualizado de lo que el usuario escribio.
    //El fragment <></> es utilizado para agrupar elementos JSX, el <form></form> por si es un
    //elemento agrupador de elementos en este caso no hay necesidad de fragment.
    
    return (
        <form onSubmit={handleSumit}>
          <input 
              input='text'
              value ={inputvalue}
              onChange={handleInputChange}
          />
        </form>
    )
}

//Implementamos que setCategoria sea un parametro obligatorio
AddCategoria.propTypes = {
    setCategoria: PropTypes.func.isRequired
}