import React from 'react';
import noRepeatFunction from './noRepeatFunction.js';
import TrickInfoDisplay from '../trickInfo/TrickInfoDisplay.js';
import randomNum from '../trick/randomNum.js';
import YesNoButtons from '../YesNoButtons.js';
import NoRepeatStats from './NoRepeatStats.js';
import TrickList from './TrickList.js';
import NoRepeatEnd from './NoRepeatEnd.js';

class NoRepeatDisplay extends React.Component {
    constructor(props){
        super(props); 
        let arroTrick = noRepeatFunction(this.props.checkArr,this.props.hi,this.props.fi,this.props.ho,this.props.fo);
        let randNum = randomNum(arroTrick[0].length);
        this.state = {
            trickArr: arroTrick[0],
            trickNameArr: arroTrick[1],
            num: randNum,
            landed: 0,
            tried: 0,
            trickList: [],
            landedArr: [],
        };

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        let id = e.target.id;

        if (id !== 'reset'){
        let trickArrCopy = this.state.trickArr;
        let trickNameArrCopy = this.state.trickNameArr;
        let num = this.state.num;
        
        if (id === 'yes'){
            this.setState({
                landed: this.state.landed + 1,
                landedArr: this.state.landedArr.concat('landed')
            })
        };
        id === 'no' && this.setState({ landedArr: this.state.landedArr.concat('notLanded') });

        this.setState ({
            trickList: this.state.trickList.concat(trickNameArrCopy[num]), 
            tried: this.state.tried + 1
        }); 

        trickArrCopy.splice(num,1);
        trickNameArrCopy.splice(num,1);
        
        if (trickArrCopy.length){
            let rnum = randomNum(trickArrCopy.length);

            this.setState({ 
                trickArr: trickArrCopy, 
                trickNameArr: trickNameArrCopy, 
                num: rnum, 
            });
        }
      }
      else{ 
        let arroTrick = noRepeatFunction(this.props.checkArr,this.props.hi,this.props.fi,this.props.ho,this.props.fo);
        let randNum = randomNum(arroTrick[0].length);
        this.setState({
            trickArr: arroTrick[0],
            trickNameArr: arroTrick[1],
            num: randNum,
            landed: 0,
            tried: 0,
            trickList: [],
            landedArr: []
        });
      };
    }
    render(){
    return (
        <div>
            <NoRepeatStats
                remaining={!this.state.trickArr.length ? 0 : this.state.trickArr.length - 1}
                landed={this.state.landed}
                tried={this.state.tried}
            />
            <YesNoButtons
                onClick={this.handleChange}
                run={this.state.trickArr.length}
            />
            
            <TrickInfoDisplay
                attempts={this.props.attempts}
                trick={this.state.trickArr[this.state.num]}
                run={this.state.trickArr.length}
            />  
            <NoRepeatEnd 
                onClick={this.handleChange}
                run={this.state.trickArr.length}
            />
            <TrickList
                trickList={this.state.trickList}
                landedArr={this.state.landedArr}
            />
        </div>
    )
    }
}

export default NoRepeatDisplay;