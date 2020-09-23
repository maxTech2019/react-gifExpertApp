import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategoria = ({setCategoria}) => {
    
    const [inputvalue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSumit = (e) => {
        e.preventDefault();
        if(inputvalue.trim().length > 1)
        {
            setCategoria(cat =>[inputvalue, ...cat]);
            setInputValue('');
        }
    }
    
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

AddCategoria.propTypes = {
    setCategoria: PropTypes.func.isRequired
}