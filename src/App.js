import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import 'tachyons';
import Particles from "react-tsparticles";
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

const config = { 
  fpsLimit: 60,
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },

  }
  
}

class App extends Component  {
  render() {
      const particlesInit = (main) => {
        // console.log(main);
        
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
      
      const particlesLoaded = (container) => {
        // console.log(container);
      };  
      return (
        <div className="App">
        <Particles  className='particles'
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={config}
          />
        <Navigation/>
        <ImageLinkForm/>
        {/* 
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
