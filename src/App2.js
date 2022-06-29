import logo from "../logo.svg";
import "../styles/App.css";
import { FaEbay } from "react-icons/fa";
import { Input } from "../components/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <div className="text-white">
          <FaEbay />
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <Input />
        </div>
      </header>
    </div>
  );
}

export default App;
