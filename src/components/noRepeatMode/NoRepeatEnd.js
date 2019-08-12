import React from 'react';
import noRepeatEndArr from './noRepeatEndArr.js';
import randomNum from '../trick/randomNum.js';

const NoRepeatEnd = ({onClick,run}) => {
    if (!run){
    let num = randomNum(noRepeatEndArr.length);
    return (
        <div className='theEnd'>
            That's all the tricks! <br />
            <button
                id='reset'
                onClick={onClick}
            >
            {noRepeatEndArr[num]}
            </button>
        </div>
    )
    }
    return null;
}

export default NoRepeatEnd;
