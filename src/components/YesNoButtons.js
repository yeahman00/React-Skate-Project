import React from 'react';

const YesNoButtons = ({onClick,run}) => {
    if (run){
    return (
        <div>
            Did you land it? &nbsp;
            <button
                id='yes'
                onClick={onClick}
            >
            Yes
            </button>
            <button
                id='no'
                onClick={onClick}
            >
            No
            </button>
        </div>
    )
    }
    return null;
}

export default YesNoButtons;