import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
//import *as trickOptions from './trickOptions.js';
//import {trickLib} from './trickLib.js'
import './index.css';
import GetTrickDisplay from './components/trick/GetTrickDisplay.js';
import DisplayTrickCheckbox from './components/trickCheckboxes/DisplayTrickCheckbox.js';
import DisplayModeButton from './components/modeButtons/DisplayModeButton.js';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      runGetTrick: false,
      checkArr: ['','','','','','','','','','','','','','','','',''],
      attempts: '',
      halfImpossible: false,
      fullImpossible: false,
      halfollieNorth: false,
      fullollieNorth: false,
      standardMode: true,
      noRepeatMode: false
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.state.runGetTrick && this.setState({ runGetTrick: false });
    !this.state.checkArr[15] && this.setState({ halfImpossible: false, fullImpossible: false });
    !this.state.checkArr[16] && this.setState({ halfollieNorth: false, fullollieNorth: false });

    if (e.target.type === 'checkbox'){
      if (e.target.value === 'rotation'){
        e.target.checked ? this.setState({ [e.target.name]: true }) : this.setState({ [e.target.name]: false });
      }
      else{
      let boxName = e.target.name;
      let id = e.target.id;
      let arr = this.state.checkArr;
  
      if (e.target.checked){
        arr.splice(id,1,boxName)
        this.setState({ checkArr: arr });
      }
      else{
        arr.splice(id,1,'');
        this.setState({ checkArr: arr });
      }
    }
    }
    else if (e.target.name === 'selectAll'){
      this.setState({
          checkArr: ['Regular','Switch','Nollie','Fakie','Frontside','Backside','noBoard','halfBoard','fullBoard',
                     'noBody','halfBody','fullBody','None','Kickflip','Heelflip','Impossible','ollieNorth'],
          halfImpossible: true,
          fullImpossible: true,
          halfollieNorth: true,
          fullollieNorth: true          
        });
    }
    else if (e.target.name === 'attempts'){
      let value = e.target.value;
      this.setState({ attempts: value }); 
    }
    else if (e.target.name === 'mode'){
      e.target.id === 'standard' && this.setState({ standardMode: true, noRepeatMode: false });
      e.target.id === 'noRepeat' && this.setState({ standardMode: false, noRepeatMode: true });
    }
    else{this.setState({ runGetTrick: true })}
  };

  render(){
    return(
      <div>
        <DisplayTrickCheckbox 
          onChange={this.handleChange}
          checkArr={this.state.checkArr}
          impossibleDisplay={this.state.checkArr[15] ? 'show' : 'hide'}
          ollieNorthDisplay={this.state.checkArr[16] ? 'show' : 'hide'}
          halfImpossible={this.state.halfImpossible}
          fullImpossible={this.state.fullImpossible}
          halfollieNorth={this.state.halfollieNorth}
          fullollieNorth={this.state.fullollieNorth}
        />
        <button 
          onClick={this.handleChange}
          id='selectAll'
          name='selectAll'
        >
          Select All
        </button><br/>
        <span>Max number of attempts 1-10:  </span>
        <input 
          type='number'
          min='1'
          max='10'
          placeholder='Optional'
          id='attempts'
          name='attempts'
          onChange={this.handleChange}
        /><br />
        <DisplayModeButton
          onChange={this.handleChange}
        />
        <button 
          id='getTrick'
          onClick={this.handleChange}
        >
          Get Trick
        </button>
        <GetTrickDisplay 
          run={this.state.runGetTrick}
          checkArr={this.state.checkArr}
          attempts={this.state.attempts}
          hi={this.state.halfImpossible}
          fi={this.state.fullImpossible}
          ho={this.state.halfollieNorth}
          fo={this.state.fullollieNorth}
          standardMode={this.state.standardMode}
          noRepeatMode={this.state.noRepeatMode}
        />
      </div>
    );
  }
};

ReactDOM.render(<App />,document.getElementById('root'))
