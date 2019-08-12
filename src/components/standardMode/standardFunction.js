import isItATrick from '../trick/isItATrick.js';
import randomNum from '../trick/randomNum.js';

export default function getTrickFunction(checkArr,hi,fi,ho,fo){

        let stanceArr = checkArr.slice(0,4).filter(Boolean);
        let fsbsArr = checkArr.slice(4,6).filter(Boolean);
        let boardArr = checkArr.slice(6,9).filter(Boolean);
        let bodyArr = checkArr.slice(9,12).filter(Boolean);
        let flipArr = checkArr.slice(-5).filter(Boolean);

        let stance = !stanceArr.length ? 'Regular' : stanceArr[randomNum(stanceArr.length)];
        let fsbs = !fsbsArr.length ? 'nofsbs' : fsbsArr[randomNum(fsbsArr.length)];
        let board = !boardArr.length ? 'noBoard' : boardArr[randomNum(boardArr.length)];
        let body = !bodyArr.length ? 'noBody' : bodyArr[randomNum(bodyArr.length)];
        let flip = !flipArr.length ? 'None' : flipArr[randomNum(flipArr.length)];
        
        let trick = [stance,fsbs,board,body,flip];
        let legitTrick = isItATrick(trick,flipArr,hi,fi,ho,fo);
        
        return legitTrick;     
}