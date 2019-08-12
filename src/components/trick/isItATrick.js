import randomNum from './randomNum.js'

export default function isItATrick(tricknq,flipArr,hi,fi,ho,fo){
    let flipAgain = flipArr;
  //nothing to check for stance
  //board
    if(tricknq[1] === "nofsbs"){
      tricknq[2] = "noBoard";
      tricknq[3] = "noBody";
    }
  //body
  //body cant rotate if board doesnt******for now
    if(tricknq[3] !== "noBody" && tricknq[2] === "noBoard"){
      tricknq[3] = "noBody";
    }
  //body cant rotate more then board******for now
    if(tricknq[3] === "fullBody" && tricknq[2] === "halfBoard"){
      tricknq[3] = "halfBody";
    }
  //fsbs
    if(tricknq[2] === "noBoard" && tricknq[3] === "noBody"){
      tricknq[1] = "nofsbs";
    }
  //flip 
  //cant be impossible or ollie north if body and board are not the same
  //comparing first letter
    if((tricknq[2][0] !== tricknq[3][0] && tricknq[4] === "Impossible") || (tricknq[2][0] !== tricknq[3][0] && tricknq[4] === "ollieNorth")){
     /*
        ***************************** NEED TO FIX ***********************************
        Below if statement is saying if 'None' is not a flip option then change
        everything else to no rotation. 
        However if the user selected only 180/360 variations then this shouldn't
        be done.
        I'll need to check the body and board arrays to see if noBody and noBoard
        are options in BOTH of them. If they are then this will work. If they aren't
        then I need to check if Impossible/ollieNorth 180/360 are turned on and adjust
        as needed.
        ******************************************************************************
     */ 
        if(!flipAgain.some(flip => flip === 'None')){
        tricknq[1] = "nofsbs";
        tricknq[2] = "noBoard";
        tricknq[3] = "noBody";
      }
      else{
         let finalArr = flipAgain.filter(flip => flip !== 'Impossible' && flip !== 'ollieNorth');
      if(finalArr.length === 1){
        tricknq[4] = "None";
      }
      else{
        tricknq[4] = finalArr[randomNum(finalArr.length)];
      }
    }
  }
       /*
        tricknq[4] = flipAgain[flipNum];
    //run if trick comes up yet again
        if(tricknq[4] === "Impossible" || tricknq[4] === "ollieNorth"){
          flipAgain.splice(flipNum,1);
          flipNum = rngLength(flipAgain.length);
          tricknq[4] = flipAgain[flipNum];
    //run one last time if other trick comes up
          if(tricknq[4] === "Impossible" || tricknq[4] === "ollieNorth"){
          if(flipAgain.length === 1){
            tricknq[4] === "None";
          }
          else{
          flipAgain.splice(flipNum,1);
          flipNum = rngLength(flipAgain.length);
          tricknq[4] = flipAgain[flipNum];
          }
          }
        }
      }
    }
    }*/
  //check if impossible/ollie north 180/360 are enabled
    if(tricknq[4] === "Impossible"){
       if ((!hi && tricknq[3] === 'halfBody') || (!fi && tricknq[3] === 'fullBody')){
        tricknq[3] = "noBody";
        tricknq[2] = "noBoard";
        tricknq[1] = "nofsbs";
      }
    } 
    if(tricknq[4] === "ollieNorth"){
      if ((!ho && tricknq[3] === 'halfBody') || (!fo && tricknq[3] === 'fullBody')){
        tricknq[3] = "noBody";
        tricknq[2] = "noBoard";
        tricknq[1] = "nofsbs";
      }
    }
    return tricknq;
  }