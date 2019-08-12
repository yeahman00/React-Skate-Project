import React from 'react';
import TrickCheckboxArr from './TrickCheckboxArr.js';

const DisplayTrickCheckbox = ({
                                onChange,
                                checkArr,
                                impossibleDisplay,
                                ollieNorthDisplay,
                                halfImpossible,
                                fullImpossible,
                                halfollieNorth,
                                fullollieNorth
                            }) => {
    return(
        <div>
            {TrickCheckboxArr.map(category =>
                (<React.Fragment key={category.name}>
                    <div className='topMargin'><b>{category.name}</b></div>
                    {category.boxes.map(box =>
                        (<label key={box.name}>
                            <input
                                type='checkbox'
                                name={box.name}
                                value={box.value}
                                onChange={onChange}
                                id={box.id}
                                checked={checkArr[box.id] ? true : false}
                            />
                            {box.label + ' '}
                            {box.name === 'Impossible' || box.name === 'ollieNorth' ? (
                            <React.Fragment>
                            <label 
                                key={'half'.concat(box.name)} 
                                className={box.name === 'Impossible' ? impossibleDisplay : ollieNorthDisplay}
                                >
                                (
                                <input 
                                    type='checkbox'
                                    name={'half'.concat(box.name)}
                                    value='rotation'
                                    onChange={onChange}
                                    checked={['half'.concat(box.name)]}
                                />
                                180
                            </label>
                            <label 
                                key={'full'.concat(box.name)} 
                                className={box.name === 'Impossible' ? impossibleDisplay : ollieNorthDisplay}
                                >
                                <input
                                    type='checkbox'
                                    name={'full'.concat(box.name)}
                                    value='rotation'
                                    onChange={onChange}
                                    checked={['full'.concat(box.name)]}
                                />
                                360)
                            </label>
                            </React.Fragment>
                                ) : null }
                        </label>)
                        )}
                </React.Fragment>)
                )}
        </div>
    );
};

export default DisplayTrickCheckbox;