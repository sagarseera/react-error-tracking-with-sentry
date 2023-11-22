import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState();
  
  const methodDoesNotExist = (user) => {
    setName(user.name);
  }
  return (
    <div className="App">
      <header className="App-header">
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
        My name is {name}
        <button onClick={() => methodDoesNotExist()}>Break the world</button>
      </header>
    </div>
  );
}

export default App;
