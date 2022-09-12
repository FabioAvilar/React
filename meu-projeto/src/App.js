import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import './App.css';
import Footer from './components/Footer';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';

function App() {  
  return (
    // <Router>
    //   <ul>
    //     <li><Link to="/">Home</Link></li>
    //     <li><Link to="/emprese">Empresa</Link></li>
    //     <li><Link to="/contato">Contato</Link></li>
    //   </ul>
    //   <Routes>
    //     <Route path="/" element={<Home />} > </Route>
    //     <Route path="/" element={<Contato />} > </Route>
    //     <Route path="/" element={<Empresa />} > </Route>
    //   </Routes>
    // </Router>

    <Footer />
  )
  
}


export default App;
