import React from 'react';
import ModeButtonArr from './ModeButtonArr.js';

const DisplayModeButton = ({onChange}) => {
    return (
        <div className='topMargin'>
            <b>Mode</b><br />
            {ModeButtonArr.map(mode =>
                (<React.Fragment key={mode.label}>
                    <label key={mode.id}>
                        <input
                            type='radio'
                            name={mode.name}
                            defaultChecked={mode.dChecked} 
                            onChange={onChange} 
                            id={mode.id}
                        />
                        {mode.label + ' '}
                    </label>
                 </React.Fragment>   
            ))
            }
        </div> 
        
    )
};

export default DisplayModeButton;