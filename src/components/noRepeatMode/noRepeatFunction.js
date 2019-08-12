import isItATrick from '../trick/isItATrick.js';
import trickLib from '../../trickLib.js';
//import randomNum from '../trick/randomNum.js';

export default function getTrickFunction(checkArr,hi,fi,ho,fo){
        let trickArr = [];
        let trickNameArr = [];

        let stanceArr = checkArr.slice(0,4).filter(Boolean);
        let fsbsArr = checkArr.slice(4,6).filter(Boolean);
        let boardArr = checkArr.slice(6,9).filter(Boolean);
        let bodyArr = checkArr.slice(9,12).filter(Boolean);
        let flipArr = checkArr.slice(-5).filter(Boolean);

        if (!stanceArr.length){stanceArr = ['Regular']};
        if (!fsbsArr.length){fsbsArr = ['nofsbs']};
        if (!boardArr.length){boardArr = ['noBoard']};
        if (!bodyArr.length){bodyArr = ['noBody']};
        if (!flipArr.length){flipArr = ['None']};
        
        for (let stance of stanceArr){
            for (let fsbs of fsbsArr){
                for (let board of boardArr){
                    for (let body of bodyArr){
                        for (let flip of flipArr){
                            let trick = [stance,fsbs,board,body,flip];
                            let legitTrick = isItATrick(trick,flipArr,hi,fi,ho,fo);
                            let legitName = trickLib(legitTrick);
                            
                            if (trickNameArr.every(i => i !== legitName)){
                                trickArr.push(legitTrick);
                                trickNameArr.push(legitName);
                            }

                        }
                    }
                }
            }
        }
        let finalArr = [trickArr,trickNameArr];
        
        return finalArr;     
}