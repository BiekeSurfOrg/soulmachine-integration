import logo from './logo.svg';
import './App.css';

import { Scene } from '@soulmachines/smwebsdk';

async function createScene(){
  const scene = new Scene({
    apiKey: 'eyJzb3VsSWQiOiJkZG5hLWtiYy0tZXhwbG9yZXItNjczM2M3ZiIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2I5NzRjY2FiLTNiNDEtNGFkNS1iZjhlLWFiYzNmOWQzNzUwZiJ9',
  });
  
  await scene.connect();
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          
        <video id="sm-video" width="100%" height="100%"></video>
        <button onClick={createScene}>generate scene</button>
        </div>
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
