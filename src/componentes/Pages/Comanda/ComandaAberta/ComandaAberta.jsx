import React from 'react'
import Header from '../../../components/Header';
import  Button  from '../../../components/Button';
import '../ComandaAberta/index.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const ComandaAberta = () => {

    const [produto, setProduto] = useState("0");

    const handleChange =(event)=>{
        setProduto(event.target.value)
    }
    





    return ( 
        <div className="Geral">
            <Header/>
            <div className="Container">
            <h2 className='Menu-Title'>
                Detalhes 
            
                </h2> 

        
                
                <Link className="nav-link active" to="/Momentos">
                    <Button className= 'btn-Voltar' >
                        Voltar
                    </Button>
                </Link>
                <input type="text" onClick={handleChange} />
                <Button className= 'btn-add'
                 onClick={produto}  >
                        adicionar produto
                    </Button>
         

            <p>{produto}</p>


            </div>
          
           

      
          
            


            
           
        </div>
     );
}
 
export default ComandaAberta;