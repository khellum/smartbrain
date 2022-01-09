import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png'
const Logo = () => ({
    render() {
        return (
            <div className="ma3 mt0" style={{justifyContent: 'flex-start'}}>
                <Tilty className="Tilt br2 shadow-3" options={{ max : 90 }} style={{ height: 100, width: 100 }} >
                    <div className="Tilt-inner pa3"> <img style={{"height" : "80%", "width" : "80%", "padding" : "10%"}} src={brain} alt='brain'/> </div>
                </Tilty>
            </div>
        )
    }
})  

export default Logo;