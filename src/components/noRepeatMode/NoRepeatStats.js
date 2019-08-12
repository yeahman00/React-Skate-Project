import React from 'react';

const NoRepeatStats = ({remaining,landed,tried}) => {
    return (
        <div>
           <p> 
             Remaining: {remaining}&ensp; Landed: {landed}/{tried} <br />
           </p> 
        </div>
    )
}

export default NoRepeatStats;