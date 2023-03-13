
import './App.css';
import {BrowserRouter as Router, Routes, Route} from'react-router-dom'

import Home from './componentes/Pages/Home/Home';
import Fotos from './componentes/Pages/Fotos/Fotos';
import Momentos from './componentes/Pages/Momentos/Momentos';
import ComandaAberta from './componentes/Pages/Comanda/ComandaAberta/ComandaAberta';
import ComandaFechada from './componentes/Pages/Comanda/Comandafechada/ComandaFechada';

function App() {
  return (
    
    <Router className="App">

        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Fotos' element={<Fotos/>} />
          <Route path='/Momentos' element={<Momentos/>} />
          <Route path='/ComandaAberta' element={<ComandaAberta/> } />
          <Route path='/ComandaFechada' element={<ComandaFechada/> } />
        
        </Routes>  
    </Router>
    
    
    

  );
}

export default App;
