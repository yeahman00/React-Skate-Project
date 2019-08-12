import React from 'react';
import StandardDisplay from '../standardMode/StandardDisplay.js';
import NoRepeatDisplay from '../noRepeatMode/NoRepeatDisplay.js';

const GetTrickDisplay = ({run,checkArr,attempts,hi,fi,ho,fo,standardMode,noRepeatMode}) => {
    if (run){
        return (
            <div>
                {standardMode &&
                 <StandardDisplay
                    checkArr={checkArr}
                    attempts={attempts}
                    hi={hi}
                    fi={fi}
                    ho={ho}
                    fo={fo}
                    run={run}
                 />}
                {noRepeatMode &&
                 <NoRepeatDisplay 
                    checkArr={checkArr}
                    attempts={attempts}
                    hi={hi}
                    fi={fi}
                    ho={ho}
                    fo={fo}
                 />}
            </div>
        )
}
    return null;
}

export default GetTrickDisplay;