

import { Link} from'react-router-dom';
import './index.css';
import { TiThMenu } from "react-icons/ti";
export default function Header(){ 
 return(
  <header className="header" >           
      <button className='btnHeader'>
        <TiThMenu onClick={Header}/>
        <div className="navbar">
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link active" to="/Fotos">Vendas</Link>
            <Link className="nav-link active" to="/Momentos">PDV</Link>
       </div>
        </button>
     
      
  </header>
    )
} 
