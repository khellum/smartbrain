import React from 'react';
import Logo from '../Logo/Logo';

const Component = () => ({
    render() {
        return (
            <div className="ma2" style={{display: 'flex'}}>
                <div style={{justifyContent: 'flex-start', width: '50%'}}>
                    <Logo />
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end', width: '50%'}}>
                    <p className="f3 link dim white underling pa2 point pointer" > Sing out! </p>
                </div>
            </div>
        )
    }
})

export default Component;