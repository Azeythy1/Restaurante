import React from 'react'
import { useState } from 'react';

const ComandaFechada = () => {
const [texto, setTexto] = useState("Vazio");

const handleChange =(event)=>{
    setTexto(event.target.value)
}

    return ( 
        <>
            <h1>Valor do input com react</h1>
            <input type="text" onChange={handleChange}/>

            <p>{texto}</p>
        </>
     );
}
 
export default ComandaFechada;