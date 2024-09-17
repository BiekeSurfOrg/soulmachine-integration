import './App.css';
import { createScene } from './soulIntegration'; 
function App() {
 
  return (
    <div className="App">
          
          <video id="sm-video" width="100%" height="100%"></video>
        <button onClick={createScene}>generate scene</button>
  
    </div>
  );
}

export default App;
