import React from 'react'
import Button from './Button';
import { useState } from 'react';
import './index.css';

const Input = () => {
   
    const [user,setUser]=useState(
        {
        "nome":"",
        "email":"",
        "senha":""
        }
    )
    
    const handleUserChange=(e)=>{
    
        if(e.target.getAttribute('name')==='nameUser'){
    
            setUser({
                "nome":e.target.value,
                "email":user.email,
                "senha":user.senha
            })
    
        }else  if(e.target.getAttribute('name')==='emailUser'){
    
            setUser({
                "nome":user.name,
                "email":e.target.value,
                "senha":user.senha
            })
    
        }else  if(e.target.getAttribute('name')==='senhaUser'){
    
            setUser({
                "nome":user.name,
                "email":user.email,
                "senha":e.target.value
            })
        }
    }
    return ( 
    
        <div className='content'>
          
            <input 
            type="text" 
            name='nameUser' 
            placeholder='Nome'    
            value={user.nome} 
            onChange={(e)=>handleUserChange(e)}/>

            <input 
            type="email" 
            name='emailUser' 
            placeholder='E-mail'  
            value={user.email} 
            onChange={(e)=>handleUserChange(e)}/>

            <input 
            type="password" 
            name='senhaUser' 
            placeholder='Senha'   
            value={user.senha} 
            onChange={(e)=>handleUserChange(e)}/>
          
          <div className="btn-box">
                    <Button onClick="">Cadastrar</Button>
          </div>
        </div>
     );
}
 
export default Input;