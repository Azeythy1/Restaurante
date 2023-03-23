import React from 'react'
import './cliente.css'
import{CgClose}from'react-icons/cg';
import {MdOutlinePlaylistAdd}from'react-icons/md';
import { Link } from 'react-router-dom';



    const Cliente = ({cliente,handleClienteCLick, handleClienteDelete}) => {
     
        return (
       
            <div className='cliente-container' 
                style={cliente.fechado ? { borderLeft:' 6px solid #228'} :{}}>


                <div className='cliente-nome' 
                    onClick={()=> handleClienteCLick(cliente.id)}>
                        {cliente.nome}  
                </div>

                <div className="button-container">

                    <button className="edit-comanda-button"> 
                    <Link className="nav-link active" to="/ComandaAberta"><MdOutlinePlaylistAdd/></Link>
                    
                        
                    </button>

                    <button className="remove-cliente-button" 
                    onClick={()=> handleClienteDelete(cliente.id)}
                    >
                        <CgClose/>
                    </button>
                    
                </div>
                     
            </div>
       
         
        );
};
 
export default Cliente;