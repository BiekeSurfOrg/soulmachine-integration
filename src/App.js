import './App.css';
import { createScene } from './soulIntegration'; 
import { useEffect } from 'react';

function App() {

  useEffect(() => {
   createScene()
  }, []); 

  return (
    <div className="App">        
          <video id="sm-video" width="100%" height="100%"></video>
    </div>
  );
}

export default App;
