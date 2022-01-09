import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png'
const Logo = () => ({
    render() {
        return (
            <div className="ma4 mt0" style={{justifyContent: 'flex-start'}}>
                <Tilty className="Tilt br2 shadow-3" options={{ max : 90 }} style={{ height: 150, width: 150 }} >
                    <div className="Tilt-inner pa3"> <img style={{"height" : "7em", "width" : "7em", "padding" : "3px"}} src={brain} alt='brain'/> </div>
                </Tilty>
            </div>
        )
    }
})  

export default Logo;