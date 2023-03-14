

import { Link} from'react-router-dom';
import './index.css';


export default function Header(){ 
 return(
  <header className="header" >           
      
        
        <div className="navbar">
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link active" to="/Fotos">Vendas</Link>
            <Link className="nav-link active" to="/Momentos">PDV</Link>
       </div>
     
     
      
  </header>
    )
} 





