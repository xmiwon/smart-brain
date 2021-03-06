import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className='ma4 mt0'>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Git it a try.'}
            </p>
            <p> {'Sample: https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'}</p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' placeholder='Enter link here' onChange={onInputChange} />
                    <button 
                    className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue' 
                    onClick={onButtonSubmit}>
                    
                    Detect</button>
                    
                    
                </div>

            </div>
        </div>
    );
}
export default ImageLinkForm;