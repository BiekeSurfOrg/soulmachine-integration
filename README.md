# Soul Machine Integration 

## Available Scripts

### `npm run start-dev`
(Use for local development)
Is used to start the local development server/env.

###   `start`
Is used to serve the applications build(dist) folder when deployed.

###  `start-dev-server`
Is used to imitate the deployed product by building the app and serving the build(dist) folder.

###  `build`
Builds the application.

###    `test`
Runs the test's which we dont have. :)

## Starting the project

cd into the project folder / open a terminal from the IDE and run `npm install`, after everything is installed run `npm run start-dev`

## Components 

there are 3 components in the lockerapp 

1. App: which just renders and holds the other components
2. Soul: Renders either video element with the Sould machine or the Spinner Component based on the state of the Sould Machine. 
3. Spinner: Renders a spinner from the Material UI Library

## Functions

   There is one function 

  ### createScene(func) is called on component render via the `useEffect` lifecycle hook
  #### Parameters
  Takes the set function from the `useState` lifecycle hook as a parameter in order to update the UI when the soul machine is done loading.
  
  #### Variables
  videoEl: The Video element on the DOM;
  scene: The scene object from the soul machine sdk
  

## Deployment 

 Currently all applications are deployed on heroku with my (BorisStankov98) GitHub account and the repositories are forks from the BiekeSurfOrg GitHub Account. 

 The whole deployment process is automated via the scripts mentioned above, so all you need to do in Heroku is select the correct branch you would like to deploy and click on deploy,the rest is taken care of. 
