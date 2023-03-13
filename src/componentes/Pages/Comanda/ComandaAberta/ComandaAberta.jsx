import React from 'react'
import Header from '../../../components/Header';
import  Button  from '../../../components/Button';
import '../ComandaAberta/index.css'
import { Link } from 'react-router-dom';

const ComandaAberta = () => {





    return ( 
        <div className="Geral">
            <Header/>
            <div className="Container">
            <h2 className='header-page-Vendas'>
                    PDV Controle de Vendas
            
                </h2> 
            <button className="back-button-container">
                
                <Link className="nav-link active" to="/ComandaAberta">
                    <Button className= 'btn-Voltar' >
                        Voltar
                    </Button>
                </Link>
            </button>




            </div>
          
           

      
          
            


            
           
        </div>
     );
}
 
export default ComandaAberta;