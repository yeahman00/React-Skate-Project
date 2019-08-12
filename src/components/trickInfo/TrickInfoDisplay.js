import React from 'react';
import trickInfoObj from './trickInfoObj.js';
import attemptsFunction from './attemptsFunction.js';
import trickLib from '../../trickLib.js';

 const TrickInfoDisplay = ({trick,attempts,run}) => {
    if (run){
    return (
    <div>
        <h1>{trickLib(trick)}</h1>
        <div><b>Attempts:  </b>{attempts ? attemptsFunction(attempts) : '---'}</div>
        <div><b>Stance:  </b>{trickInfoObj[trick[0]]}</div>
        <div><b>Front/Backside:  </b>{trickInfoObj[trick[1]]}</div>
        <div><b>Board Rotation:  </b>{trickInfoObj[trick[2]]}</div>
        <div><b>Body Rotation:  </b>{trickInfoObj[trick[3]]}</div>
        <div><b>Flip:  </b>{trickInfoObj[trick[4]]}</div>
    </div>
    )
    }
    return null;
}

export default TrickInfoDisplay;