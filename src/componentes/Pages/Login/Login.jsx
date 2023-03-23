import  Button  from "../../components/Button";
import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';


const Login = () => {
    
    return ( 
        <>
            <div className='container'>
                <h1>Entrar</h1>
            <div className="content">
                <input type="text" placeholder='Nome' />
                <input type="password" placeholder='Senha' />

                </div>   
                <div className="btn-box">
                    <Button >Entrar</Button>
                </div>
            </div>
            <div className='text-p'>
                <p>Ainda não possui cadastro?</p>
                <Link className="link-menu" to="/Cadastro">Cadastrar</Link>
            </div>
            
        </>
     );
}
 
export default Login;