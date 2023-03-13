

import { Link} from'react-router-dom';
import './index.css';



export default function Header(){
 

  
    
 return(
  <header className="header" >
    <div className="content">
            
      <div className="content">

                
       <nav className="navbar ">
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link active" to="/Fotos">Vendas</Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link active" to="/Momentos">PDV</Link>
            </li> 

        </ul>
                <Link type="button" className="btn btn-outline-light" >Contato</Link>
       </nav>
      </div>
    </div>
        
            

  </header>

 
    )
} 
