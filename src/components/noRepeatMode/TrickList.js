import React from 'react';

const TrickList = ({landedArr,trickList}) => {
   if (trickList.length){
     let trick = trickList.slice();
     let land = landedArr.slice();
     let arr = [];

      while (trick.length){
        arr.push(trick.splice(0,1).concat(land.splice(0,1)));
      }
   
      return(
        <div>
           {arr.map(item => 
            (<span
                key={item[0]}
                className={item[1]}
            >
            {item[0]}&nbsp;-&nbsp;               
            </span>)
            )}
        </div>
       )
    }
    return null;
}


export default TrickList;