import { Scene } from '@soulmachines/smwebsdk';

let scene

export async function createScene(){
 const videoEl = document.getElementById('sm-video');

   scene = new Scene({
    videoElement: videoEl,
    apiKey: 'eyJzb3VsSWQiOiJkZG5hLWtiYy0tZXhwbG9yZXItNjczM2M3ZiIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2E0ZGQ5ZjM1LWFiMmQtNGM2Ni05MTE1LWYwODc5YTdlNWMzOCJ9',
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