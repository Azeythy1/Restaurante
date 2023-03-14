
import './App.css';
import {BrowserRouter as Router, Routes, Route} from'react-router-dom'

import Home from './componentes/Pages/Home/Home';
import Fotos from './componentes/Pages/Fotos/Fotos';
import Momentos from './componentes/Pages/Momentos/Momentos';
import ComandaAberta from './componentes/Pages/Comanda/ComandaAberta/ComandaAberta';
import ComandaFechada from './componentes/Pages/Comanda/Comandafechada/ComandaFechada';
import Login from './componentes/Pages/Login/Login';
import Cadastro from './componentes/Pages/Cadastro/Cadastro';

function App() {
  return (
    
    <Router className="App">

        <Routes>

          <Route path='/' exact element={<Login/>} />
          <Route path='/Cadastro' element={<Cadastro/> } />
          <Route path='/Home' element={<Home/> } />
          <Route path='/Fotos' element={<Fotos/>} />
          <Route path='/Momentos' element={<Momentos/>} />
          <Route path='/ComandaAberta' element={<ComandaAberta/> } />
          <Route path='/ComandaFechada' element={<ComandaFechada/> } />
        
        </Routes>  
    </Router>
    
    
    

  );
}

export default App;
