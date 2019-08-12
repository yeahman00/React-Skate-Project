import React from 'react';
import getTrickFunction from './standardFunction.js';
import TrickInfoDisplay from '../trickInfo/TrickInfoDisplay.js';

const StandardDisplay = ({checkArr,attempts,hi,fi,ho,fo,run}) => {
    return (
        <div>
             <TrickInfoDisplay 
                 trick={getTrickFunction(checkArr,hi,fi,ho,fo)} 
                 attempts={attempts}
                 run={run}
             />
        </div>
    )
}

export default StandardDisplay; 