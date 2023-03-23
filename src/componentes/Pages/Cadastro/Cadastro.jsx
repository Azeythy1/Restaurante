
import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';
import Input from "../../components/input";
// import { useState } from "react";

const Cadastro = () => {   
        
   
    return ( 
        <>
            <div className='container'>
                <h1>Criar Conta</h1>
                    <Input />
                </div>
            <div className='text-p'>
                <p >Já Possui Cadastro?!</p>
                <Link className="link-menu" to="/">Login</Link>
            </div>
        </>
     );
}
 
export default Cadastro;