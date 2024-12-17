import { Scene } from '@soulmachines/smwebsdk';

let scene

export async function createScene(func){
 const videoEl = document.getElementById('sm-video');

   scene = new Scene({
    videoElement: videoEl,
    apiKey: 'eyJzb3VsSWQiOiJkZG5hLWtiYy0tc291bC1zYW50YSIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzQ5Y2U4YjIxLTU1MGUtNDA4YS1iZjkyLWQ1NmIyNzlmOTYwMiJ9',
    requestedMediaDevices: { microphone: true, camera: true },
    requiredMediaDevices: { microphone: true, camera: true },
  });
  
  await scene.connect()
  .then((sessionId) => onConnectionSuccess(sessionId, func))
  .catch((error) => console.log('connection failed: ', error));
}

const onConnectionSuccess =(sessionId, func)=> {
  console.info('success! session id:', sessionId);

  scene
    .startVideo()
    .then((videoState) => {
      func(false)
      console.info('started video with state:', videoState)
    })
    .catch((error) => console.warn('could not start video:', error));
}