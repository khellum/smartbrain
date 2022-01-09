import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className='f3 black' >
            <p>{'This smart brain will detect faces in a picture, try it on'}</p>

            <div className='center'>
                <div className='center form pa4 br4 shadow-5'>
                    <input className="f4 br3 shadow-4 pa2 w-70 center"  type="text" placeholder="Insert an image url"/>
                    <button className="w-30 grow br3 shadow-5 f4 link ph3 pv2 dib white bg-purple"> Detect! </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;