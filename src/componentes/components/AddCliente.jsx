import React from 'react'
import Button from './Button'
import './AddCliente.css'
import { useState } from 'react'

const AddCliente= ({handleClienteAdition}) => {
      const[inputDados,setInputDados] = useState('');

      const handleInputChange =(e)=>{
            setInputDados(e.target.value);
      }

      //    FUNÇÃO CLICK ACIONA O BOTÃO E LIMPA O CAMPO INPUT SETADO

      const handleAddClienteClick=()=>{
           if(inputDados ===""){alert('Nome Vazio')} else{ handleClienteAdition(inputDados)
           }setInputDados(" ");
           console.log(inputDados)
      }
    return (
      <div className='add-cliente-container'>

            <input 
                  onChange={handleInputChange}
                  value={inputDados}
                  className='add-cliente-input' 
                  type="text" 
            />
            <div className="add-cliente-button-container">

            <Button onClick={handleAddClienteClick}>Adicionar</Button>
            </div>
      </div>
       
      );
}
 
export default AddCliente;