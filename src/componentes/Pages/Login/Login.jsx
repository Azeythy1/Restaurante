import React from 'react'
import { Link } from 'react-router-dom';
import '../Login/style.css';


const Login = () => {
    return ( 
        <>
            <div className='container'>
                <h1>Entrar</h1>

                <input type="text" placeholder='Nome' />
                <input type="text" placeholder='Senha' />
                

                <button>Entrar</button>
            </div>
            <div className='text-p'>
                <p>Ainda não posui cadastro?</p>
                <Link className="link-menu" to="/Cadastro">Cadastrar</Link>
            </div>
        
        </>
     );
}
 
export default Login;