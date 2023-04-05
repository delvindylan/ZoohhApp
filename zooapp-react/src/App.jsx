import './css/App.css';
import { Route, Routes } from 'react-router-dom'

//Pages 
import Home from './pages/Home.js';
import Impressum from './pages/Impressum'
import Ticket from './pages/Ticket'
import Kontakt from './pages/Kontakt'
// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
              <Navbar/>
            <header className="App-header">
          
<div>
        <Routes>
        <Route path='/' element={ <Home/> }/>
          <Route path='/Impressum' element={ <Impressum/> }/>
          <Route path='/Tickets' element={ <Ticket/> }/>
          <Route path='/Kontakt' element={ <Kontakt/> }/>

        </Routes>
    </div>
    </header>
    </div>
  );
}

export default App;
