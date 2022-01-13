import React, { useState }  from 'react';
import ReactPlayer from 'react-player'
import { Box, Slider } from "@mui/material";
import { Link } from 'react-router-dom';

export class ExamplePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 50,
      time: 0
    };

    this.snapshots = []
  }

  handleSliderChange(newValue) {
    this.setState({
      inputValue: newValue,
      time: this.player.getCurrentTime()
    });

    console.log("changed to " + this.state.inputValue)
    let time = this.player.getCurrentTime()
    console.log("played " + time)

    let currState = this.state
    this.snapshots.push(currState)

    console.log("Snapshot" + this.snapshots)
  };

  ref = player => {
    this.player = player
  }

  render() {
    return (
      <div className="ExamplePage">
        <header className="ExamplePage-header">
          <p>
            Example Page
          </p>
          <div>
            <ReactPlayer
                ref={this.ref}
                className='react-player'
                url="https://www.youtube.com/watch?v=LNHBMFCzznE"
                
            />
            <Box sx={{ width: 300 }}>
              <Slider defaultValue={50} 
                    aria-label="Default" 
                    valueLabelDisplay="on" 
                    onChange={evt => this.handleSliderChange(evt.target.value)}
                    step={10}
                    marks
                    min={10}
                    max={100}/>
            </Box>
            
          </div>
        </header>
      </div>
    );
  }
}
 
export default ExamplePage;

 