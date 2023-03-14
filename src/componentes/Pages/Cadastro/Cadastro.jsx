import React from 'react'
import { Link } from 'react-router-dom';
import '../Cadastro/style.css';

const Cadastro = () => {
    return ( 
        <>
            <div className='container'>
                <h1>Criar Conta</h1>

                <input type="text" placeholder='Nome' />
                <input type="text" placeholder='Senha' />
                <input type="text" placeholder='E-mail' />

                <button>Enviar</button>
            </div>
            <div className='text-p'>
                <p>Já Possui CAdastro?</p>
                <Link className="link-menu" to="/">Login</Link>
            </div>
        
        </>
     );
}
 
export default Cadastro;