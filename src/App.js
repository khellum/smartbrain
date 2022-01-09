import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import 'tachyons';
import Particles from "react-tsparticles";
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

const config = { 
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.2,
      },
    },
  },
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
      value: 70,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
  
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
