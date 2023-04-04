
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Ticketlist from "./components/Ticketlist";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <header className="App-header">
        <h1>ZooApp von Justin Calle, Daniel Bischof, Delvin Ngauv</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
