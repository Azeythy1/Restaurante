import  Button  from "../../components/Button";
import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

const Cadastro = () => {
    return ( 
        <>
            <div className='container'>
                <h1>Criar Conta</h1>
            <div className='content'>
                    <input type="text" placeholder='Nome' />
                    <input type="text" placeholder='Senha' />
                     <input type="text" placeholder='E-mail' />
            </div>
                <div className="btn-box">
                    <Button >Enviar</Button>
               
                
                </div>
                </div>
            <div className='text-p'>
                <p >Já Possui Cadastro?</p>
                <Link className="link-menu" to="/">Login</Link>
            </div>
            
        
        </>
     );
}
 
export default Cadastro;