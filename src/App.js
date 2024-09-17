import logo from './logo.svg';
import './App.css';
import { Scene } from '@soulmachines/smwebsdk';

function App() {
  let scene

async function createScene(){
 const videoEl = document.getElementById('sm-video');

   scene = new Scene({
    videoElement: videoEl,
    apiKey: 'eyJzb3VsSWQiOiJkZG5hLWtiYy0tZXhwbG9yZXItNjczM2M3ZiIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2I5NzRjY2FiLTNiNDEtNGFkNS1iZjhlLWFiYzNmOWQzNzUwZiJ9',
    requestedMediaDevices: { microphone: true, camera: true },
    requiredMediaDevices: { microphone: true, camera: true },
  });
  
  await scene.connect()
  .then((sessionId) => onConnectionSuccess(sessionId))
  .catch((error) => console.log('connection failed: ', error));
}

const onConnectionSuccess =(sessionId)=> {
  console.info('success! session id:', sessionId);

  scene
    .startVideo()
    .then((videoState) => console.info('started video with state:', videoState))
    .catch((error) => console.warn('could not start video:', error));
}



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
