import './css/App.css';
import { Route, Routes } from 'react-router-dom'

//Pages 
import Home from './pages/Home.js';
import Impressum from './pages/Impressum'
import Ticket from './pages/Ticket'

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
            <header className="App-header">
        <Navbar/>
        
<div>
        <Routes>
        <Route path='/' element={ <Home/> }/>
          <Route path='/Impressum' element={ <Impressum/> }/>
          <Route path='/Tickets' element={ <Ticket/> }/>
        </Routes>
    </div>
    </header>
    </div>
  );
}

export default App;
