# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.
### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
# Oppgaver
Vi skal nå bruke noen av punktene som ble gjennomgått på powerpoint presentasjonen.
1. Hvilken størrelse og oppløsning har bildene? Er dette nødvendig? Kan man gjøre noe med det?
   - Btte format fra png til WebP eller AVIF?
   - lagre bildet med lavere oppløsning
2. Hvor mange bilder blir lastet inn? Er det noen bilder som blir lastet inn som ikke er synlige på siden?
3. Sjekk at all tekst er tekst og ikke lastet inn som bilder
4. Spesielle fonter er tyngre å laste enn vanlige fonter - er det noen forbedringer man kan gjøre noe sted?
5. Lazy loading gjør at bare de elementene som synes blir lastet inn. Hvordan blir alle de ulike elementene lastet inn nå?
6. Animasjoner og videoer bruker tredjeparts bibliotek eller JavaScript for å fungere. Fjern unødvendige animasjoner.
Under er fremgangsmåte for å løse noen av problemene. Lykke til!
## How to: Remove Animations
In the tsx-file, locate and remove the animation-related classes. We want to remove all unused code, so please remove the CSS rules related to animations.
## How to: implement Lazy loading
1. Install the react-lazyload library by running the following command in your project directory:
   `npm install react-lazyload`
2. Import the necessary components from the react-lazyload library in your App.tsx file
3. Replace the img tags with LazyLoad components and provide the src and alt attributes as props:
```
  <LazyLoad>
    <img
      className="bounce"
      src="https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="dog"
    />
  </LazyLoad>
```
By wrapping the img tags with the LazyLoad component, the images will only be loaded when they are about to become visible in the viewport. This helps improve the initial loading time of your page.
## How to: implement a pause button for the video.
1. In the App.tsx, add a state variable to track the playing state of the video. Inside the App function, declare a state variable called isPlaying and initialize it to true.
```
   import React, { useState, useRef } from 'react';
   import './App.css';
   function App() {
   const [isPlaying, setIsPlaying] = useState(true);
   const videoRef = useRef<HTMLVideoElement>(null);
    // Rest of the code
    }
```
2. Create a function called togglePlay that will toggle the value of isPlaying when the pause button is clicked. Inside the App function, add the following code:
```
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
    } else {
        videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    }
  };
```
3. Add a button to your TSX that will call the togglePlay function when clicked. Place this button inside the return statement of the App function.
```
                <button onClick={togglePlay}>
                    {isPlaying ? 'Pause' : 'Play'} Video
                </button>
```
